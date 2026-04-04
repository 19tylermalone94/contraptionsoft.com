'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import StreamText from './components/StreamText';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0.18): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// approx ms to stream N words at given speed
const t = (words: number, speed = 28) => words * speed;

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-16"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,255,136,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

      <motion.div className="max-w-6xl mx-auto w-full" variants={stagger()} initial="hidden" animate="show">

        {/* Veteran badge */}
        <motion.div variants={fadeIn} className="mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Image src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png" alt="USMC" width={22} height={22} className="opacity-80" />
            <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
              <StreamText speed={55}>Veteran-Owned Business</StreamText>
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-4xl">
          <StreamText speed={55} startDelay={300}>AI Agents &amp; Automation</StreamText>
          <span className="block" style={{ color: 'var(--accent)' }}>
            <StreamText speed={55} startDelay={300 + t(4, 55)}>for Small Businesses.</StreamText>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={fadeIn} className="mt-7 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
          <StreamText speed={22} startDelay={600 + t(4, 55)}>
            How many after-hours calls does your business miss? How many hours does your team spend on tasks a machine could handle? We build the tools that pick up the slack.
          </StreamText>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#0a0a0a] transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 32px rgba(0,255,136,0.25)' }}>
            Let&apos;s Talk <FiArrowRight />
          </Link>
          <Link href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-gray-300 bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
            See Our Products
          </Link>
        </motion.div>

        {/* Location */}
        <motion.p variants={fadeIn} className="mt-12 text-xs font-mono text-gray-600 tracking-widest uppercase">
          <StreamText speed={50} startDelay={2400}>Fort Collins, CO / Serving Colorado &amp; Central Arkansas</StreamText>
        </motion.p>

      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FiChevronDown className="text-gray-700" size={22} />
      </div>
    </section>
  );
}
