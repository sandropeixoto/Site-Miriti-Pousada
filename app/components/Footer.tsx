'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-miriti-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
        <div>
          <h3 className="font-serif text-2xl mb-6">Ecopousada Miriti</h3>
          <p className="text-stone-400 leading-relaxed">
            Uma estadia consciente no coração de Belém. 
            Conforto regional com compromisso ambiental.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6">Localização</h4>
          <p className="text-stone-400">
            Rua Padre Prudêncio, 656<br />
            Campina, Belém - PA<br />
            Brasil
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6">Contato</h4>
          <p className="text-stone-400">
            WhatsApp: +55 91 98444-8586<br />
            Email: ecopousadamiriti@hotmail.com
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-stone-500">
          © {currentYear} Ecopousada Miriti. Todos os direitos reservados.
        </p>
        <p className="text-sm text-stone-500">
          Desenvolvido por <a href="https://www.nano.net.br" target="_blank" rel="noopener noreferrer" className="text-miriti-accent hover:underline">Nano</a>
        </p>
      </div>
    </footer>
  );
}
