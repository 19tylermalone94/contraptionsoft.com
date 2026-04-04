'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';
import StreamText from '../components/StreamText';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0.15): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export default function Work() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="mb-14">
          <motion.p variants={fadeIn} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            <StreamText speed={45}>02 — Our Work</StreamText>
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            <StreamText speed={55} startDelay={300}>Work That Ships</StreamText>
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-gray-500 max-w-xl">
            <StreamText speed={28} startDelay={700}>Real projects, real outcomes.</StreamText>
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-4" variants={stagger(0.2)} initial="hidden" animate="show">

          <motion.div variants={fadeIn}
            className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between"
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
                  <StreamText speed={40} startDelay={1000}>Case Study</StreamText>
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                <StreamText speed={45} startDelay={1200}>Malone Septic &amp; Excavation</StreamText>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                <StreamText speed={20} startDelay={1600}>
                  A local excavation company had no web presence at all. We built and launched a full site — branding, copy, contact forms, SEO — in one week. Now they show up when customers search, and leads come in while the owner is on the job.
                </StreamText>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { stat: '0 → Live', label: 'Web Presence', delay: 3200 },
                { stat: '1 Week', label: 'Start to Launch', delay: 3500 },
                { stat: 'Organic', label: 'Leads from Search', delay: 3800 },
              ].map(({ stat, label, delay }) => (
                <div key={label}>
                  <div className="text-2xl font-bold font-mono" style={{ color: 'var(--accent)' }}>
                    <StreamText speed={60} startDelay={delay}>{stat}</StreamText>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    <StreamText speed={40} startDelay={delay + 200}>{label}</StreamText>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}
            className="p-8 sm:p-10 rounded-2xl border border-dashed border-white/10 flex flex-col items-start justify-between gap-8"
            style={{ background: '#0d0d0d' }}>
            <div>
              <h2 className="text-xl font-bold text-gray-300 mb-3">
                <StreamText speed={50} startDelay={2000}>Your Business Here</StreamText>
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                <StreamText speed={22} startDelay={2300}>
                  Working with small businesses in Arkansas and Colorado right now. If you&apos;re curious what AI could actually do for your operation — let&apos;s have a straight conversation.
                </StreamText>
              </p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}>
              Get in Touch <FiArrowRight size={14} />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
