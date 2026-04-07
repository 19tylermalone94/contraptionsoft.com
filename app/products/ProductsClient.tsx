'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiPhone, FiFileText, FiTrendingUp, FiEye, FiBook, FiCalendar,
  FiCheck, FiArrowRight,
} from 'react-icons/fi';
import StreamText from '../components/StreamText';

const t = (words: number, speed = 28) => words * speed;

const HEADER_LABEL = 0;
const HEADER_H1    = 350;
const HEADER_SUB   = 750;
const HEADER_DONE  = HEADER_SUB + t(22, 22);

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

const ROLES = [
  {
    icon: FiPhone,
    title: 'Front Desk Agent',
    tagline: 'Handles your phones and inbound messages so nothing slips.',
    items: [
      'Answers after-hours calls and captures leads',
      'Responds to contact form submissions with a personalized follow-up',
      'Handles common FAQ-style questions without human involvement',
      'Sends appointment reminders and follow-ups via SMS or email',
    ],
  },
  {
    icon: FiFileText,
    title: 'Office Manager',
    tagline: 'Keeps the back office moving without you chasing it.',
    items: [
      'Drafts and sends invoices, then follows up on unpaid ones',
      'Pulls reports from QuickBooks, Stripe, or Square and summarizes them in plain English',
      'Monitors your Gmail inbox, triages by urgency, and drafts replies for review',
      'Fills out repetitive forms — permits, vendor onboarding, and similar',
    ],
  },
  {
    icon: FiTrendingUp,
    title: 'Sales Rep',
    tagline: 'Works your pipeline without you managing it.',
    items: [
      'Enriches inbound leads — looks up the business, pulls contact info, scores them',
      'Moves deals through pipeline stages based on email activity',
      'Sends drip follow-up sequences after a quote goes out',
      'Alerts you when a high-value lead goes cold',
    ],
  },
  {
    icon: FiEye,
    title: 'On-Call Monitor',
    tagline: 'Watches what matters and flags anything that needs attention.',
    items: [
      'Monitors your website uptime and pings you if it goes down',
      'Scrapes competitor pricing or job postings on a schedule',
      'Watches Google Reviews and drafts a response when a new one drops',
      'Tracks mentions of your business name across the web',
    ],
  },
  {
    icon: FiBook,
    title: 'Research Assistant',
    tagline: 'Answers questions and drafts documents from your own material.',
    items: [
      'Answers employee questions against your document library',
      'Summarizes a week of emails or Slack messages every Monday morning',
      'Generates a first draft of a proposal or SOW from a few bullet points',
      'Transcribes voicemails and routes them to the right person',
    ],
  },
  {
    icon: FiCalendar,
    title: 'Executive Assistant',
    tagline: 'Handles the scheduling and coordination you keep putting off.',
    items: [
      'Finds a meeting time across multiple calendars and sends the invite',
      'Reminds you about recurring tasks before you forget them',
      'Auto-schedules social posts from a content queue',
      'Tracks recurring deadlines so they don\'t sneak up on you',
    ],
  },
];

// Stagger card appearance after header
const CARD_BASE = HEADER_DONE + 200;
const CARD_GAP  = 120;

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.p {...appear(HEADER_LABEL)} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45} startDelay={HEADER_LABEL}>01 — Your AI Team</StreamText>
          </motion.p>
          <motion.h1 {...appear(HEADER_H1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            <StreamText speed={50} startDelay={HEADER_H1}>Hire by role, not by software.</StreamText>
          </motion.h1>
          <motion.p {...appear(HEADER_SUB)} className="mt-4 text-gray-500 leading-relaxed">
            <StreamText speed={22} startDelay={HEADER_SUB}>
              Each agent handles a specific business function — customer calls, invoicing, lead follow-up, whatever you&apos;re falling behind on. You pick the role. We build and run the agent.
            </StreamText>
          </motion.p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROLES.map(({ icon: Icon, title, tagline, items }, idx) => {
            const cardAt = CARD_BASE + idx * CARD_GAP;
            const itemBase = cardAt + 300;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cardAt / 1000, duration: 0.4, ease: 'easeOut' }}
                className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 transition-colors group cursor-default flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  <Icon className="text-[#0a0a0a]" size={18} />
                </div>

                <h2 className="text-lg font-bold text-white mb-1 font-mono">
                  <StreamText speed={50} startDelay={cardAt + 60}>{title}</StreamText>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  <StreamText speed={24} startDelay={cardAt + 180}>{tagline}</StreamText>
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {items.map((item, i) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-400 leading-snug">
                      <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                      <StreamText speed={30} startDelay={itemBase + i * 220}>{item}</StreamText>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          {...appear(CARD_BASE + ROLES.length * CARD_GAP + 400)}
          className="mt-12 rounded-2xl border border-white/8 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: '#0d0d0d' }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Ready to staff up?</p>
            <p className="text-gray-500 text-sm max-w-md">
              Tell us which role would make the biggest difference. We&apos;ll scope it, build it, and keep it running.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#0a0a0a] whitespace-nowrap transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 24px rgba(0,255,136,0.2)' }}
          >
            Build your team <FiArrowRight />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
