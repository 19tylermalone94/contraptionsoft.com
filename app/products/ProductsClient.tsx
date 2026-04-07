'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

const PAIN_POINTS = [
  "The call that came in at 5:45pm. Nobody answered. They went with somebody else.",
  "The invoice you sent three weeks ago. Still unpaid. You keep meaning to follow up.",
  "The quote you put together, sent it off, and never heard back. You never followed up either.",
  "Monday morning. You spend two hours on things that aren't the job.",
];

const EXAMPLES = [
  {
    user: "Hey, if someone calls after hours and asks about pricing, handle it and take down their info.",
    agent: "Got it. I'll pick up after-hours calls, walk them through pricing, and send you a summary with their contact info.",
  },
  {
    user: "Chase the three unpaid invoices from March. Give them a week, then follow up again.",
    agent: "On it. First messages going out now. I'll flag you if anyone pushes back or goes quiet.",
  },
  {
    user: "Every Friday at 4pm, check in with the crew and ask where everything stands.",
    agent: "Scheduled. First check-in this Friday at 4pm. I'll roll up the responses and send them to you.",
  },
  {
    user: "When a Google review comes in, draft me a response to approve before it goes out.",
    agent: "Watching for new reviews. I'll have a draft in your inbox before you even see the notification.",
  },
  {
    user: "Go through last month's emails and pull out anything that looks like a lead we dropped.",
    agent: "Found 6 conversations that went cold. Drafting follow-ups — want to review before I send?",
  },
];

const HEADER_H1   = 300;
const HEADER_DONE = 900;
const PAIN_BASE   = HEADER_DONE + 200;
const PAIN_GAP    = 180;
const EXAMPLES_START = PAIN_BASE + PAIN_POINTS.length * PAIN_GAP + 500;
const EXAMPLE_GAP = 200;

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.p {...appear(0)} className="text-xs font-mono tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45}>What we build</StreamText>
          </motion.p>
          <motion.h1 {...appear(HEADER_H1)} className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            <StreamText speed={52} startDelay={HEADER_H1}>
              Your business is leaking.
            </StreamText>
          </motion.h1>
          <motion.p {...appear(600)} className="text-gray-500 leading-relaxed max-w-xl">
            <StreamText speed={22} startDelay={600}>
              Missed calls. Unpaid invoices. Follow-ups that never happened. Not because you don&apos;t care — because there aren&apos;t enough hours. We build AI that plugs the gaps.
            </StreamText>
          </motion.p>
        </div>

        {/* Pain points */}
        <div className="mb-16">
          <motion.p {...appear(PAIN_BASE - 200)} className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-5">
            Sound familiar?
          </motion.p>
          <ul className="space-y-3">
            {PAIN_POINTS.map((point, i) => (
              <motion.li
                key={i}
                {...appear(PAIN_BASE + i * PAIN_GAP)}
                className="flex items-start gap-4 py-4 px-5 rounded-xl border border-white/6"
                style={{ background: '#0d0d0d' }}
              >
                <span className="text-gray-700 font-mono text-sm flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{point}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bridge */}
        <motion.div {...appear(EXAMPLES_START - 300)} className="mb-12">
          <p className="text-white text-xl font-semibold leading-snug mb-3">
            An AI employee handles this.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            On standby around the clock. Reachable through your messaging app. You tell it what to do — once, on a schedule, or when something happens — and it handles it. You don&apos;t manage software. You just talk to it.
          </p>
        </motion.div>

        {/* Example conversations */}
        <div className="mb-12 space-y-3">
          {EXAMPLES.map(({ user, agent }, i) => (
            <motion.div
              key={i}
              {...appear(EXAMPLES_START + i * EXAMPLE_GAP)}
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

        {/* Flexibility note */}
        <motion.p
          {...appear(EXAMPLES_START + EXAMPLES.length * EXAMPLE_GAP + 100)}
          className="text-gray-600 text-sm leading-relaxed mb-12 max-w-lg"
        >
          These are examples. Your agent does what your business actually needs — one thing or ten, on demand or on a schedule. Start small. Add more when it makes sense.
        </motion.p>

        {/* CTA */}
        <motion.div
          {...appear(EXAMPLES_START + EXAMPLES.length * EXAMPLE_GAP + 300)}
          className="rounded-2xl border border-white/8 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: '#0d0d0d' }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Tell us what&apos;s slipping.</p>
            <p className="text-gray-500 text-sm">We&apos;ll figure out whether an agent makes sense and what it would actually do for you.</p>
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
