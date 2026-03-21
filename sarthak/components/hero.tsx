'use client';

import { ArrowRight, QrCode, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-300 text-sm font-medium">Introducing BytesAttend — Smart Attendance Platform</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Build Smarter.{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Attend Smarter.
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bytesflare Infotech builds cloud-based SaaS platforms for educational institutions.
          Our flagship product BytesAttend replaces manual registers with secure, AI-powered digital attendance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-6 text-base rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105 group"
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/10 text-white hover:bg-white/5 px-8 py-6 text-base rounded-xl transition-all duration-300 hover:border-teal-500/40"
            onClick={() => {
              const el = document.getElementById('bytesattend');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore BytesAttend
          </Button>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: QrCode, label: 'QR-Based Attendance' },
            { icon: Shield, label: 'AI Face Verification' },
            { icon: Zap, label: 'Real-Time Reports' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-slate-900/80 border border-white/10 rounded-full px-4 py-2 text-slate-300 text-sm"
            >
              <Icon className="w-4 h-4 text-teal-400" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-teal-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
