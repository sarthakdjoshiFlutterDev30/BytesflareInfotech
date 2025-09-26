'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFUe8m5d02Q-w/company-logo_200_200/B4DZih0WwyH4AI-/0/1755061515713?e=1761782400&v=beta&t=_0-_VaZpmgI_WctUBmcCSO3g90CEZqw9JDtydP2j9lk" alt="Logo"  />
            </div>
            <span className="font-bold text-xl text-slate-00">
              Bytesflare <span className="text-teal-500">Infotech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-teal-500 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href='#contact'
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-teal-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-slate-600 hover:text-teal-500 hover:bg-teal-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <a
                href='#contact'
                className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get Started
              </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}