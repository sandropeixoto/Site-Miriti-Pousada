'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-8 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={getAssetPath("/assets/landing/hero.jpg")} 
          alt="Ecopousada Miriti - Fachada Sustentável" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/30 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-tight italic tracking-tight">
            Ecossustentabilidade e Conforto no Coração de Belém
          </h1>
          <p className="font-body text-xl text-surface-container-lowest max-w-2xl mb-10 leading-relaxed opacity-90 max-w-prose">
            Charme, conforto e compromisso firme com a sustentabilidade. Um refúgio tranquilo no bairro Campina para sua missão oficial ou lazer.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg group">
              <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              Conheça nossas práticas
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
              Reservar Estadia
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
