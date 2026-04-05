'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const t = (words: number, speed = 28) => words * speed;

const LABEL      = 0;
const H1         = 350;
const SUB        = 700;
const HEADER_DONE = SUB + t(5, 28) + 100;   // ~940ms

const CASE_CARD  = HEADER_DONE + 200;        // ~1140ms
const YOUR_CARD  = CASE_CARD + 1400;         // ~2540ms — after Malone card text is rolling

function appear(delayMs: number) {
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: delayMs / 1000, duration: 0.4, ease: 'easeOut' as const },
  };
}

export default function Work() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <motion.p {...appear(LABEL)} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45} startDelay={LABEL}>02 — Our Work</StreamText>
          </motion.p>
          <motion.h1 {...appear(H1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            <StreamText speed={55} startDelay={H1}>Work That Ships</StreamText>
          </motion.h1>
          <motion.p {...appear(SUB)} className="mt-4 text-gray-500 max-w-xl">
            <StreamText speed={35} startDelay={SUB}>Real projects, real outcomes.</StreamText>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Malone Septic case study */}
          <motion.div
            {...appear(CASE_CARD)}
            className="p-5 sm:p-8 md:p-10 rounded-2xl flex flex-col justify-between"
            style={{
              background: 'linear-gradient(150deg, #0c1c10 0%, #0a0a0a 100%)',
              border: '1px solid rgba(0,255,136,0.25)',
              boxShadow: '0 0 60px rgba(0,255,136,0.05)',
            }}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  <FiGlobe className="text-[#0a0a0a]" size={16} />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
                  <StreamText speed={40} startDelay={CASE_CARD + 100}>Case Study</StreamText>
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                <StreamText speed={45} startDelay={CASE_CARD + 350}>Malone Septic &amp; Excavation</StreamText>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                <StreamText speed={20} startDelay={CASE_CARD + 700}>
                  A local excavation company had no web presence at all. We built and launched a full site — branding, copy, contact forms, SEO — in one week. Now they show up when customers search, and leads come in while the owner is on the job.
                </StreamText>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8">
              {[
                { stat: '0 → Live', label: 'Web Presence',      delay: CASE_CARD + 2600 },
                { stat: '1 Week',   label: 'Start to Launch',   delay: CASE_CARD + 2900 },
                { stat: 'Organic',  label: 'Leads from Search', delay: CASE_CARD + 3200 },
              ].map(({ stat, label, delay }) => (
                <motion.div key={label} {...appear(delay)}>
                  <div className="text-lg sm:text-2xl font-bold font-mono" style={{ color: 'var(--accent)' }}>
                    <StreamText speed={55} startDelay={delay + 80}>{stat}</StreamText>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    <StreamText speed={40} startDelay={delay + 280}>{label}</StreamText>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Your business here */}
          <motion.div
            {...appear(YOUR_CARD)}
            className="p-5 sm:p-8 md:p-10 rounded-2xl border border-dashed border-white/10 flex flex-col items-start justify-between gap-8"
            style={{ background: '#0d0d0d' }}>
            <div>
              <h2 className="text-xl font-bold text-gray-300 mb-3">
                <StreamText speed={50} startDelay={YOUR_CARD + 80}>Your Business Here</StreamText>
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                <StreamText speed={22} startDelay={YOUR_CARD + 380}>
                  Working with small businesses in Arkansas and Colorado right now. If you&apos;re curious what AI could actually do for your operation — let&apos;s have a straight conversation.
                </StreamText>
              </p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}>
              Get in Touch <FiArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
