'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/app/Logo.png';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'How It Works' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // If on homepage scroll smoothly; otherwise navigate to /#section
  const handleNav = useCallback((id: string) => {
    setMobileOpen(false);
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  }, [pathname, router]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#05081a]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[68px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_28px_rgba(99,102,241,0.6)] transition-shadow duration-300">
              <Image src={Logo} alt="Bytesflare" width={22} height={22} className="object-contain" priority />
            </div>
            <span className="font-bold text-white tracking-tight truncate">
              Bytesflare{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Infotech
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm font-medium rounded-lg hover:bg-white/[0.05]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#080c1f]/95 backdrop-blur-2xl border-t border-white/[0.06] py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <button
                onClick={() => handleNav('contact')}
                className="block w-full text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-3 rounded-xl text-sm font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
