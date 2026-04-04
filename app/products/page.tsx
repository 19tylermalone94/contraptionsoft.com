import { FiMic, FiTerminal, FiDatabase, FiZap, FiGlobe, FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'Products | ContraptionSoft LLC',
  description: 'AI voice agents, always-on AI assistants, local file search, and automation tools for small businesses.',
};

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-5 sm:px-8 pt-28 pb-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            01 &mdash; What We Build
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
            AI Tools Built for the Real World
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl">
            Not vaporware. Not demos. Deployed tools that run your business while you&apos;re busy running your business.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-all group cursor-default">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: 'var(--accent)' }}>
              <FiMic className="text-[#0a0a0a]" size={18} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2 font-mono">Voice Agent</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              An AI that answers your phone after hours, books appointments, handles FAQs, and routes urgent calls. No lead goes cold.
            </p>
            <ul className="space-y-2">
              {['Answers calls 24/7', 'Books appointments automatically', 'Handles common questions', 'Escalates urgent issues to you'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                  <FiCheck size={11} style={{ color: 'var(--accent)', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-all group cursor-default">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: 'var(--accent)' }}>
              <FiTerminal className="text-[#0a0a0a]" size={18} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2 font-mono">AI Agents</h2>
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
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-white/8 bg-[#111] hover:border-white/15 hover:scale-[1.02] transition-all group cursor-default">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              style={{ backgroundColor: 'var(--accent)' }}>
              <FiDatabase className="text-[#0a0a0a]" size={18} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2 font-mono">Local File Search</h2>
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
          </div>

        </div>

        {/* Before / After */}
        <div className="mt-4 rounded-2xl border border-white/8 overflow-hidden" style={{ background: '#0d0d0d' }}>
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
          <div className="grid grid-cols-2 divide-x divide-white/5">
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
        </div>

      </div>
    </main>
  );
}
