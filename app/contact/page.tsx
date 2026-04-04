import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | ContraptionSoft LLC',
  description:
    'No sales deck. Tell us what problem you\'re dealing with — we\'ll tell you honestly if AI can help and what it would cost. Fort Collins, CO and Central Arkansas.',
  openGraph: {
    title: 'Contact | ContraptionSoft LLC',
    description:
      'Get in touch with ContraptionSoft. No sales deck — just a straight conversation about what AI can actually do for your business.',
    url: 'https://contraptionsoft.com/contact',
    siteName: 'ContraptionSoft LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ContraptionSoft LLC' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | ContraptionSoft LLC',
    description:
      'Get in touch. No sales deck — just a straight conversation about what AI can do for your business.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://contraptionsoft.com/contact' },
};

export default function Contact() {
  return <ContactClient />;
}
