'use client';

import { motion } from 'framer-motion';
import { ArrowRight, QrCode, Shield, BarChart3, Users, Smartphone, Bell, Star, ExternalLink } from 'lucide-react';

const features = [
  { icon: QrCode, label: 'QR-based smart attendance' },
  { icon: Shield, label: 'Secure face verification (anti-spoofing ready)' },
  { icon: BarChart3, label: 'Real-time dashboard and analytics' },
  { icon: Users, label: 'Role-based access control' },
  { icon: Smartphone, label: 'Cross-platform (Web & Mobile)' },
  { icon: Bell, label: 'Instant notifications' },
];

export function Products() {
  return (
    <section id="products" className="py-28 bg-[#07091e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
            <span className="text-violet-300 text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Platforms built for{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              real-world impact
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Each product solves a specific institutional pain point with modern, scalable technology.
          </p>
        </motion.div>

        {/* BytesAttend Card — 3D lift on hover */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden hover:border-indigo-500/30 transition-colors duration-500 hover:shadow-[0_20px_80px_rgba(99,102,241,0.12)]"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-violet-600/8 to-transparent rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative">
              <div className="flex flex-wrap items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white tracking-tight">BytesAttend</h3>
                    <motion.span
                      animate={{ boxShadow: ['0 0 10px rgba(99,102,241,0.3)', '0 0 20px rgba(99,102,241,0.6)', '0 0 10px rgba(99,102,241,0.3)'] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-600/80 to-violet-600/80 border border-indigo-500/30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <Star className="w-3 h-3 fill-white" />
                      Flagship Product
                    </motion.span>
                  </div>
                  <p className="text-slate-400 text-lg">Smart Attendance &amp; Verification Platform</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                BytesAttend is a cloud-based attendance management platform for educational institutions and businesses. It replaces manual registers with secure, AI-powered digital attendance — supporting QR codes, face verification, and real-time analytics.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                {features.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3 hover:border-indigo-500/25 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <div className="w-7 h-7 bg-indigo-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.location.href = '/bytesattend'}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-colors duration-300 shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              >
                View Details
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-600 text-sm">More products coming soon — proctoring, HR automation, and enterprise tools.</p>
        </motion.div>
      </div>
    </section>
  );
}
