'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

const CTA = () => {
  const contacts = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: "Email", 
      value: "ecopousadamiriti@hotmail.com", 
      href: "mailto:ecopousadamiriti@hotmail.com" 
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: "WhatsApp", 
      value: "+55 91 98444-8586", 
      href: "https://wa.me/5591984448586" 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: "Instagram", 
      value: "@ecopousadamiriti", 
      href: "https://www.instagram.com/ecopousadamiriti/" 
    }
  ];

  return (
    <section id="contato" className="py-24 bg-primary text-on-primary overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight italic tracking-tight">
            Contato Direto para Reservas e Informações
          </h2>
          
          <p className="text-xl mb-12 opacity-90 font-body max-w-3xl mx-auto leading-relaxed">
            Para garantir sua estadia na Ecopousada Miriti, ideal para delegações, instituições e profissionais em missão oficial, ou esclarecer dúvidas, entre em contato:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {contact.icon}
                </div>
                <span className="text-xs font-label uppercase tracking-widest opacity-70 mb-1">{contact.label}</span>
                <span className="font-bold text-lg">{contact.value}</span>
              </motion.a>
            ))}
          </div>

          <div className="inline-block p-6 rounded-2xl bg-secondary-container text-on-secondary-container shadow-inner">
            <p className="font-body italic leading-relaxed">
              &quot;Nossa equipe está pronta para recebê-lo com atenção personalizada, alinhando conforto e sustentabilidade em sua visita a Belém.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
