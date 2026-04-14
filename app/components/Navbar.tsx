'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-miriti-leaf tracking-tight">
          Ecopousada Miriti
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#sobre" className="text-stone-600 hover:text-miriti-leaf transition-colors font-medium">Sobre</Link>
          <Link href="#sustentabilidade" className="text-stone-600 hover:text-miriti-leaf transition-colors font-medium">Sustentabilidade</Link>
          <Link href="#acomodacoes" className="text-stone-600 hover:text-miriti-leaf transition-colors font-medium">Acomodações</Link>
          <Link href="#contato" className="btn-primary py-2 px-6 text-sm">Reservar Agora</Link>
        </div>
      </div>
    </nav>
  );
}
