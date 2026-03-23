'use client';

import { motion } from 'framer-motion';
import { Rocket, Eye, Globe } from 'lucide-react';

const roadmap = [
  { icon: Rocket, title: 'Attendance Systems',    desc: 'Smart, verified, real-time',   status: 'Live' },
  { icon: Eye,    title: 'Proctoring Solutions',  desc: 'AI-powered exam integrity',     status: 'Coming Soon' },
  { icon: Globe,  title: 'Enterprise Automation', desc: 'End-to-end workflow tools',     status: 'Planned' },
];

export function Vision() {
  return (
    <section id="vision" className="py-28 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-600/8 via-violet-600/8 to-purple-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-indigo-950/80 via-[#0d0f2a] to-violet-950/60 border border-indigo-500/20 rounded-3xl p-6 sm:p-10 lg:p-16 overflow-hidden"
        >
          {/* Inner orbs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-indigo-500/8 pointer-events-none hidden sm:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-violet-500/5 pointer-events-none hidden sm:block"
          />

          <div className="relative text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] rounded-full px-4 py-1.5 mb-8"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-indigo-200 text-sm font-medium">Our Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight max-w-3xl mx-auto"
            >
              Building the future of{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                institutional intelligence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-slate-300/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              We are building a suite of intelligent platforms including attendance systems, proctoring solutions, and enterprise automation tools.
            </motion.p>
          </div>

          {/* Roadmap cards */}
          <div className="relative grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="hidden sm:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-purple-500/30" />

            {roadmap.map(({ icon: Icon, title, desc, status }, i) => {
              const isLive = status === 'Live';
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.25 } }}
                  className="relative bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/[0.08] hover:border-indigo-500/30 transition-colors duration-300 cursor-default"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                    className="w-12 h-12 bg-white/[0.08] rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </motion.div>
                  <div className="text-white font-semibold mb-1 text-sm">{title}</div>
                  <div className="text-slate-400 text-xs mb-3">{desc}</div>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    isLive
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25'
                      : 'bg-white/[0.05] text-slate-500 border border-white/[0.08]'
                  }`}>
                    {isLive && <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />}
                    {status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
