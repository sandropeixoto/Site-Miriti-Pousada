import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegacyContentRenderer from './components/LegacyContentRenderer';

export default function Home() {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-miriti-dark">
          <div className="absolute inset-0 z-0">
             {/* Using the first image found in markdown or frontmatter as hero */}
             <img 
              src={`assets/home/7C9UrY4fH5--B8rEtk1Oy.png`} 
              className="w-full h-full object-cover opacity-60 scale-105"
              alt="Ecopousada Miriti"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-miriti-dark/40 to-miriti-dark/80" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {data.title || "Ecossustentabilidade e Conforto"}
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="#contato" className="btn-primary">Reservar Minha Estadia</a>
              <a href="#sobre" className="text-white hover:text-miriti-accent transition-colors underline-offset-8 underline decoration-miriti-accent/40 font-medium">Ver Detalhes</a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <LegacyContentRenderer content={content} slug="home" />
          </div>
        </section>

        {/* Social / Contact Section */}
        <section id="contato" className="py-24 bg-miriti-cream border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-miriti-dark mb-8">Fale Conosco</h2>
              <p className="text-stone-600 text-lg mb-12 leading-relaxed">
                Estamos prontos para recebê-lo em Belém. Entre em contato para reservas de grupos, 
                delegações ou estadias individuais.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5591984448586" 
                  target="_blank" 
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.55 1.762.889 3.141.889h.002c3.181 0 5.767-2.586 5.768-5.766a5.756 5.756 0 00-5.814-5.759zM12.03 16.1c-1.134 0-2.134-.303-3.041-.861l-.218-.133-1.325.344.354-1.31-.154-.246c-.663-1.057-.905-1.782-.904-2.927.001-2.274 1.851-4.123 4.126-4.123 1.045 0 2.1.442 2.822 1.218a4.08 4.08 0 011.3 2.906c-.001 2.274-1.851 4.122-4.12 4.122zm2.251-3.091c-.124-.062-.734-.361-.848-.403-.114-.041-.197-.062-.28.062-.083.123-.319.402-.39.484-.072.082-.144.092-.269.03-.125-.062-.526-.194-.901-.528-.291-.259-.488-.58-.545-.68-.057-.1-.006-.154.043-.203.045-.044.1-.114.15-.17.045-.056.06-.095.09-.158.03-.063.015-.119-.007-.181-.023-.062-.212-.511-.295-.694-.08-.19-.163-.164-.225-.164h-.192c-.07 0-.184.026-.28.129-.095.103-.364.356-.364.869 0 .513.373 1.01.424 1.08.051.069.733 1.119 1.777 1.57.248.107.441.171.593.22.25.078.477.067.657.04.2-.03.734-.3.837-.59.103-.29.103-.538.072-.591-.03-.052-.114-.082-.238-.145z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 font-medium">WhatsApp</p>
                    <p className="text-miriti-dark font-semibold">+55 91 98444-8586</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/ecopousadamiriti/" 
                  target="_blank" 
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.777 6.977 6.977 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.772-2.618 6.977-6.977.058-1.28.072-1.688.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.354-2.618-6.772-6.977-6.977C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 font-medium">Instagram</p>
                    <p className="text-miriti-dark font-semibold">@ecopousadamiriti</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="premium-card bg-miriti-leaf text-white border-none relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <svg className="w-32 h-32 fill-current" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
               </div>
               <h3 className="text-2xl font-serif mb-6 relative z-10">Informações Rápidas</h3>
               <ul className="space-y-4 relative z-10 text-stone-200">
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-miriti-accent rounded-full" />
                   Check-in: 14h | Check-out: 12h
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-miriti-accent rounded-full" />
                   Café da manhã regional incluso
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-miriti-accent rounded-full" />
                   Wi-Fi de alta velocidade
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-miriti-accent rounded-full" />
                   Energia 100% limpa (Solar)
                 </li>
               </ul>
               <button className="mt-12 w-full py-4 bg-white text-miriti-leaf rounded-xl font-bold hover:bg-miriti-accent hover:text-white transition-all shadow-lg">
                 Fazer Reserva Online
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
