import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'ContraptionSoft LLC | AI Agents & Automation for Small Businesses',
  description:
    'AI voice agents, workflow automation, and custom software for small businesses. Veteran-owned. Based in Fort Collins, CO — serving Colorado and Central Arkansas.',
  openGraph: {
    title: 'ContraptionSoft LLC | AI Agents & Automation for Small Businesses',
    description:
      'AI voice agents, workflow automation, and custom software for small businesses. Veteran-owned. Fort Collins, CO.',
    url: 'https://contraptionsoft.com',
    siteName: 'ContraptionSoft LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ContraptionSoft LLC' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContraptionSoft LLC | AI Agents & Automation for Small Businesses',
    description:
      'AI voice agents, workflow automation, and custom software for small businesses. Veteran-owned. Fort Collins, CO.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://contraptionsoft.com' },
};

export default function Home() {
  return <HomeClient />;
}
