import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Contact | ContraptionSoft LLC',
  description: 'Get in touch with ContraptionSoft. No sales deck — just a straight conversation.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 sm:px-8 pt-28 pb-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--accent)' }}>
          04 &mdash; Get in Touch
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
          Let&apos;s Have a Straight Conversation.
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mb-12">
          No sales deck. Tell us what problem you&apos;re dealing with — we&apos;ll tell you honestly if AI can help, and what it would cost.
        </p>

        <a href="mailto:tyler@contraptionsoft.com" className="group inline-flex items-center gap-3">
          <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white group-hover:underline decoration-[#00ff88] underline-offset-4 transition-all">
            tyler@contraptionsoft.com
          </span>
          <FiArrowRight size={24} className="text-gray-600 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
        </a>

        <p className="mt-8 text-sm text-gray-600">
          Responds within 24 hours. Fort Collins or Central Arkansas (Little Rock, Benton, Hot Springs area)? In-person works too.
        </p>
      </div>
    </main>
  );
}
