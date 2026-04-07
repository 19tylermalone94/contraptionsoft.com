'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiClock, FiEye } from 'react-icons/fi';
import StreamText from '../components/StreamText';

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

// Example prompts grouped by flavor
const EXAMPLES = [
  {
    icon: FiZap,
    label: 'On demand',
    desc: 'Just ask and it does it.',
    prompts: [
      { user: 'Hey, update the products page to include the new HVAC package we added last week.', agent: 'Done — product page updated and deployed.' },
      { user: 'Pull all the invoices from March and tell me who's overdue.', agent: 'Found 4 overdue invoices totaling $3,840. Want me to send follow-ups?' },
      { user: 'Summarize the last 30 emails from clients.', agent: 'Here's a rundown — 3 need a response today, 1 looks like a new lead.' },
    ],
  },
  {
    icon: FiClock,
    label: 'Scheduled',
    desc: 'Set it once and it runs on its own.',
    prompts: [
      { user: 'At 5pm every Friday, message the crew and ask where things stand for the week.', agent: 'Got it — I'll check in with everyone at 5pm Fridays.' },
      { user: 'Every morning, check my inbox and flag anything urgent.', agent: 'Running daily at 8am. You'll hear from me if something needs attention.' },
      { user: 'On the 1st of each month, pull a revenue summary from Stripe and drop it in Slack.', agent: 'Scheduled. First report goes out May 1st.' },
    ],
  },
  {
    icon: FiEye,
    label: 'Always watching',
    desc: 'Monitors things so you don't have to.',
    prompts: [
      { user: 'If the site goes down, text me immediately.', agent: 'Watching it. You'll get a text within a minute of any downtime.' },
      { user: 'When a new Google Review comes in, draft a response for me to approve.', agent: 'On it — I'll have a draft ready before you even see the notification.' },
      { user: 'Keep an eye on the competitor pricing page and let me know if anything changes.', agent: 'I'll check weekly and flag any updates.' },
    ],
  },
];

const HEADER_H1  = 300;
const HEADER_SUB = 650;
const HEADER_DONE = HEADER_SUB + 22 * 22;

const SECTION_GAP = 280;

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.p {...appear(0)} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45}>What we build</StreamText>
          </motion.p>
          <motion.h1 {...appear(HEADER_H1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            <StreamText speed={48} startDelay={HEADER_H1}>An AI you just talk to.</StreamText>
          </motion.h1>
          <motion.p {...appear(HEADER_SUB)} className="text-gray-500 leading-relaxed">
            <StreamText speed={22} startDelay={HEADER_SUB}>
              On standby around the clock. Reachable through your messaging app. You tell it what to do — once, or on a schedule — and it handles it. One agent or several, it&apos;s up to you.
            </StreamText>
          </motion.p>
        </div>

        {/* Example sections */}
        {EXAMPLES.map(({ icon: Icon, label, desc, prompts }, sIdx) => {
          const sectionAt = HEADER_DONE + 300 + sIdx * SECTION_GAP;
          return (
            <motion.div
              key={label}
              {...appear(sectionAt)}
              className="mb-12"
            >
              {/* Section label */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0,255,136,0.12)' }}>
                  <Icon size={14} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white">{label}</span>
                  <span className="text-gray-600 text-sm"> — {desc}</span>
                </div>
              </div>

              {/* Prompt cards */}
              <div className="space-y-3 pl-0">
                {prompts.map(({ user, agent }, pIdx) => (
                  <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionAt + 100 + pIdx * 180) / 1000, duration: 0.35, ease: 'easeOut' }}
                    className="rounded-xl border border-white/8 overflow-hidden"
                    style={{ background: '#0f0f0f' }}
                  >
                    {/* User message */}
                    <div className="px-5 py-4 flex items-start gap-3 border-b border-white/6">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-[10px] text-gray-400 font-mono">You</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">&ldquo;{user}&rdquo;</p>
                    </div>
                    {/* Agent reply */}
                    <div className="px-5 py-4 flex items-start gap-3" style={{ background: 'rgba(0,255,136,0.03)' }}>
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'rgba(0,255,136,0.15)' }}>
                        <span className="text-[10px] font-mono" style={{ color: 'var(--accent)' }}>AI</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{agent}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Bottom context */}
        <motion.div {...appear(HEADER_DONE + 300 + EXAMPLES.length * SECTION_GAP + 200)} className="mb-10">
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            These are examples — not a fixed menu. Your agent does what you tell it, in the order you tell it, on whatever schedule makes sense for your business. Start with one thing. Add more as you need it.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...appear(HEADER_DONE + 300 + EXAMPLES.length * SECTION_GAP + 400)}
          className="rounded-2xl border border-white/8 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: '#0d0d0d' }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Want to see what it could do for you?</p>
            <p className="text-gray-500 text-sm">Tell us what you're dealing with. We'll figure out whether an agent makes sense.</p>
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
