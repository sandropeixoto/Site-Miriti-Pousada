'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

const LocationSection = () => {
  const points = [
    { time: "2 minutos", place: "Praça da República" },
    { time: "5 minutos", place: "Estação das Docas" },
    { time: "20 minutos", place: "Aeroporto Internacional" },
    { time: "3 minutos", place: "Theatro da Paz (histórico)" }
  ];

  return (
    <section id="localização" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest font-bold">
              <MapPin className="w-4 h-4" />
              Localização Privilegiada
            </div>
            
            <h2 className="font-headline text-5xl text-primary leading-tight italic tracking-tight">
              Localização Central e Tranquila para Máxima Conveniência
            </h2>
            
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Situada na <span className="font-bold text-primary">Rua Padre Prudencio, 656</span>, no bairro Campina, a Ecopousada Miriti alia acesso fácil aos pontos estratégicos de Belém com a serenidade de um bairro residencial. Sua localização privilegiada permite deslocamentos rápidos para os principais locais da cidade, tornando-a ideal para delegações, instituições e profissionais em missão oficial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {points.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-surface-variant/20 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <span className="block font-bold text-secondary text-sm">{item.time}</span>
                    <span className="text-on-surface-variant text-sm">{item.place}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[600px] bg-surface-container-high group"
          >
            {/* Placeholder for Google Maps or an artistic map illustration */}
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-l+2ecc71(-48.4902,1.4558)/-48.4902,1.4558,15,0/1000x1000?access_token=pk.eyJ1IjoibWlyaXRpIiwiYSI6ImNrcW8xbmZ6eDAyMjAybm54YmZ4YmZ4eSJ9')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary">Ecopousada Miriti</h4>
                  <p className="text-sm text-on-surface-variant">Rua Padre Prudencio, 656 - Campina, Belém</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Ecopousada+Miriti+Rua+Padre+Prudencio+656+Belém" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <Navigation className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
