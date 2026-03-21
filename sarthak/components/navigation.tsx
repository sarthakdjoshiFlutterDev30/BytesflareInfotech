'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/app/Logo.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Features' },
  { href: '#process', label: 'How It Works' },
  { href: '#portfolio', label: 'Modules' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Image src={Logo} alt="Bytesflare" width={22} height={22} className="object-contain" priority />
            </div>
            <span className="font-bold text-white">
              Bytesflare <span className="text-teal-400">Infotech</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Products <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {productsOpen && (
                <div className="absolute top-full right-0 pt-2 w-48">
                  <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <a
                      href="/bytesattend"
                      className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full" />
                      BytesAttend
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-950/95 border-t border-white/5 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-1">
              <div className="text-xs text-slate-600 uppercase tracking-wider mb-1 px-0">Products</div>
              <a
                href="/bytesattend"
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm px-0"
              >
                BytesAttend
              </a>
            </div>
            <div className="px-4 pt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-teal-500 hover:bg-teal-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
