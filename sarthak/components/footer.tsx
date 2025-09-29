'use client';

import { Mail, Phone, MapPin, Zap, Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

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
              <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFUe8m5d02Q-w/company-logo_200_200/B4DZih0WwyH4AI-/0/1755061515713?e=1761782400&v=beta&t=_0-_VaZpmgI_WctUBmcCSO3g90CEZqw9JDtydP2j9lk" alt="Logo"  />
            </div>
        <span className="font-bold text-yellow-400">
                Bytesflare <span className="text-teal-400">Infotech</span>
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              We're passionate about crafting exceptional digital experiences that drive business growth. 
              Let's transform your vision into cutting-edge reality.
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
                <Mail className="w-5 h-5 text-teal-00" />
                <span className="text-slate-300">bytesflareinfotechsales@gmail.com</span>
              </li>
             
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">Gujrat,India</span>
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