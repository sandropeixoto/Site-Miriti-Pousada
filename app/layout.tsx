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
  metadataBase: new URL("https://miritipousada.com.br"),
  title: "Ecopousada Miriti | Ecossustentabilidade e Conforto em Belém",
  description: "A Ecopousada Miriti une charme, conforto e um firme compromisso com a sustentabilidade no coração de Belém.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ecopousada Miriti | Ecossustentabilidade e Conforto em Belém",
    description: "Um santuário bioclimático urbano dedicado à preservação cultural e ao bem-estar no coração de Belém.",
    url: "https://miritipousada.com.br",
    siteName: "Ecopousada Miriti",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/home/7C9UrY4fH5--B8rEtk1Oy.png",
        width: 1200,
        height: 630,
        alt: "Ecopousada Miriti Logo",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Ecopousada Miriti",
  "description": "A Ecopousada Miriti une charme, conforto e um firme compromisso com a sustentabilidade no coração de Belém.",
  "image": "https://miritipousada.com.br/assets/home/7C9UrY4fH5--B8rEtk1Oy.png",
  "url": "https://miritipousada.com.br",
  "telephone": "+5591984448586",
  "email": "ecopousadamiriti@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Padre Prudencio, 656",
    "addressLocality": "Belém",
    "addressRegion": "PA",
    "postalCode": "66019-080",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.4558,
    "longitude": -48.4902
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wi-Fi Gratuito",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Ar Condicionado",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Sustentabilidade",
      "value": "Energia Solar"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${newsreader.variable} ${manrope.variable} antialiased font-body`}>
        {children}
      </body>
    </html>
  );
}
