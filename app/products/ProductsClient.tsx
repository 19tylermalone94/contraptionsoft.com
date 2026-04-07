'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

const EXAMPLES = [
  {
    user: "Answer my business line after hours. If someone calls about pricing or wants to book, handle it.",
    agent: "Your line is covered. I'll answer calls 24/7, walk people through pricing, book appointments, and send you a summary after each one. Works with your existing number.",
  },
  {
    user: "I've got Spanish-speaking customers. Make sure they get the same experience.",
    agent: "On it. I'll detect the language and respond in kind — same quality, no extra setup.",
  },
  {
    user: "When a Google review comes in, draft a response for me to approve before it goes out.",
    agent: "Watching for new reviews. Draft will be in your inbox before you even see the notification.",
  },
  {
    user: "Go through last month's emails and pull out any leads we didn't follow up on.",
    agent: "Found 6 conversations that went quiet. Drafting follow-ups now — want to review first or should I just send them?",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <motion.h1 {...appear(200)} className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-5">
            AI that works for your business.
          </motion.h1>
          <motion.p {...appear(500)} className="text-gray-500 leading-relaxed max-w-xl">
            We build AI agents that handle real business tasks — answering calls, following up on leads, monitoring your inbox, responding to customers. On standby around the clock, reachable through your phone or whatever messaging app you already use.
          </motion.p>
        </div>

        {/* Examples */}
        <motion.p {...appear(750)} className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-5">
          What it looks like
        </motion.p>

        <div className="space-y-3 mb-12">
          {EXAMPLES.map(({ user, agent }, i) => (
            <motion.div
              key={i}
              {...appear(850 + i * 180)}
              className="rounded-xl border border-white/8 overflow-hidden"
              style={{ background: '#0f0f0f' }}
            >
              <div className="px-5 py-4 flex items-start gap-3 border-b border-white/6">
                <div className="w-6 h-6 rounded-full bg-white/8 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <span className="text-[9px] text-gray-500 font-mono">You</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">&ldquo;{user}&rdquo;</p>
              </div>
              <div className="px-5 py-4 flex items-start gap-3" style={{ background: 'rgba(0,255,136,0.03)' }}>
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: 'rgba(0,255,136,0.12)' }}>
                  <span className="text-[9px] font-mono" style={{ color: 'var(--accent)' }}>AI</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{agent}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...appear(850 + EXAMPLES.length * 180 + 200)}
          className="rounded-2xl border border-white/8 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: '#0d0d0d' }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Want one on your team?</p>
            <p className="text-gray-500 text-sm mb-3">Tell us what you want it to do. We&apos;ll scope it, build it, and keep it running.</p>
            <p className="text-gray-700 text-xs font-mono">Veteran-owned. Fort Collins, CO. Real people, not a platform.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#0a0a0a] whitespace-nowrap transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 24px rgba(0,255,136,0.2)' }}
          >
            Let&apos;s talk <FiArrowRight />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
