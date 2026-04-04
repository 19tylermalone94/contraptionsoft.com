import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | ContraptionSoft LLC',
  description:
    'ContraptionSoft LLC is run by Tyler Malone — software engineer, Marine veteran, and someone who gets real AI tools into the hands of small businesses. Fort Collins, CO.',
  openGraph: {
    title: 'About | ContraptionSoft LLC',
    description:
      'Veteran-owned software company run by Tyler Malone. AI tools built straight, delivered fast, explained plainly. Fort Collins, CO.',
    url: 'https://contraptionsoft.com/about',
    siteName: 'ContraptionSoft LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ContraptionSoft LLC' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | ContraptionSoft LLC',
    description:
      'Veteran-owned software company run by Tyler Malone. Fort Collins, CO.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://contraptionsoft.com/about' },
};

export default function About() {
  return <AboutClient />;
}
