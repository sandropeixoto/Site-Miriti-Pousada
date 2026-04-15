'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-surface-variant/30 flex justify-between items-center px-8 py-4"
    >
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/assets/home/7C9UrY4fH5--B8rEtk1Oy.png" 
          alt="Pousada Miriti Logo" 
          width={40} 
          height={40}
          className="object-contain"
        />
        <span className="text-2xl font-headline italic text-primary">
          Pousada Miriti
        </span>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {['Suítes', 'Experiências', 'Sustentabilidade', 'Localização'].map((item) => (
          <Link 
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`font-label text-sm uppercase tracking-wider transition-colors duration-300 ${
              item === 'Sustentabilidade' 
                ? 'text-primary font-bold border-b-2 border-primary/30' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-sm">
        Reservar Agora
      </button>
    </motion.nav>
  );
};

export default Navbar;
