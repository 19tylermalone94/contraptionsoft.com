'use client';

import { motion } from 'framer-motion';
import { FiMic, FiTerminal, FiDatabase, FiZap, FiGlobe, FiCheck, FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

// ms to stream N words at a given speed
const t = (words: number, speed = 28) => words * speed;

// Timings — each element appears, then its text immediately starts streaming
const HEADER_LABEL   = 0;
const HEADER_H1      = 400;
const HEADER_SUB     = 900;
const HEADER_DONE    = HEADER_SUB + t(18, 22); // ~1300ms

const CARD_1         = HEADER_DONE + 200;       // ~1500ms
const CARD_2         = CARD_1 + 900;            // ~2400ms
const CARD_3         = CARD_2 + 900;            // ~3300ms

const COMP_1         = CARD_3 + 1100;           // ~4400ms
const COMP_2         = COMP_1 + 1400;           // ~5800ms

// Per-card list item delays relative to card appearance
const ITEM_OFFSET = (descWords: number, descSpeed = 22) =>
  t(2, 50) + 100 + t(descWords, descSpeed);

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.35, ease: 'easeOut' as const },
  };
}

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Section header — streams first */}
        <div className="mb-14">
          <motion.p {...appear(HEADER_LABEL)} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45} startDelay={HEADER_LABEL}>01 — What We Build</StreamText>
          </motion.p>
          <motion.h1 {...appear(HEADER_H1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
            <StreamText speed={50} startDelay={HEADER_H1}>AI Tools Built for the Real World</StreamText>
          </motion.h1>
          <motion.p {...appear(HEADER_SUB)} className="mt-4 text-gray-500 max-w-xl">
            <StreamText speed={22} startDelay={HEADER_SUB}>
              Not vaporware. Not demos. Deployed tools that run your business while you&apos;re busy running your business.
            </StreamText>
          </motion.p>
        </div>

        {/* Product cards — appear one at a time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {[
            {
              icon: <FiMic className="text-[#0a0a0a]" size={18} />,
              title: 'Voice Agent',
              desc: 'An AI that answers your phone after hours, books appointments, handles FAQs, and routes urgent calls. No lead goes cold.',
              items: ['Answers calls 24/7', 'Books appointments automatically', 'Handles common questions', 'Escalates urgent issues to you'],
              appear: CARD_1,
            },
            {
              icon: <FiTerminal className="text-[#0a0a0a]" size={18} />,
              title: 'AI Agents',
              desc: 'Always-on AI you reach through your messaging app. Morning briefing, web deploy, research — just ask.',
              items: ['Discord, Slack, or SMS', 'Builds and deploys web projects', 'Runs 24/7'],
              appear: CARD_2,
            },
            {
              icon: <FiDatabase className="text-[#0a0a0a]" size={18} />,
              title: 'Local File Search',
              desc: 'Ask a question, get an answer from your own documents. No cloud upload. Your data stays put.',
              items: ['PDFs, Word, spreadsheets', 'No cloud required', 'Private by design'],
              appear: CARD_3,
            },
          ].map(({ icon, title, desc, items, appear: cardAt }) => {
            const textAt   = cardAt + 80;
            const descAt   = textAt + t(title.split(' ').length, 50) + 100;
            const itemBase = descAt + t(desc.split(' ').length, 22) + 150;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cardAt / 1000, duration: 0.4, ease: 'easeOut' }}
                className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-colors group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  {icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-2 font-mono">
                  <StreamText speed={50} startDelay={textAt}>{title}</StreamText>
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  <StreamText speed={22} startDelay={descAt}>{desc}</StreamText>
                </p>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <StreamText speed={32} startDelay={itemBase + i * 260}>{item}</StreamText>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison blocks — appear after cards */}
        <div className="mt-4 space-y-3">
          {[
            {
              icon: <FiZap size={14} />,
              topic: 'Workflow Automation',
              before: ['Pick a tool (Zapier, Make, n8n…)', 'Configure triggers and steps', 'Debug it when something breaks', 'Start over for every new workflow'],
              after: ['"Send me a summary every Monday"', '"Flag any invoice over $500"', '"Follow up if no reply in 2 days"', 'Just say it. Agent handles the rest.'],
              appear: COMP_1,
            },
            {
              icon: <FiGlobe size={14} />,
              topic: 'Web Presence',
              before: ['Find and vet a web developer', 'Wait days for a response', 'Pay for every small change', 'Hope they understood what you wanted'],
              after: ["Chat with it anytime — it doesn't sleep", 'It codes, ships, and handles SEO', 'Changes happen in minutes', 'No queue. No invoice. No delay.'],
              appear: COMP_2,
            },
          ].map(({ icon, topic, before, after, appear: blockAt }) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: blockAt / 1000, duration: 0.4, ease: 'easeOut' }}
              className="rounded-2xl border border-white/8 overflow-hidden"
              style={{ background: '#0d0d0d' }}
            >
              <div className="px-6 py-3 border-b border-white/8 flex items-center gap-2">
                <span className="text-gray-500">{icon}</span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <StreamText speed={40} startDelay={blockAt + 80}>{topic}</StreamText>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6 sm:p-7">
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Without an agent</p>
                  <ul className="space-y-3">
                    {before.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-1 text-gray-700 flex-shrink-0 font-mono">—</span>
                        <StreamText speed={26} startDelay={blockAt + 300 + i * 380}>{item}</StreamText>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:flex items-center justify-center px-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-white/10" />
                    <FiArrowRight size={16} style={{ color: 'var(--accent)' }} />
                    <div className="w-px h-8 bg-white/10" />
                  </div>
                </div>
                <div className="sm:hidden flex items-center justify-center py-2 border-t border-white/8">
                  <FiArrowRight size={16} className="rotate-90" style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1 p-6 sm:p-7 border-t sm:border-t-0 sm:border-l border-white/8" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-3">
                    {after.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                        <FiCheck size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                        <StreamText speed={26} startDelay={blockAt + 300 + i * 380}>{item}</StreamText>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
