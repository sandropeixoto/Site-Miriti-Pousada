const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

const CONFIG = {
    baseUrl: 'https://miritipousada.com.br',
    outputDir: './content',
    assetsDir: './public/assets',
    maxDepth: 3,
};

// Create directories
[CONFIG.outputDir, CONFIG.assetsDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const visited = new Set();
const sitemap = [];
const externalDependencies = new Set();

async function capture() {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    
    async function scrape(url, depth = 0, parent = null) {
        if (depth > CONFIG.maxDepth || visited.has(url)) return;
        visited.add(url);
        
        console.log(`[Scraping] ${url} (Depth: ${depth})`);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            
            // Scroll to trigger lazy-load
            await page.evaluate(async () => {
                await new Promise(resolve => {
                    let totalHeight = 0;
                    let distance = 300;
                    let timer = setInterval(() => {
                        let scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;
                        if(totalHeight >= scrollHeight){
                            clearInterval(timer);
                            resolve();
                        }
                    }, 100);
                });
            });

            // Extract Content
            const data = await page.evaluate(() => {
                const main = document.querySelector('main') || document.querySelector('#content') || document.querySelector('.elementor') || document.body;
                
                // Clean up some common clutter
                const clonedMain = main.cloneNode(true);
                clonedMain.querySelectorAll('script, style, nav, footer, header, .header, .footer').forEach(el => el.remove());
                
                return {
                    title: document.title,
                    h1: document.querySelector('h1')?.innerText?.trim() || '',
                    html: clonedMain.innerHTML,
                    meta: {
                        description: document.querySelector('meta[name="description"]')?.content || '',
                        keywords: document.querySelector('meta[name="keywords"]')?.content || '',
                        ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
                    }
                };
            });

            // Convert to Markdown
            const markdown = turndownService.turndown(data.html);

            // Map External Media (YouTube/Instagram)
            const embeds = await page.evaluate(() => {
                const items = [];
                // YouTube iframes
                document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]').forEach(el => {
                    items.push({ type: 'YouTube', url: el.src, container: el.parentElement.className });
                });
                // Instagram embeds
                document.querySelectorAll('blockquote.instagram-media, iframe[src*="instagram.com"]').forEach(el => {
                    const url = el.getAttribute('data-instgrm-permalink') || el.src;
                    if (url) items.push({ type: 'Instagram', url: url, container: el.parentElement.className });
                });
                return items;
            });

            // Format Embed Blocks
            let embedMarkdown = '';
            if (embeds.length > 0) {
                embedMarkdown = '\n\n---\n\n';
                embeds.forEach(embed => {
                    embedMarkdown += `[EMBED_EXTERNAL]\nType: ${embed.type}\nURL: ${embed.url}\nOriginal_Container_Class: .${embed.container.split(' ').join('.')}\n\n`;
                });
            }

            // Save Markdown
            const urlObj = new URL(url);
            let slug = urlObj.pathname === '/' ? 'home' : urlObj.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-');
            const mdContent = `---
title: "${data.title}"
slug: "${slug}"
description: "${data.meta.description}"
ogImage: "${data.meta.ogImage}"
---

# ${data.h1}

${markdown}
${embedMarkdown}`;
            
            fs.writeFileSync(path.join(CONFIG.outputDir, `${slug}.md`), mdContent);

            // Add to sitemap
            sitemap.push({
                url,
                slug,
                title: data.title,
                depth,
                parent
            });

            // Identify External Dependencies & Download Assets
            const { assets, externals } = await page.evaluate((baseUrl) => {
                const foundAssets = [];
                const foundExternals = [];
                
                // Images and Docs
                document.querySelectorAll('img, a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"]').forEach(el => {
                    const src = el.src || el.href;
                    if (!src) return;
                    // Download if local OR from gamma.app/imgproxy
                    if (src.startsWith(window.location.origin) || 
                        src.includes(window.location.hostname) || 
                        src.includes('gamma.app')) {
                        foundAssets.push(src);
                    } else if (src.startsWith('http')) {
                        foundExternals.push(src);
                    }
                });

                // All links for external mapping
                document.querySelectorAll('a').forEach(a => {
                    if (a.href && !a.href.startsWith(baseUrl) && a.href.startsWith('http')) {
                        foundExternals.push(a.href);
                    }
                });

                return { 
                    assets: Array.from(new Set(foundAssets)), 
                    externals: Array.from(new Set(foundExternals)) 
                };
            }, CONFIG.baseUrl);

            externals.forEach(ext => externalDependencies.add(ext));

            // Download Assets (organized by slug)
            const slugAssetDir = path.join(CONFIG.assetsDir, slug);
            if (!fs.existsSync(slugAssetDir)) fs.mkdirSync(slugAssetDir, { recursive: true });

            for (const assetUrl of assets) {
                try {
                    const assetUrlObj = new URL(assetUrl);
                    const assetName = path.basename(assetUrlObj.pathname);
                    if (!assetName || !/\.(jpg|jpeg|png|gif|svg|webp|pdf|doc|docx)$/i.test(assetName)) continue;
                    
                    const dest = path.join(slugAssetDir, assetName);
                    
                    if (!fs.existsSync(dest)) {
                        console.log(`[Asset] Downloading ${assetName} for ${slug}`);
                        const response = await page.goto(assetUrl, { waitUntil: 'networkidle', timeout: 30000 });
                        if (response && response.status() === 200) {
                            fs.writeFileSync(dest, await response.body());
                        }
                        // Always go back to current page to keep context
                        await page.goto(url, { waitUntil: 'networkidle' });
                    }
                } catch (e) {
                    console.error(`Failed to download asset ${assetUrl}:`, e.message);
                }
            }

            // Find more internal links
            const internalLinks = await page.evaluate((baseUrl) => {
                return Array.from(document.querySelectorAll('a'))
                    .map(a => a.href)
                    .filter(href => {
                        try {
                            const urlObj = new URL(href);
                            return href.startsWith(baseUrl) && 
                                   !href.includes('#') && 
                                   !href.includes('mailto:') && 
                                   !href.includes('tel:') &&
                                   !/\.(jpg|jpeg|png|gif|svg|webp|pdf|doc|docx)$/i.test(urlObj.pathname);
                        } catch (e) { return false; }
                    });
            }, CONFIG.baseUrl);

            for (const link of internalLinks) {
                await scrape(link, depth + 1, url);
            }

        } catch (err) {
            console.error(`Error scraping ${url}:`, err.message);
        }
    }

    await scrape(CONFIG.baseUrl);

    // Save Logs
    fs.writeFileSync(path.join(CONFIG.outputDir, 'sitemap.json'), JSON.stringify(sitemap, null, 2));
    fs.writeFileSync(path.join(CONFIG.outputDir, 'external-dependencies.json'), JSON.stringify(Array.from(externalDependencies), null, 2));
    
    await browser.close();
    console.log('Capture Complete!');
}

capture();
