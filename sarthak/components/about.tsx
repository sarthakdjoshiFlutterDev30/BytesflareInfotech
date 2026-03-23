'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Shield, Brain } from 'lucide-react';

const pillars = [
  { icon: Zap,    title: 'Automation First',       desc: 'We replace manual, error-prone processes with intelligent automated workflows.',                    color: 'indigo' },
  { icon: Shield, title: 'Security by Design',     desc: 'Every platform is architected with data privacy and access control at its core.',                  color: 'violet' },
  { icon: Brain,  title: 'AI-Driven Intelligence', desc: 'Real-time analytics, smart verification, and predictive insights in every product.',               color: 'purple' },
  { icon: Target, title: 'Built for Scale',        desc: 'Cloud-native, multi-tenant architecture designed to grow with your institution.',                   color: 'blue'   },
];

const iconColors: Record<string, string> = {
  indigo: 'text-indigo-400', violet: 'text-violet-400', purple: 'text-purple-400', blue: 'text-blue-400',
};

const inView = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.65, ease: 'easeOut' as const } }),
};

export function About() {
  return (
    <section id="about" className="py-28 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              <span className="text-indigo-300 text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              A startup building{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                intelligent SaaS
              </span>{' '}
              for India
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              Bytesflare Infotech is a product-focused technology startup based in Gujarat, India. We build secure, scalable, and intelligent software platforms that replace manual processes with reliable digital systems.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              Our vision is to become India's leading SaaS company for institutional and enterprise automation — starting with attendance, expanding into proctoring, HR, and beyond.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '2025', label: 'Founded' },
                { value: 'Gujarat', label: 'Based in India' },
                { value: 'SaaS', label: 'Product Focus' },
                { value: '24/7', label: 'Cloud Availability' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-indigo-500/25 hover:bg-white/[0.05] transition-colors duration-300 cursor-default"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">{s.value}</div>
                  <div className="text-slate-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — pillar cards with 3D tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={inView} initial="hidden" whileInView="show" custom={i}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ rotateY: 6, rotateX: -4, scale: 1.03, transition: { duration: 0.25 } }}
                style={{ transformStyle: 'preserve-3d', perspective: 600 }}
                className="group bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/25 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-300 cursor-default"
              >
                <div className="w-11 h-11 bg-white/[0.06] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/[0.09] transition-colors">
                  <Icon className={`w-5 h-5 ${iconColors[color]}`} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
