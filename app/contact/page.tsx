'use client';

import { motion, Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0.18): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24 flex flex-col justify-center">
      <motion.div className="max-w-6xl mx-auto w-full" variants={stagger()} initial="hidden" animate="show">

        <motion.p variants={fadeIn} className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
          <StreamText speed={45}>04 — Get in Touch</StreamText>
        </motion.p>

        <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
          <StreamText speed={48} startDelay={350}>Let&apos;s Have a Straight Conversation.</StreamText>
        </motion.h1>

        <motion.p variants={fadeIn} className="text-lg text-gray-500 max-w-lg mb-12">
          <StreamText speed={22} startDelay={1000}>
            No sales deck. Tell us what problem you&apos;re dealing with — we&apos;ll tell you honestly if AI can help, and what it would cost.
          </StreamText>
        </motion.p>

        <motion.a variants={fadeIn} href="mailto:tyler@contraptionsoft.com" className="group inline-flex items-center gap-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white group-hover:underline decoration-[#00ff88] underline-offset-4 transition-all">
            <StreamText speed={30} startDelay={1900}>tyler@contraptionsoft.com</StreamText>
          </span>
          <FiArrowRight size={24} className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
        </motion.a>

        <motion.p variants={fadeIn} className="mt-8 text-sm text-gray-600">
          <StreamText speed={22} startDelay={2400}>
            Responds within 24 hours. Fort Collins or Central Arkansas (Little Rock, Benton, Hot Springs area)? In-person works too.
          </StreamText>
        </motion.p>

      </motion.div>
    </main>
  );
}
