'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const t = (words: number, speed = 28) => words * speed;

const LABEL    = 0;
const H1       = 300;
const PARA1    = H1 + t(3, 50) + 100;        // after heading ~950ms
const PARA2    = PARA1 + t(28, 22) + 200;    // after para1 ~1900ms
const PARA3    = PARA2 + t(30, 22) + 200;    // after para2 ~2900ms

// Right column staggered alongside left
const VET_CARD  = H1 + 200;                  // appears alongside heading
const STATS     = [
  VET_CARD + t(4, 40) + t(10, 22) + 300,    // ~1800ms
  VET_CARD + t(4, 40) + t(10, 22) + 600,
  VET_CARD + t(4, 40) + t(10, 22) + 900,
  VET_CARD + t(4, 40) + t(10, 22) + 1200,
];

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        <motion.p {...appear(LABEL)} className="text-xs font-mono tracking-[0.2em] uppercase mb-14" style={{ color: 'var(--accent)' }}>
          <StreamText speed={45} startDelay={LABEL}>03 — About</StreamText>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — text */}
          <div>
            <motion.h1 {...appear(H1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              <StreamText speed={50} startDelay={H1}>About ContraptionSoft</StreamText>
            </motion.h1>
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <motion.p {...appear(PARA1)}>
                <StreamText speed={22} startDelay={PARA1}>
                  ContraptionSoft LLC is run by Tyler Malone — software engineer, Marine veteran, and someone who genuinely enjoys figuring out how to make things work better.
                </StreamText>
              </motion.p>
              <motion.p {...appear(PARA2)}>
                <StreamText speed={22} startDelay={PARA2}>
                  The focus: get real AI tools into the hands of small businesses that need them but don&apos;t have an IT department to sort it out. Voice agents, automation, custom software — built straight, delivered fast, explained plainly.
                </StreamText>
              </motion.p>
              <motion.p {...appear(PARA3)}>
                <StreamText speed={30} startDelay={PARA3}>
                  Based in Fort Collins, CO. Currently working with businesses across Colorado and Central Arkansas.
                </StreamText>
              </motion.p>
            </div>
          </div>

          {/* Right — veteran card + stats */}
          <div className="space-y-6">
            <motion.div {...appear(VET_CARD)} className="flex items-center gap-5 p-6 rounded-2xl border border-white/8 bg-[#111]">
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
                    <StreamText speed={40} startDelay={VET_CARD + 100}>Veteran-Owned &amp; Operated</StreamText>
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  <StreamText speed={22} startDelay={VET_CARD + 500}>
                    Same reliability, directness, and follow-through — just applied to software.
                  </StreamText>
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '100%', label: 'Custom-built' },
                { val: 'Fast',  label: 'Delivery' },
                { val: 'No BS', label: 'Communication' },
                { val: 'Local', label: 'Focus' },
              ].map(({ val, label }, i) => (
                <motion.div key={label} {...appear(STATS[i])} className="p-4 rounded-xl border border-white/6 bg-[#111] text-center">
                  <div className="text-xl font-bold font-mono mb-0.5" style={{ color: 'var(--accent)' }}>
                    <StreamText speed={55} startDelay={STATS[i] + 80}>{val}</StreamText>
                  </div>
                  <div className="text-xs text-gray-600">
                    <StreamText speed={40} startDelay={STATS[i] + 280}>{label}</StreamText>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
