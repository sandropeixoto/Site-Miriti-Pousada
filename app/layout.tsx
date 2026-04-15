import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
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
      <body className={`${newsreader.variable} ${manrope.variable} antialiased font-body`}>
        {children}
      </body>
    </html>
  );
}
