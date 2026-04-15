'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-primary-container text-on-primary-container">
      <div className="max-w-4xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight italic">
            Pronto para uma experiência de reconexão consciente?
          </h2>
          <p className="text-xl mb-12 opacity-90 font-body">
            Estamos no coração de Belém, prontos para receber delegações, instituições e viajantes que buscam alinhar conforto e sustentabilidade.
          </p>
          <button className="bg-surface-bright text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95">
            Ver Disponibilidade
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
