'use client';

const Footer = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 w-full rounded-t-[3rem] border-none mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-700 dark:text-stone-300 text-sm font-body">
          © 2026 Ecopousada Miriti. Alinhando conforto e preservação.
        </p>
        <div className="flex items-center gap-2">
          <a 
            href="https://nano.net.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stone-700 dark:text-stone-300 text-sm font-body hover:text-primary transition-colors"
          >
            Desenvolvido por <span className="font-bold">NANO</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
