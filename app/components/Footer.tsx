'use client';

import React from 'react';
import { Instagram, Mail, Phone, MapPin, TreePine } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 w-full rounded-t-[3rem] border-none mt-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-7xl mx-auto">
        {/* About */}
        <div className="space-y-6">
          <div className="text-2xl font-headline italic text-primary tracking-tight">
            Pousada Miriti
          </div>
          <p className="text-on-surface-variant font-body leading-relaxed max-w-prose">
            Um santuário bioclimático urbano dedicado à preservação cultural e ao bem-estar do viajante consciente em Belém.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ecopousadamiriti/" target="_blank" aria-label="Instagram" className="p-3 bg-surface-container rounded-full hover:bg-secondary hover:text-white transition-all text-secondary">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:ecopousadamiriti@hotmail.com" aria-label="E-mail" className="p-3 bg-surface-container rounded-full hover:bg-secondary hover:text-white transition-all text-secondary">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/5591984448586" target="_blank" aria-label="WhatsApp" className="p-3 bg-surface-container rounded-full hover:bg-secondary hover:text-white transition-all text-secondary">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links & Location */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-primary font-label text-sm uppercase tracking-widest">Acesso Rápido</h3>
            <nav className="flex flex-col gap-2">
              <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Políticas de Reserva</a>
              <a className="text-secondary underline underline-offset-4 text-sm font-bold" href="#">Compromisso Ambiental</a>
              <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Galeria de Fotos</a>
              <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">Contato Especial</a>
            </nav>
          </div>
          <div className="space-y-4">
             <h3 className="font-bold text-primary font-label text-sm uppercase tracking-widest">Onde Estamos</h3>
             <div className="flex gap-2 text-on-surface-variant text-sm">
               <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
               <p>
                 Rua Padre Prudencio, 656<br/>
                 Bairro Campina, Belém<br/>
                 Pará, Brasil
               </p>
             </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold text-primary font-label text-sm uppercase tracking-widest">Eco-News</h4>
          <p className="text-on-surface-variant text-sm">Receba novidades sobre nossas iniciativas de sustentabilidade e ofertas para Belém.</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="footer-email" className="sr-only">Seu e-mail</label>
            <div className="flex gap-2">
              <input 
                id="footer-email"
                type="email" 
                placeholder="Seu e-mail"
                className="bg-surface-container-highest border-none rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-primary/20 text-sm outline-none"
              />
              <button className="bg-secondary text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-tertiary transition-all">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-surface-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs font-body">© 2024 Ecopousada Miriti. Alinhando conforto e preservação.</p>
        <div className="flex items-center gap-2">
          <TreePine className="w-4 h-4 text-primary" />
          <span className="text-primary font-bold text-xs uppercase tracking-widest text-[10px]">Carbon Neutral Certified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
