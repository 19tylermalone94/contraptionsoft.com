import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://contraptionsoft.com'),
  title: {
    default: 'ContraptionSoft LLC | AI Agents & Automation for Small Businesses',
    template: '%s | ContraptionSoft LLC',
  },
  description:
    'AI voice agents, workflow automation, and custom software for small businesses. Veteran-owned. Based in Fort Collins, CO — serving Colorado and Central Arkansas.',
  keywords: [
    'AI agents', 'small business automation', 'voice agent', 'AI automation',
    'Fort Collins', 'Colorado', 'Arkansas', 'veteran owned business',
    'workflow automation', 'custom software',
  ],
  authors: [{ name: 'Tyler Malone', url: 'https://contraptionsoft.com' }],
  creator: 'ContraptionSoft LLC',
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ContraptionSoft LLC',
  description:
    'AI voice agents, workflow automation, and custom software for small businesses. Veteran-owned.',
  url: 'https://contraptionsoft.com',
  email: 'tyler@contraptionsoft.com',
  founder: { '@type': 'Person', name: 'Tyler Malone' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fort Collins',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'State', name: 'Arkansas' },
  ],
  knowsAbout: ['AI agents', 'workflow automation', 'voice agents', 'custom software', 'small business technology'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
