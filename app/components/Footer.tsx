export default function Footer() {
  return (
    <footer className="py-8 px-5 sm:px-8 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-mono font-bold text-sm" style={{ color: 'var(--accent)' }}>ContraptionSoft LLC</span>
        <span className="text-xs text-gray-700">&copy; {new Date().getFullYear()} ContraptionSoft LLC &mdash; Veteran-Owned</span>
      </div>
    </footer>
  );
}
