'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const PoliciesSection = () => {
  return (
    <section id="facilidades" className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-headline text-5xl text-primary leading-tight italic tracking-tight mb-6">
                Facilidades e Políticas de Reserva
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Na Ecopousada, buscamos oferecer um processo de reserva e políticas claras para garantir uma experiência tranquila e segura para todos os nossos hóspedes, especialmente para profissionais em missão, delegações e grupos.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6" />
                  <h3 className="font-headline text-2xl italic">Condições de Estadia</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="p-4 rounded-xl bg-surface border border-surface-variant/20">
                    <span className="block text-xs font-label uppercase tracking-widest text-secondary mb-1">Check-in</span>
                    <span className="text-on-surface font-medium">A partir das 14:00</span>
                  </li>
                  <li className="p-4 rounded-xl bg-surface border border-surface-variant/20">
                    <span className="block text-xs font-label uppercase tracking-widest text-secondary mb-1">Check-out</span>
                    <span className="text-on-surface font-medium">Até 12:00 (meio-dia)</span>
                  </li>
                  <li className="md:col-span-2 p-4 rounded-xl bg-surface border border-surface-variant/20 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-label uppercase tracking-widest text-secondary mb-1">Identificação</span>
                      <span className="text-on-surface text-sm">É obrigatória a apresentação de documento de identificação de todos os hóspedes no momento do check-in.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <AlertCircle className="w-6 h-6" />
                  <h3 className="font-headline text-2xl italic">Política de Cancelamento</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-primary/5 border-l-4 border-primary">
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide mb-2">Mais de 72 horas de antecedência</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      O hóspede terá direito a um crédito para uma nova data de estadia ou à devolução integral do valor pago.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-secondary/5 border-l-4 border-secondary">
                    <h4 className="font-bold text-secondary text-sm uppercase tracking-wide mb-2">Menos de 72 horas de antecedência</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Será aplicada uma multa equivalente ao valor de uma diária. O saldo restante poderá ser utilizado como crédito para uma futura reserva ou devolvido, com o devido desconto da multa aplicada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src={getAssetPath("/assets/home/Captura-de-Tela-2025-09-10-as-15.15.40.png")} 
                alt="Hospitalidade Ecopousada Miriti" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-0.5 bg-secondary-fixed"></div>
                  <span className="font-label text-xs uppercase tracking-[0.2em] font-bold">Excelência no Atendimento</span>
                </div>
                <p className="font-headline text-2xl italic">Sua tranquilidade é nossa prioridade absoluta.</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;
