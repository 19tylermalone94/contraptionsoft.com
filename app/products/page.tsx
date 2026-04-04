import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'AI Products | ContraptionSoft LLC',
  description:
    'Voice agents that answer your phone 24/7, AI agents for workflow automation, and local file search — tools built for small businesses that need results, not demos.',
  openGraph: {
    title: 'AI Products | ContraptionSoft LLC',
    description:
      'Voice agents, AI automation, and local file search for small businesses. No vaporware. Deployed tools that run your business.',
    url: 'https://contraptionsoft.com/products',
    siteName: 'ContraptionSoft LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ContraptionSoft LLC' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Products | ContraptionSoft LLC',
    description:
      'Voice agents, AI automation, and local file search for small businesses.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://contraptionsoft.com/products' },
};

export default function Products() {
  return <ProductsClient />;
}
