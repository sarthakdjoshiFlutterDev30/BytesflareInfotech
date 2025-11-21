'use client';

import { Mail, Phone, MapPin, Zap, Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/app/Logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Image
                src={Logo}
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
              </div>
        <span className="font-bold text-yellow-400">
                Bytesflare <span className="text-teal-400">Infotech</span>
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              We&rsquo;re passionate about crafting exceptional digital experiences that drive business
              growth. Let&rsquo;s transform your vision into cutting-edge reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/BytesF99635" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/bytesflareinfotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/bytesflareinfotech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            <a href="https://facebook.com/BytesFlareInfotech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-slate-300 hover:text-yellow-400 transition-colors cursor-pointer">Web Development</span></li>
              <li><span className="text-slate-300 hover:text-yellow-400 transition-colors cursor-pointer">Mobile Apps</span></li>
              <li><span className="text-slate-300 hover:text-yellow-400 transition-colors cursor-pointer">ERP Solutions</span></li>
              <li><span className="text-slate-300 hover:text-yellow-400 transition-colors cursor-pointer">API Integration</span></li>
              <li><span className="text-slate-300 hover:text-yellow-400 transition-colors cursor-pointer">Cloud Solutions</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/20 via-amber-400/10 to-transparent border border-yellow-400/40 shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                  <Mail className="w-5 h-5 text-yellow-300" strokeWidth={1.75} />
                </span>
                <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-slate-300 hover:text-yellow-300 transition-colors">
                  bytesflareinfotechsales@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 border border-white/10 shadow-inner shadow-amber-500/20">
                  <Phone className="w-5 h-5 text-amber-200" />
                </span>
                <a href="tel:+918799196162" className="text-slate-300 hover:text-amber-200 transition-colors">
                  +91-8799196162
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 border border-white/10 shadow-inner shadow-teal-500/20">
                  <MapPin className="w-5 h-5 text-teal-300" />
                </span>
                <span className="text-slate-300">Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {currentYear} Bytesflare Infotech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-slate-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="text-slate-400 hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}