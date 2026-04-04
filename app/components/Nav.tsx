'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/work', label: 'Our Work' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/contraptionsoft_logo.jpg" alt="ContraptionSoft Logo" width={32} height={32} className="rounded" />
            <span className="font-mono font-bold tracking-tight" style={{ color: 'var(--accent)' }}>ContraptionSoft</span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`text-sm transition-colors ${pathname === href ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                {label}
              </Link>
            ))}
            <Link href="/contact"
              className="text-sm font-mono px-3 py-1.5 rounded border transition-all hover:bg-[#00ff88]/10"
              style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
              Contact
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white p-2" aria-label="Toggle menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-5 pt-3 border-t border-white/5 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className={`text-sm transition-colors py-1 ${pathname === href ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
