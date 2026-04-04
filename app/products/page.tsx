import { FiMic, FiTerminal, FiDatabase, FiZap, FiGlobe, FiCheck, FiArrowRight } from 'react-icons/fi';

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

        {/* Before / After — two stacked comparison blocks */}
        <div className="mt-4 space-y-3">

          {[
            {
              icon: <FiZap size={14} />,
              topic: 'Workflow Automation',
              before: ['Pick a tool (Zapier, Make, n8n…)', 'Configure triggers and steps', 'Debug it when something breaks', 'Start over for every new workflow'],
              after: ['"Send me a summary every Monday"', '"Flag any invoice over $500"', '"Follow up if no reply in 2 days"', 'Just say it. Agent handles the rest.'],
            },
            {
              icon: <FiGlobe size={14} />,
              topic: 'Web Presence',
              before: ['Find and vet a web developer', 'Wait days for a response', 'Pay for every small change', 'Hope they understood what you wanted'],
              after: ["Chat with it anytime — it doesn't sleep", 'It codes, ships, and handles SEO', 'Changes happen in minutes', 'No queue. No invoice. No delay.'],
            },
          ].map(({ icon, topic, before, after }) => (
            <div key={topic} className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: '#0d0d0d' }}>
              {/* Topic header */}
              <div className="px-6 py-3 border-b border-white/8 flex items-center gap-2">
                <span className="text-gray-500">{icon}</span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{topic}</span>
              </div>

              {/* Before → After */}
              <div className="flex flex-col sm:flex-row">

                {/* Before */}
                <div className="flex-1 p-6 sm:p-7">
                  <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Without an agent</p>
                  <ul className="space-y-3">
                    {before.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="mt-1 text-gray-700 flex-shrink-0 font-mono">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center justify-center px-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-white/10" />
                    <FiArrowRight size={16} style={{ color: 'var(--accent)' }} />
                    <div className="w-px h-8 bg-white/10" />
                  </div>
                </div>
                <div className="sm:hidden flex items-center justify-center py-2 border-t border-white/8">
                  <FiArrowRight size={16} className="rotate-90" style={{ color: 'var(--accent)' }} />
                </div>

                {/* After */}
                <div className="flex-1 p-6 sm:p-7 border-t sm:border-t-0 sm:border-l border-white/8"
                  style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>With an agent</p>
                  <ul className="space-y-3">
                    {after.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
                        <FiCheck size={13} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
