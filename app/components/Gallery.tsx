'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';

const Gallery = () => {
  const images = [
    { src: getAssetPath('/assets/landing/gallery-1.jpg'), alt: 'Suíte Miriti', class: 'rounded-xl' },
    { src: getAssetPath('/assets/landing/gallery-2.jpg'), alt: 'Detalhes Regionais', class: 'asymmetric-card-1' },
    { src: getAssetPath('/assets/landing/gallery-3.jpg'), alt: 'Ambiente Sustentável', class: 'rounded-xl' },
    { src: getAssetPath('/assets/landing/gallery-4.jpg'), alt: 'Iluminação Natural', class: 'rounded-xl' },
    { src: getAssetPath('/assets/landing/gallery-5.jpg'), alt: 'Café da Manhã Regional', class: 'leaf-shape' },
    { src: getAssetPath('/assets/landing/gallery-6.jpg'), alt: 'Jardins Internos', class: 'rounded-xl' },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="experiências">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl text-primary mb-4 italic"
        >
          Essência em Detalhes
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          className="h-1 bg-secondary mx-auto rounded-full"
        ></motion.div>
      </div>

      <div className="columns-1 md:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <div className={`relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 ${img.class}`}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={600}
                height={800}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-label text-sm uppercase tracking-widest font-bold">{img.alt}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
