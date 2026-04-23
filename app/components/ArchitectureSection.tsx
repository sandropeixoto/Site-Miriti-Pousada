'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const ArchitectureSection = () => {
  return (
    <section id="suítes" className="py-24 bg-surface-container-lowest overflow-hidden">
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
              src={getAssetPath("/assets/home/Captura-de-Tela-2025-09-10-as-15.18.55.png")} 
              alt="Acomodações da Ecopousada Miriti" 
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
              Conforto e foco para sua missão oficial
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
          <h2 className="font-headline text-5xl text-primary leading-tight italic tracking-tight">Acomodações Espaçosas e Serviços Pensados no Bem-Estar</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-prose">
            A Ecopousada oferece 12 apartamentos elegantes que acomodam até 30 pessoas, projetados para proporcionar conforto com ventilação natural e uma decoração que celebra a cultura regional. Cada ambiente é silencioso, promovendo descanso e foco.
          </p>

          <ul className="space-y-4">
            {[
              "Ar-condicionado split para climatização personalizada",
              "Frigobar, Smart TV e Wi-Fi para conveniência conectada",
              "Banheiro privativo com amenidades ecológicas",
              "Roupas de cama e banho de alta qualidade, limpeza diária garantida"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                <span className="text-on-surface-variant text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-on-surface-variant text-sm leading-relaxed border-l-2 border-primary/20 pl-4 italic">
            Além disso, a pousada dispõe de recepção 24 horas bilíngue e espaços para coworking e reuniões, assegurando comodidade e segurança para delegações, instituições e profissionais em missões oficiais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
