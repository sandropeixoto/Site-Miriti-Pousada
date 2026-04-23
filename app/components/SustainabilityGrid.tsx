'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sun, Droplets, Building2 } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const SustainabilityGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="sustentabilidade">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main Intro */}
        <motion.div 
          variants={item}
          className="md:col-span-2 p-12 bg-surface-container-low rounded-xl flex flex-col justify-center border border-surface-variant/20"
        >
          <span className="font-label text-secondary uppercase tracking-widest text-sm mb-4 font-bold">Desde 2009</span>
          <h2 className="font-headline text-4xl text-primary mb-6 tracking-tight italic">Sustentabilidade Integrada ao Respeito pela História</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-prose">
            A Ecopousada Miriti preservou a edificação original em vez de reconstruir, reduzindo impactos ambientais e valorizando o patrimônio de Belém. Uma escolha que traduz um compromisso genuíno com a sustentabilidade e o respeito cultural.
          </p>
        </motion.div>

        {/* Solar Energy Card */}
        <motion.div 
          variants={item}
          className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto shadow-lg"
        >
          <Sun className="w-10 h-10 text-primary-fixed" aria-hidden="true" />
          <div>
            <h3 className="text-5xl font-headline mb-2 italic tracking-tighter">Limpa</h3>
            <p className="font-label opacity-90 text-sm italic">Energia de fazendas solares e aquecimento solar de água, reduzindo o consumo energético.</p>
          </div>
        </motion.div>

        {/* Wastewater Treatment */}
        <motion.div 
          variants={item}
          className="bg-secondary-container text-on-secondary-container p-10 rounded-xl flex flex-col justify-between border border-secondary/10"
        >
          <Droplets className="w-10 h-10" aria-hidden="true" />
          <div>
            <h3 className="text-5xl font-headline mb-2 italic tracking-tighter">Ciclo</h3>
            <p className="font-label opacity-90 text-sm italic">Sistema de esgoto com filtro biológico e preservação do meio ambiente local.</p>
          </div>
        </motion.div>

        {/* Bio-Architecture */}
        <motion.div 
          variants={item}
          className="md:col-span-2 bg-tertiary text-on-tertiary p-12 rounded-xl flex flex-col md:flex-row gap-8 items-center shadow-inner overflow-hidden"
        >
          <div className="flex-1">
            <Building2 className="w-10 h-10 mb-4 text-tertiary-fixed-dim" aria-hidden="true" />
            <h3 className="text-3xl font-headline mb-4 tracking-tight italic">Eficiência & Regeneração</h3>
            <p className="font-body opacity-80 max-w-prose mb-4">
              Equipamentos Selo A e compra consciente de insumos da comunidade. Nossos jardins internos regeneram o verde urbano em áreas antes pavimentadas.
            </p>
            <p className="text-xs font-label uppercase tracking-widest opacity-60">Infiltração natural e bem-estar</p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative aspect-video">
            <Image 
              src={getAssetPath("/assets/landing/bento-arch.jpg")} 
              alt="Arquitetura sustentável e regeneração verde" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SustainabilityGrid;
