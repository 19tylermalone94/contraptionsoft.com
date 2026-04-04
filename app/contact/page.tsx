'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const t = (words: number, speed = 28) => words * speed;

const LABEL   = 0;
const H1      = 350;
const SUB     = H1 + t(5, 48) + 100;        // ~690ms
const EMAIL   = SUB + t(22, 22) + 200;      // ~1374ms
const FOOT    = EMAIL + t(1, 30) + 400;     // after email starts ~1804ms

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">

        <motion.p {...appear(LABEL)} className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
          <StreamText speed={45} startDelay={LABEL}>04 — Get in Touch</StreamText>
        </motion.p>

        <motion.h1 {...appear(H1)} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
          <StreamText speed={48} startDelay={H1}>Let&apos;s Have a Straight Conversation.</StreamText>
        </motion.h1>

        <motion.p {...appear(SUB)} className="text-lg text-gray-500 max-w-lg mb-12">
          <StreamText speed={22} startDelay={SUB}>
            No sales deck. Tell us what problem you&apos;re dealing with — we&apos;ll tell you honestly if AI can help, and what it would cost.
          </StreamText>
        </motion.p>

        <motion.a {...appear(EMAIL)} href="mailto:tyler@contraptionsoft.com" className="group inline-flex items-center gap-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white group-hover:underline decoration-[#00ff88] underline-offset-4 transition-all">
            <StreamText speed={30} startDelay={EMAIL + 80}>tyler@contraptionsoft.com</StreamText>
          </span>
          <FiArrowRight size={24} className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
        </motion.a>

        <motion.p {...appear(FOOT)} className="mt-8 text-sm text-gray-600">
          <StreamText speed={22} startDelay={FOOT + 80}>
            Responds within 24 hours. Fort Collins or Central Arkansas (Little Rock, Benton, Hot Springs area)? In-person works too.
          </StreamText>
        </motion.p>

      </div>
    </main>
  );
}
