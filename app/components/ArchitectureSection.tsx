'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ArchitectureSection = () => {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="leaf-shape overflow-hidden shadow-2xl aspect-[4/5] relative">
            <Image 
              src="/assets/landing/asymmetric-arch.jpg" 
              alt="Interiores que celebram a cultura regional" 
              fill
              className="object-cover"
            />
          </div>
          <motion.div 
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 12 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 bg-tertiary-fixed rounded-full flex items-center justify-center p-8 text-center hidden md:flex"
          >
            <p className="text-on-tertiary-fixed font-headline text-sm italic tracking-tight">
              Decoração que celebra a cultura paraense
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-headline text-5xl text-primary leading-tight italic tracking-tight">Espaços pensados para o seu bem-estar.</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-prose">
            Oferecemos 12 apartamentos elegantes projetados para proporcionar conforto absoluto com ventilação natural. Cada ambiente é um refúgio silencioso, ideal para descanso ou missões oficiais em Belém.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-primary font-label uppercase tracking-wide text-sm">Acomodações Flexíveis</h3>
                <p className="text-on-surface-variant text-sm max-w-prose">Suítes que acomodam até 30 pessoas, com ar-condicionado split, frigobar e Smart TV.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-primary font-label uppercase tracking-wide text-sm">Conforto Conectado</h3>
                <p className="text-on-surface-variant text-sm max-w-prose">Wi-Fi de alta velocidade e recepção 24h bilíngue para máxima conveniência.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-primary font-label uppercase tracking-wide text-sm">Sustentabilidade no Cuidado</h3>
                <p className="text-on-surface-variant text-sm max-w-prose">Amenidades ecológicas e limpeza diária com produtos de baixo impacto ambiental.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
