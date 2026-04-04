'use client';

import { motion, Variants } from 'framer-motion';
import { FiMic, FiTerminal, FiDatabase, FiZap, FiGlobe, FiCheck, FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0.15): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

const t = (words: number, speed = 28) => words * speed;

// Card streaming starts after header block (~1.8s)
const CARD_BASE = 1800;
const CARD_GAP = 800; // gap between cards starting

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="mb-14">
          <motion.p variants={fadeIn} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45}>01 — What We Build</StreamText>
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
            <StreamText speed={50} startDelay={400}>AI Tools Built for the Real World</StreamText>
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-gray-500 max-w-xl">
            <StreamText speed={22} startDelay={900}>
              Not vaporware. Not demos. Deployed tools that run your business while you&apos;re busy running your business.
            </StreamText>
          </motion.p>
        </motion.div>

        {/* Product cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={stagger(0.1)} initial="hidden" animate="show">

          {[
            {
              icon: <FiMic className="text-[#0a0a0a]" size={18} />,
              title: 'Voice Agent',
              desc: 'An AI that answers your phone after hours, books appointments, handles FAQs, and routes urgent calls. No lead goes cold.',
              items: ['Answers calls 24/7', 'Books appointments automatically', 'Handles common questions', 'Escalates urgent issues to you'],
              cardDelay: CARD_BASE,
            },
            {
              icon: <FiTerminal className="text-[#0a0a0a]" size={18} />,
              title: 'AI Agents',
              desc: 'Always-on AI you reach through your messaging app. Morning briefing, web deploy, research — just ask.',
              items: ['Discord, Slack, or SMS', 'Builds and deploys web projects', 'Runs 24/7'],
              cardDelay: CARD_BASE + CARD_GAP,
            },
            {
              icon: <FiDatabase className="text-[#0a0a0a]" size={18} />,
              title: 'Local File Search',
              desc: 'Ask a question, get an answer from your own documents. No cloud upload. Your data stays put.',
              items: ['PDFs, Word, spreadsheets', 'No cloud required', 'Private by design'],
              cardDelay: CARD_BASE + CARD_GAP * 2,
            },
          ].map(({ icon, title, desc, items, cardDelay }) => (
            <motion.div key={title} variants={fadeIn}
              className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-colors group cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                {icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2 font-mono">
                <StreamText speed={50} startDelay={cardDelay}>{title}</StreamText>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                <StreamText speed={22} startDelay={cardDelay + t(title.split(' ').length, 50) + 100}>{desc}</StreamText>
              </p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                    <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <StreamText speed={35} startDelay={cardDelay + t(desc.split(' ').length, 22) + 200 + i * 200}>{item}</StreamText>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </motion.div>

        {/* Before / After */}
        <motion.div className="mt-4 space-y-3" variants={stagger(0.2)} initial="hidden" animate="show">
          {[
            {
              icon: <FiZap size={14} />,
              topic: 'Workflow Automation',
              before: ['Pick a tool (Zapier, Make, n8n…)', 'Configure triggers and steps', 'Debug it when something breaks', 'Start over for every new workflow'],
              after: ['"Send me a summary every Monday"', '"Flag any invoice over $500"', '"Follow up if no reply in 2 days"', 'Just say it. Agent handles the rest.'],
              blockDelay: CARD_BASE + CARD_GAP * 3,
            },
            {
              icon: <FiGlobe size={14} />,
              topic: 'Web Presence',
              before: ['Find and vet a web developer', 'Wait days for a response', 'Pay for every small change', 'Hope they understood what you wanted'],
              after: ["Chat with it anytime — it doesn't sleep", 'It codes, ships, and handles SEO', 'Changes happen in minutes', 'No queue. No invoice. No delay.'],
              blockDelay: CARD_BASE + CARD_GAP * 4,
            },
          ].map(({ icon, topic, before, after, blockDelay }) => (
            <motion.div key={topic} variants={fadeIn} className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: '#0d0d0d' }}>
              <div className="px-6 py-3 border-b border-white/8 flex items-center gap-2">
                <span className="text-gray-500">{icon}</span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <StreamText speed={40} startDelay={blockDelay}>{topic}</StreamText>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6 sm:p-7">
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Without an agent</p>
                  <ul className="space-y-3">
                    {before.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-1 text-gray-700 flex-shrink-0 font-mono">—</span>
                        <StreamText speed={28} startDelay={blockDelay + 300 + i * 350}>{item}</StreamText>
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
                        <StreamText speed={28} startDelay={blockDelay + 300 + i * 350}>{item}</StreamText>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}
