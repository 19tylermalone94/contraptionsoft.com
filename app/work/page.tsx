import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work | ContraptionSoft LLC',
  description:
    'Real projects, real outcomes. See how ContraptionSoft built and launched a full website for Malone Septic & Excavation in one week — branding, SEO, and lead generation included.',
  openGraph: {
    title: 'Our Work | ContraptionSoft LLC',
    description:
      'Real projects, real outcomes. Full website launch for a local excavation company in one week — from zero web presence to ranking in search.',
    url: 'https://contraptionsoft.com/work',
    siteName: 'ContraptionSoft LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ContraptionSoft LLC' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | ContraptionSoft LLC',
    description:
      'Real projects, real outcomes. Full website launch for a local excavation company in one week.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://contraptionsoft.com/work' },
};

export default function Work() {
  return <WorkClient />;
}
