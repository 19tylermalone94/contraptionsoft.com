'use client';

import { motion, Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = (delay = 0.12): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24 flex flex-col justify-center">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={stagger(0.14)}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={fadeUp} className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
          04 &mdash; Get in Touch
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
          Let&apos;s Have a Straight Conversation.
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg text-gray-500 max-w-lg mb-12">
          No sales deck. Tell us what problem you&apos;re dealing with — we&apos;ll tell you honestly if AI can help, and what it would cost.
        </motion.p>

        <motion.a variants={fadeUp} href="mailto:tyler@contraptionsoft.com" className="group inline-flex items-center gap-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white group-hover:underline decoration-[#00ff88] underline-offset-4 transition-all">
            tyler@contraptionsoft.com
          </span>
          <FiArrowRight size={24} className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
        </motion.a>

        <motion.p variants={fadeUp} className="mt-8 text-sm text-gray-600">
          Responds within 24 hours. Fort Collins or Central Arkansas (Little Rock, Benton, Hot Springs area)? In-person works too.
        </motion.p>
      </motion.div>
    </main>
  );
}
