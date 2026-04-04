'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  FiMenu, FiX, FiMic, FiMail, FiArrowRight, FiCheck,
  FiDatabase, FiZap, FiGlobe, FiTerminal, FiShield
} from 'react-icons/fi';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = (delayChildren = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren } },
});

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const vp = { once: true, margin: '-80px' };

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 w-full">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/contraptionsoft_logo.jpg"
                alt="ContraptionSoft Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-geist-mono)' }}>
                ContraptionSoft
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Home</a>
              <a href="#products" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Products</a>
              <a href="#work" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Our Work</a>
              <a href="#about" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">About</a>
              <a
                href="#contact"
                className="px-4 py-2 border border-[#00ff88] text-[#00ff88] rounded font-mono text-sm hover:bg-[#00ff88]/10 transition-all"
              >
                Contact Us
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-[#00ff88] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800 mt-2">
              <div className="flex flex-col gap-4 pt-4">
                {['#home', '#products', '#work', '#about', '#contact'].map((href) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium py-2 capitalize"
                  >
                    {href.replace('#', '')}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            variants={stagger(0.15)}
            initial="hidden"
            animate={mounted ? 'show' : 'hidden'}
          >
            {/* Veteran Badge */}
            <motion.div variants={fadeIn} className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#111] border border-gray-700 rounded-lg">
                <Image
                  src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png"
                  alt="US Marine Corps Seal"
                  width={36}
                  height={36}
                  className="opacity-90"
                />
                <span className="text-sm font-semibold text-gray-300 tracking-wide uppercase">
                  Veteran-Owned Business
                </span>
              </div>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
              <motion.p variants={fadeUp} className="text-sm font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                ContraptionSoft LLC &mdash; Fort Collins, CO
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100 leading-tight px-2">
                AI Agents and Automation
                <span className="block mt-2" style={{ color: 'var(--accent)' }}>
                  for Small Businesses
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                How many after-hours calls does your business miss? How many hours does your team spend
                on tasks a machine could handle? We build AI tools that pick up the slack — so you don&apos;t have to.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-2">
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-[#0a0a0a] rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  style={{ backgroundColor: 'var(--accent)', boxShadow: '0 4px 24px var(--accent-glow)' }}
                >
                  Let&apos;s Talk
                  <FiArrowRight />
                </a>
                <a
                  href="#products"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 text-sm sm:text-base border-2"
                  style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
                >
                  See Our Products
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products / AI Tools Section */}
      <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-10 sm:mb-16"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              // what we build
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              AI Tools Built for the Real World
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Not vaporware. Not demos. Deployed tools that run your business while you&apos;re busy running your business.
            </motion.p>
          </motion.div>

          {/* Top 3 product cards */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={stagger(0.13)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {/* Voice Agent — featured */}
            <motion.div
              variants={fadeUp}
              className="p-6 md:p-8 rounded-xl border transition-all hover:scale-105 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0f1f14, #0d0d0d)',
                borderColor: 'var(--accent)',
                boxShadow: '0 0 32px var(--accent-glow)',
              }}>
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono px-2 py-1 rounded" style={{ color: 'var(--accent)', border: '1px solid var(--accent)', background: 'var(--accent-glow)' }}>
                  Most Popular
                </span>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                <FiMic className="text-[#0a0a0a] text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                Voice Agent
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                An AI that answers your phone after hours, books appointments, answers FAQs, and
                routes urgent calls — so no lead goes cold because you were on a job.
              </p>
              <ul className="space-y-2">
                {[
                  'Answers calls 24/7',
                  'Books appointments automatically',
                  'Handles common questions',
                  'Escalates urgent issues to you',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <FiCheck className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Agents */}
            <motion.div
              variants={fadeUp}
              className="p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#00ff88]/40 transition-all hover:scale-105 group"
              style={{ background: 'linear-gradient(135deg, #141414, #0d0d0d)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                <FiTerminal className="text-[#0a0a0a] text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                AI Agents
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                Always-on AI that you reach through your messaging app of choice. Ask it to pull a morning
                briefing, spin up a web page, handle a deployment, or research a vendor — it just does it.
              </p>
              <ul className="space-y-2">
                {[
                  'Available on messaging apps (Discord, Slack, etc.)',
                  'Handles research, writing, and scheduling',
                  'Can build and deploy web projects',
                  'Runs 24/7 — not just when you open an app',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <FiCheck className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* File Search */}
            <motion.div
              variants={fadeUp}
              className="p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#00ff88]/40 transition-all hover:scale-105 group"
              style={{ background: 'linear-gradient(135deg, #141414, #0d0d0d)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                <FiDatabase className="text-[#0a0a0a] text-xl sm:text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                Local File Search
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                Ask a question and get the answer from your own documents, contracts, manuals, and records.
                No cloud upload required — your data stays on your machine.
              </p>
              <ul className="space-y-2">
                {[
                  'Search your own documents with AI',
                  'No cloud storage required',
                  'Works with PDFs, Word, spreadsheets',
                  'Private & secure by design',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <FiCheck className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Before/After comparison cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6 md:mt-8">

            {/* Workflows — slides in from left */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="rounded-xl border border-gray-800 overflow-hidden"
              style={{ background: '#0f0f0f' }}>
              <div className="px-5 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <FiZap className="text-sm" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-mono font-bold text-gray-100">Workflow Automation</span>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-800">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-3">Old way</p>
                  <ul className="space-y-2">
                    {[
                      'Pick a tool (Zapier, Make, n8n…)',
                      'Configure triggers & steps',
                      'Debug it when it breaks',
                      'Repeat for every new workflow',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="mt-1 flex-shrink-0 text-gray-700">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 sm:p-5" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-2">
                    {[
                      '"Send me a summary every Monday"',
                      '"Flag invoices over $500"',
                      '"Follow up if no reply in 2 days"',
                      'Just say it. Agent handles the rest.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                        <FiCheck className="flex-shrink-0 mt-0.5 text-xs" style={{ color: 'var(--accent)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Web Presence — slides in from right */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="rounded-xl border border-gray-800 overflow-hidden"
              style={{ background: '#0f0f0f' }}>
              <div className="px-5 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <FiGlobe className="text-sm" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-mono font-bold text-gray-100">Web Presence</span>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-800">
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-3">Old way</p>
                  <ul className="space-y-2">
                    {[
                      'Find & vet a web developer',
                      'Wait days for responses',
                      'Pay for every small change',
                      'Hope they understood the brief',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="mt-1 flex-shrink-0 text-gray-700">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 sm:p-5" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-2">
                    {[
                      "Chat with it anytime — it doesn't sleep",
                      'It codes, ships, and handles SEO',
                      'Changes happen in minutes',
                      'No queue. No invoice. No delay.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                        <FiCheck className="flex-shrink-0 mt-0.5 text-xs" style={{ color: 'var(--accent)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Case Studies / Our Work */}
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-10 sm:mb-16"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              // client results
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              Work That Ships
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Real projects, real outcomes.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

            {/* Malone Septic */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="p-6 sm:p-8 rounded-xl border transition-all"
              style={{
                background: 'linear-gradient(135deg, #0f1f14, #0d0d0d)',
                borderColor: 'var(--accent)',
                boxShadow: '0 0 24px var(--accent-glow)',
              }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  <FiGlobe className="text-[#0a0a0a] text-lg" />
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-gray-500">Case Study</p>
                  <h3 className="text-lg font-bold text-gray-100">Malone Septic &amp; Excavation</h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
                A local excavation company had no web presence at all. We built and launched a full site —
                branding, copy, contact forms, SEO — in one week. Now they show up when
                customers search, and leads come in while the owner is on the job.
              </p>
              <motion.div
                className="grid grid-cols-3 gap-3"
                variants={stagger(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={vp}
              >
                {[
                  { stat: '0 → live', label: 'web presence' },
                  { stat: '1 week', label: 'start to launch' },
                  { stat: 'organic', label: 'leads from search' },
                ].map(({ stat, label }) => (
                  <motion.div key={label} variants={fadeUp} className="text-center p-3 rounded-lg bg-[#0a0a0a] border border-gray-800">
                    <div className="text-lg font-bold font-mono" style={{ color: 'var(--accent)' }}>{stat}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* "You could be here" placeholder */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="p-6 sm:p-8 rounded-xl border border-gray-800 border-dashed flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center">
                <FiArrowRight className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-300 mb-2">Your Business Here</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  We&apos;re working with small businesses in Arkansas and Colorado right now.
                  If you&apos;re curious what AI could actually do for your operation — let&apos;s have a straight conversation.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105 inline-flex items-center gap-2"
                style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}
              >
                Get in Touch
                <FiArrowRight size={14} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">

            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
                // about us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-5">
                About ContraptionSoft
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                ContraptionSoft LLC is run by Tyler Malone — software engineer, Marine veteran, and
                one of those people who actually enjoys figuring out how to make things work better.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                The company&apos;s focus is simple: get AI tools into the hands of small businesses that
                need them but don&apos;t have an IT department to figure it out. Voice agents, automation,
                custom software — built straight, delivered fast, explained plainly.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Based in Fort Collins, CO. Currently working with businesses across Colorado and Arkansas.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <div className="p-5 sm:p-6 rounded-xl border border-gray-800 flex items-center gap-5 hover:border-[#00ff88]/30 transition-all"
                style={{ background: '#141414' }}>
                <Image
                  src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png"
                  alt="US Marine Corps Seal"
                  width={64}
                  height={64}
                  className="opacity-90 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FiShield style={{ color: 'var(--accent)' }} />
                    <h4 className="text-base font-bold text-gray-100">Veteran-Owned &amp; Operated</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Proudly serving those who served. ContraptionSoft is veteran-owned and brings
                    that same bias toward reliability, directness, and getting the job done.
                  </p>
                </div>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={stagger(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={vp}
              >
                {[
                  { val: '100%', label: 'Custom-built' },
                  { val: 'Fast', label: 'Delivery' },
                  { val: 'No BS', label: 'Communication' },
                  { val: 'Local', label: 'Focus' },
                ].map(({ val, label }) => (
                  <motion.div key={label} variants={fadeUp} className="p-4 sm:p-5 rounded-xl border border-gray-800 text-center"
                    style={{ background: '#0f0f0f' }}>
                    <div className="text-2xl font-bold font-mono mb-1" style={{ color: 'var(--accent)' }}>{val}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              // get in touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              Let&apos;s Have a Straight Conversation
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-400 px-4">
              No sales deck. Tell us what problem you&apos;re dealing with and we&apos;ll tell you honestly
              if AI can help — and what it would actually cost.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-800"
            style={{ background: 'linear-gradient(135deg, #141414, #0d0d0d)' }}
          >
            <a
              href="mailto:tyler@contraptionsoft.com"
              className="block p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#00ff88]/50 transition-all hover:scale-[1.02] group"
              style={{ background: '#0a0a0a' }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  <FiMail className="text-[#0a0a0a] text-lg sm:text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1 font-mono">email</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-100 group-hover:text-[#00ff88] transition-colors break-all">
                    tyler@contraptionsoft.com
                  </div>
                </div>
                <FiArrowRight className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
              </div>
            </a>
            <div className="pt-5 sm:pt-6 border-t border-gray-800 mt-5 sm:mt-6">
              <p className="text-sm text-gray-500 text-center">
                Typically respond within 24 hours. If you&apos;re in the Fort Collins or Northwest Arkansas area and want to meet in person — that&apos;s on the table too.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 bg-[#0a0a0a] border-t border-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold font-mono" style={{ color: 'var(--accent)' }}>
                ContraptionSoft LLC
              </span>
              <span className="text-gray-700">&mdash;</span>
              <span className="text-sm text-gray-600">Veteran-Owned</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              &copy; {new Date().getFullYear()} ContraptionSoft LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
