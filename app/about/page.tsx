'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0.15): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        <motion.p variants={fadeIn} initial="hidden" animate="show"
          className="text-xs font-mono tracking-[0.2em] uppercase mb-14" style={{ color: 'var(--accent)' }}>
          <StreamText speed={45}>03 — About</StreamText>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          <motion.div variants={stagger(0.14)} initial="hidden" animate="show">
            <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              <StreamText speed={50} startDelay={300}>About ContraptionSoft</StreamText>
            </motion.h1>
            <motion.div variants={stagger(0.1)} className="space-y-5 text-gray-400 leading-relaxed">
              <motion.p variants={fadeIn}>
                <StreamText speed={22} startDelay={700}>
                  ContraptionSoft LLC is run by Tyler Malone — software engineer, Marine veteran, and someone who genuinely enjoys figuring out how to make things work better.
                </StreamText>
              </motion.p>
              <motion.p variants={fadeIn}>
                <StreamText speed={22} startDelay={1800}>
                  The focus: get real AI tools into the hands of small businesses that need them but don&apos;t have an IT department to sort it out. Voice agents, automation, custom software — built straight, delivered fast, explained plainly.
                </StreamText>
              </motion.p>
              <motion.p variants={fadeIn}>
                <StreamText speed={30} startDelay={3200}>
                  Based in Fort Collins, CO. Currently working with businesses across Colorado and Central Arkansas.
                </StreamText>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={stagger(0.12)} initial="hidden" animate="show">
            <motion.div variants={fadeIn} className="flex items-center gap-5 p-6 rounded-2xl border border-white/8 bg-[#111]">
              <Image
                src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png"
                alt="US Marine Corps Seal"
                width={56}
                height={56}
                className="opacity-90 flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <FiShield size={13} style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-bold text-white">
                    <StreamText speed={40} startDelay={900}>Veteran-Owned &amp; Operated</StreamText>
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  <StreamText speed={22} startDelay={1200}>
                    Same reliability, directness, and follow-through — just applied to software.
                  </StreamText>
                </p>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-3" variants={stagger(0.1)}>
              {[
                { val: '100%', label: 'Custom-built', delay: 1800 },
                { val: 'Fast', label: 'Delivery', delay: 2000 },
                { val: 'No BS', label: 'Communication', delay: 2200 },
                { val: 'Local', label: 'Focus', delay: 2400 },
              ].map(({ val, label, delay }) => (
                <motion.div key={label} variants={fadeIn} className="p-4 rounded-xl border border-white/6 bg-[#111] text-center">
                  <div className="text-xl font-bold font-mono mb-0.5" style={{ color: 'var(--accent)' }}>
                    <StreamText speed={60} startDelay={delay}>{val}</StreamText>
                  </div>
                  <div className="text-xs text-gray-600">
                    <StreamText speed={40} startDelay={delay + 200}>{label}</StreamText>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
