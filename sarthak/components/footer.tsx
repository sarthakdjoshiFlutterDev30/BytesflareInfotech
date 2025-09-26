'use client';

import { Mail, Phone, MapPin, Zap, Github, Twitter, Linkedin } from 'lucide-react';

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
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Bytesflare <span className="text-teal-400">Infotech</span>
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              We're passionate about crafting exceptional digital experiences that drive business growth. 
              Let's transform your vision into cutting-edge reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">ERP Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">API Integration</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300"> </span>
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
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}