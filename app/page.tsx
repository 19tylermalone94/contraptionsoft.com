'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  FiMenu, FiX, FiMic, FiMail, FiArrowRight, FiCheck,
  FiDatabase, FiZap, FiGlobe, FiTerminal, FiShield, FiChevronDown
} from 'react-icons/fi';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const vp = { once: true, margin: '-60px' };

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 w-full overflow-x-hidden">

      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2.5">
              <Image src="/contraptionsoft_logo.jpg" alt="ContraptionSoft Logo" width={32} height={32} className="rounded" />
              <span className="font-mono font-bold tracking-tight" style={{ color: 'var(--accent)' }}>ContraptionSoft</span>
            </a>
            <div className="hidden md:flex items-center gap-7">
              {['#products', '#work', '#about', '#contact'].map((href) => (
                <a key={href} href={href} className="text-sm text-gray-400 hover:text-white transition-colors capitalize">
                  {href.replace('#', '')}
                </a>
              ))}
              <a href="#contact" className="text-sm font-mono px-3 py-1.5 rounded border transition-all hover:bg-[#00ff88]/10"
                style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                Contact
              </a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white p-2" aria-label="Toggle menu">
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-5 pt-3 border-t border-white/5 flex flex-col gap-4">
              {['#products', '#work', '#about', '#contact'].map((href) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-400 hover:text-white transition-colors capitalize py-1">
                  {href.replace('#', '')}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-16"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,136,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

        <motion.div
          className="max-w-6xl mx-auto w-full"
          variants={stagger(0.14)}
          initial="hidden"
          animate={mounted ? 'show' : 'hidden'}
        >
          {/* Veteran badge */}
          <motion.div variants={fadeIn} className="mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image src="/64px-Seal_of_the_United_States_Marine_Corps.svg.png" alt="USMC" width={22} height={22} className="opacity-80" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Veteran-Owned Business</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-4xl">
            AI Agents &amp; Automation
            <span className="block" style={{ color: 'var(--accent)' }}>for Small Businesses.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp}
            className="mt-7 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            How many after-hours calls does your business miss?
            How many hours does your team spend on tasks a machine could handle?
            We build the tools that pick up the slack.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[#0a0a0a] transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 32px rgba(0,255,136,0.25)' }}>
              Let&apos;s Talk <FiArrowRight />
            </a>
            <a href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-gray-300 bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
              See Our Products
            </a>
          </motion.div>

          {/* Location */}
          <motion.p variants={fadeIn} className="mt-12 text-xs font-mono text-gray-600 tracking-widest uppercase">
            Fort Collins, CO &nbsp;/&nbsp; Serving Colorado &amp; Arkansas
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FiChevronDown className="text-gray-700" size={22} />
        </motion.div>
      </section>

      {/* ─── Products ─── */}
      <section id="products" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={vp} className="mb-14">
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              01 &mdash; What We Build
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              AI Tools Built for the Real World
            </motion.h2>
          </motion.div>

          {/* Bento grid */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Voice Agent — featured, spans 2 rows */}
            <motion.div
              variants={fadeUp}
              className="md:row-span-2 flex flex-col p-7 sm:p-9 rounded-2xl border group hover:scale-[1.02] transition-transform cursor-default"
              style={{
                background: 'linear-gradient(160deg, #0d1f12 0%, #0a0a0a 100%)',
                borderColor: 'var(--accent)',
                boxShadow: '0 0 48px rgba(0,255,136,0.08), inset 0 1px 0 rgba(0,255,136,0.1)',
              }}>
              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--accent)' }}>
                  <FiMic className="text-[#0a0a0a]" size={20} />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-mono">Voice Agent</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                An AI that answers your phone after hours, books appointments, handles FAQs, and routes urgent calls.
                No lead goes cold because you were on a job.
              </p>
              <ul className="space-y-3 mt-auto">
                {['Answers calls 24/7', 'Books appointments automatically', 'Handles common questions', 'Escalates urgent issues to you'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <FiCheck size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Agents */}
            <motion.div
              variants={fadeUp}
              className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-all group cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                <FiTerminal className="text-[#0a0a0a]" size={18} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">AI Agents</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Always-on AI you reach through your messaging app. Morning briefing, web deploy, research — just ask.
              </p>
              <ul className="space-y-2">
                {['Discord, Slack, or SMS', 'Builds and deploys web projects', 'Runs 24/7'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                    <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* File Search */}
            <motion.div
              variants={fadeUp}
              className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-all group cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--accent)' }}>
                <FiDatabase className="text-[#0a0a0a]" size={18} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Local File Search</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Ask a question, get an answer from your own documents. No cloud upload. Your data stays put.
              </p>
              <ul className="space-y-2">
                {['PDFs, Word, spreadsheets', 'No cloud required', 'Private by design'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                    <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Before / After — full-width comparison */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="mt-4 rounded-2xl border border-white/8 overflow-hidden"
            style={{ background: '#0d0d0d' }}
          >
            {/* Header row */}
            <div className="grid grid-cols-2 border-b border-white/8">
              <div className="px-5 py-3 flex items-center gap-2 border-r border-white/8">
                <FiZap size={13} className="text-gray-600" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Workflow Automation</span>
              </div>
              <div className="px-5 py-3 flex items-center gap-2">
                <FiGlobe size={13} className="text-gray-600" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Web Presence</span>
              </div>
            </div>

            {/* Content rows */}
            <div className="grid grid-cols-2 divide-x divide-white/5">

              {/* Workflow column */}
              <div className="grid grid-rows-2 divide-y divide-white/5">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Old way</p>
                  <ul className="space-y-2">
                    {['Pick a tool (Zapier, Make, n8n…)', 'Configure triggers & steps', 'Debug it when it breaks', 'Repeat for every new workflow'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-gray-700 mt-0.5 flex-shrink-0">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 sm:p-6" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-2">
                    {['"Send me a summary every Monday"', '"Flag invoices over $500"', '"Follow up if no reply in 2 days"', 'Just say it. Done.'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                        <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Web Presence column */}
              <div className="grid grid-rows-2 divide-y divide-white/5">
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Old way</p>
                  <ul className="space-y-2">
                    {['Find & vet a web developer', 'Wait days for responses', 'Pay for every small change', 'Hope they understood the brief'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-gray-700 mt-0.5 flex-shrink-0">—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 sm:p-6" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-2">
                    {["Chat anytime — it doesn't sleep", 'It codes, ships, handles SEO', 'Changes happen in minutes', 'No queue. No invoice. No delay.'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                        <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── Case Study ─── */}
      <section id="work" className="py-24 sm:py-32 px-5 sm:px-8" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto">

          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={vp} className="mb-14">
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              02 &mdash; Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Work That Ships
            </motion.h2>
          </motion.div>

          {/* Case study card — editorial layout */}
          <div className="grid md:grid-cols-2 gap-4">

            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between"
              style={{
                background: 'linear-gradient(150deg, #0c1c10 0%, #0a0a0a 100%)',
                border: '1px solid rgba(0,255,136,0.25)',
                boxShadow: '0 0 60px rgba(0,255,136,0.05)',
              }}
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Case Study</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">Malone Septic &amp; Excavation</h3>
                <p className="text-gray-400 leading-relaxed">
                  A local excavation company had no web presence at all. We built and launched a full site —
                  branding, copy, contact forms, SEO — in one week. Now they show up when
                  customers search, and leads come in while the owner is on the job.
                </p>
              </div>
              <motion.div
                className="grid grid-cols-3 gap-3 mt-8"
                variants={stagger(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={vp}
              >
                {[
                  { stat: '0 → Live', label: 'Web Presence' },
                  { stat: '1 Week', label: 'Start to Launch' },
                  { stat: 'Organic', label: 'Leads from Search' },
                ].map(({ stat, label }) => (
                  <motion.div key={label} variants={fadeUp}>
                    <div className="text-2xl font-bold font-mono" style={{ color: 'var(--accent)' }}>{stat}</div>
                    <div className="text-xs text-gray-600 mt-1">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Your business here */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="p-8 sm:p-10 rounded-2xl border border-dashed border-white/10 flex flex-col items-start justify-between gap-8"
              style={{ background: '#0d0d0d' }}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-300 mb-3">Your Business Here</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Working with small businesses in Arkansas and Colorado right now.
                  If you&apos;re curious what AI could actually do for your operation —
                  let&apos;s have a straight conversation.
                </p>
              </div>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: '#0a0a0a' }}>
                Get in Touch <FiArrowRight size={14} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="text-xs font-mono tracking-[0.2em] uppercase mb-14" style={{ color: 'var(--accent)' }}>
            03 &mdash; About
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={vp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                About ContraptionSoft
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  ContraptionSoft LLC is run by Tyler Malone — software engineer, Marine veteran,
                  and someone who genuinely enjoys figuring out how to make things work better.
                </p>
                <p>
                  The focus: get real AI tools into the hands of small businesses that need them
                  but don&apos;t have an IT department to sort it out. Voice agents, automation, custom software —
                  built straight, delivered fast, explained plainly.
                </p>
                <p>
                  Based in Fort Collins, CO. Currently working with businesses across Colorado and Arkansas.
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={vp} className="space-y-6">
              {/* Veteran card */}
              <div className="flex items-center gap-5 p-6 rounded-2xl border border-white/8 bg-[#111]">
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
                    <span className="text-sm font-bold text-white">Veteran-Owned &amp; Operated</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Same reliability, directness, and follow-through — just applied to software.
                  </p>
                </div>
              </div>

              {/* Stats — horizontal */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: '100%', label: 'Custom-built' },
                  { val: 'Fast', label: 'Delivery' },
                  { val: 'No BS', label: 'Communication' },
                  { val: 'Local', label: 'Focus' },
                ].map(({ val, label }) => (
                  <div key={label} className="p-4 rounded-xl border border-white/6 bg-[#111] text-center">
                    <div className="text-xl font-bold font-mono mb-0.5" style={{ color: 'var(--accent)' }}>{val}</div>
                    <div className="text-xs text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.p variants={fadeUp} className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
              04 &mdash; Get in Touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
              Let&apos;s Have a Straight Conversation.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-500 max-w-lg mb-12">
              No sales deck. Tell us what problem you&apos;re dealing with — we&apos;ll tell you honestly if AI can help, and what it would cost.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="mailto:tyler@contraptionsoft.com"
              className="group inline-flex items-center gap-3"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white group-hover:underline decoration-[var(--accent)] underline-offset-4 transition-all">
                tyler@contraptionsoft.com
              </span>
              <FiArrowRight size={24} className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
            </motion.a>

            <motion.p variants={fadeIn} className="mt-8 text-sm text-gray-600">
              Responds within 24 hours. Fort Collins or Northwest Arkansas? In-person works too.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-5 sm:px-8 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono font-bold text-sm" style={{ color: 'var(--accent)' }}>ContraptionSoft LLC</span>
          <span className="text-xs text-gray-700">&copy; {new Date().getFullYear()} ContraptionSoft LLC &mdash; Veteran-Owned</span>
        </div>
      </footer>

    </div>
  );
}
