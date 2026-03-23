'use client';

import Image from 'next/image';
import { Mail, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from '@/app/Logo.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#03050f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-shadow">
                <Image src={Logo} alt="Bytesflare" width={22} height={22} className="object-contain" />
              </div>
              <span className="font-bold text-white tracking-tight">
                Bytesflare{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Infotech
                </span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-sm">
              A product-focused SaaS startup from India, building intelligent platforms for institutions and businesses. Automation, security, and real-time intelligence — in every product we ship.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: 'https://x.com/BytesF99635', icon: Twitter },
                { href: 'https://www.linkedin.com/company/bytesflareinfotech/', icon: Linkedin },
                { href: 'https://www.instagram.com/bytesflareinfotech/', icon: Instagram },
                { href: 'https://facebook.com/BytesFlareInfotech', icon: Facebook },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.04] hover:bg-indigo-500/15 border border-white/[0.07] hover:border-indigo-500/30 rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products & Legal */}
          <div>
            <h3 className="text-slate-300 font-semibold mb-5 text-xs uppercase tracking-widest">Products</h3>
            <ul className="space-y-3">
              <li><a href="https://www.bytesattend.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">BytesAttend</a></li>
              <li><a href="/bytesattend/privacy-policy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">BytesAttend Privacy Policy</a></li>
              <li><a href="/bytesattend/terms-of-use" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">BytesAttend Terms of Use</a></li>
            </ul>
            <h3 className="text-slate-300 font-semibold mt-8 mb-5 text-xs uppercase tracking-widest">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-300 font-semibold mb-5 text-xs uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-slate-500 hover:text-white transition-colors text-sm break-all">
                  bytesflareinfotechsales@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© {year} Bytesflare Infotech. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
