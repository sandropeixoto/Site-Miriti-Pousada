'use client';

import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface Props {
  content: string;
  slug: string;
}

export default function LegacyContentRenderer({ content, slug }: Props) {
  return (
    <article className="prose prose-stone prose-lg max-w-none 
      prose-headings:font-serif prose-headings:text-miriti-dark
      prose-p:text-stone-600 prose-p:leading-relaxed
      prose-img:rounded-2xl prose-img:shadow-lg">
      <ReactMarkdown
        components={{
          img: ({ ...props }) => {
            // Map external Gamma images to local ones if they were downloaded
            const src = typeof props.src === 'string' ? props.src : '';
            const fileName = src.split('/').pop();
            const localSrc = `assets/${slug}/${fileName}`;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="my-12"
              >
                <img 
                  {...props} 
                  src={localSrc} 
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                  alt={props.alt || 'Ecopousada Miriti'}
                  onError={(e) => {
                    // Fallback to original if local fails
                    const fallbackSrc = typeof props.src === 'string' ? props.src : '';
                    (e.target as HTMLImageElement).src = fallbackSrc;
                  }}
                />
              </motion.div>
            );
          },
          h1: ({ children }) => <h1 className="text-4xl md:text-5xl mb-8">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl md:text-4xl mt-16 mb-6 border-b border-miriti-accent/20 pb-4">{children}</h2>,
          li: ({ children }) => <li className="text-stone-600 my-2">{children}</li>,
          p: ({ children }) => <p className="mb-6">{children}</p>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
