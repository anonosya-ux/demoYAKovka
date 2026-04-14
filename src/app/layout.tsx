import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

const inter = Inter({ 
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["cyrillic", "latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookBtn from "@/components/FloatingBookBtn";
import FloatingScrollTop from "@/components/FloatingScrollTop";
import MagicCursor from "@/components/MagicCursor";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <StructuredData 
          type="Hotel" 
          data={{
            name: "ГЛК Яковка",
            description: "Горнолыжный курорт и загородный отель в Белокурихе у подножия горы. Семейный отдых, горные лыжи, комфортные номера.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Угрюмова, д. 4",
              addressLocality: "Белокуриха",
              addressRegion: "Алтайский край",
              postalCode: "659900",
              addressCountry: "RU"
            },
            telephone: "+7 (960) 955-21-00",
            url: "https://яковка.рф",
            image: "https://яковка.рф/images/gallery/gallery_1.jpg",
            priceRange: "$$",
            starRating: {
              "@type": "Rating",
              ratingValue: "4"
            }
          }}
        />
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <FloatingBookBtn />
          <FloatingScrollTop />
          <MagicCursor />
          <Footer />
        </div>
      </body>
    </html>
  );
}
