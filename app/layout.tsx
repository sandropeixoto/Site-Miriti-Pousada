import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecopousada Miriti | Ecossustentabilidade e Conforto em Belém",
  description: "A Ecopousada Miriti une charme, conforto e um firme compromisso com a sustentabilidade no coração de Belém.",
  openGraph: {
    images: ["assets/home/7C9UrY4fH5--B8rEtk1Oy.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
