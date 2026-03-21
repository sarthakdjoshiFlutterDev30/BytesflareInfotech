'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from '@/app/Logo.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Image src={Logo} alt="Bytesflare" width={22} height={22} className="object-contain" />
              </div>
              <span className="font-bold text-white">
                Bytesflare <span className="text-teal-400">Infotech</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A product-focused technology company building secure, scalable SaaS platforms for educational institutions.
              Our flagship product BytesAttend automates attendance with AI and cloud technology.
            </p>
            <div className="flex gap-3">
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
                  className="w-9 h-9 bg-slate-800 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/30 rounded-lg flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products & Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="/bytesattend" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">BytesAttend</a>
              </li>
              <li>
                <a href="/bytesattend/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">BytesAttend Privacy Policy</a>
              </li>
              <li>
                <a href="/bytesattend/terms-of-use" className="text-slate-400 hover:text-white transition-colors text-sm">BytesAttend Terms of Use</a>
              </li>
            </ul>
            <h3 className="text-white font-semibold mt-8 mb-5 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm break-all">
                  bytesflareinfotechsales@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+918799196162" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +91-8799196162
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {year} Bytesflare Infotech. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built with Flutter & Firebase</p>
        </div>
      </div>
    </footer>
  );
}
