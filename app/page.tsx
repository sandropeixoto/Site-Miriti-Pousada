import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SustainabilityGrid from './components/SustainabilityGrid';
import ArchitectureSection from './components/ArchitectureSection';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  matter(fileContent);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        <SustainabilityGrid />
        <ArchitectureSection />
        <Gallery />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
