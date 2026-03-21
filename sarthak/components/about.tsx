'use client';

import { Target, Layers, TrendingUp, Users } from 'lucide-react';

const highlights = [
  { icon: Target, title: 'Product-First', desc: 'We build our own SaaS products, not generic services.' },
  { icon: Layers, title: 'Multi-Tenant', desc: 'Isolated data per institution, one unified platform.' },
  { icon: TrendingUp, title: 'Scalable', desc: 'Cloud-native architecture built for thousands of users.' },
  { icon: Users, title: 'Role-Based', desc: 'Super Admin, HOD, Teacher, and Student roles.' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal-400 text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A product company building{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                digital-first institutions
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Bytesflare Infotech is a product-focused technology startup based in Gujarat, India.
              We build secure, scalable, and intelligent software platforms that replace manual
              processes with reliable digital systems.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our flagship product <span className="text-teal-400 font-semibold">BytesAttend</span> is
              a cloud-based attendance management platform designed for educational institutions —
              supporting multiple universities under a single multi-tenant architecture with
              role-based access for Super Admins, HODs, Teachers, and Students.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30+', label: 'Active Deployments' },
                { value: '10+', label: 'Platform Modules' },
                { value: '99.9%', label: 'System Uptime' },
                { value: '24/7', label: 'Cloud Availability' },
              ].map((s) => (
                <div key={s.label} className="bg-slate-900/60 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
