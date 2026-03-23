'use client';

import { motion } from 'framer-motion';
import { PlusCircle, ScanFace, BarChart3 } from 'lucide-react';

const steps = [
  {
    step: '01', icon: PlusCircle,
    title: 'Create Session',
    desc: 'Admin or teacher creates an attendance session in seconds — set the subject, time, and location. A unique QR code is generated automatically.',
    accent: 'from-indigo-500 to-blue-500', shadowColor: '99,102,241', borderHover: 'hover:border-indigo-500/30',
  },
  {
    step: '02', icon: ScanFace,
    title: 'Users Verify',
    desc: 'Students scan the QR code or complete face verification with liveness detection. GPS geo-fencing ensures they are physically present.',
    accent: 'from-violet-500 to-indigo-500', shadowColor: '139,92,246', borderHover: 'hover:border-violet-500/30',
  },
  {
    step: '03', icon: BarChart3,
    title: 'Data Tracked in Real-Time',
    desc: 'Attendance is recorded instantly to the cloud. Admins see live dashboards, generate reports, and export data — all in real-time.',
    accent: 'from-purple-500 to-violet-500', shadowColor: '168,85,247', borderHover: 'hover:border-purple-500/30',
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.05),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            <span className="text-indigo-300 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Fast. Reliable.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From session creation to real-time reports — the entire attendance lifecycle in three steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{ originX: 0 }}
              className="w-full h-full bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-purple-500/40"
            />
          </div>

          {steps.map(({ step, icon: Icon, title, desc, accent, shadowColor, borderHover }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative z-10 group bg-white/[0.03] border border-white/[0.07] ${borderHover} rounded-2xl p-6 sm:p-8 text-center transition-colors duration-300 hover:bg-white/[0.05]`}
            >
              <div className="relative inline-flex mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                  className={`w-16 h-16 bg-gradient-to-br ${accent} rounded-2xl flex items-center justify-center`}
                  style={{ boxShadow: `0 0 30px rgba(${shadowColor},0.35)` }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#07091e] border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400">
                  {step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
