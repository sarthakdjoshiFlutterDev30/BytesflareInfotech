'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

/* ── Tech items with inline SVG logos ── */
const techs = [
  {
    name: 'Flutter',
    desc: 'Cross-platform UI — Web & Mobile',
    color: '56,189,248',
    accent: 'from-sky-500/20 to-cyan-500/10',
    border: 'hover:border-sky-500/40',
    textColor: 'text-sky-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M13 29.5L24.5 18 36 29.5 24.5 41z" fill="#54C5F8"/>
        <path d="M13 29.5L24.5 18 36 29.5 24.5 41z" fill="url(#fl1)"/>
        <path d="M24.5 18L36 6.5 47.5 18 36 29.5z" fill="#54C5F8"/>
        <path d="M24.5 41L36 29.5l5.5 5.5L36 41z" fill="#01579B" opacity="0.8"/>
        <defs>
          <linearGradient id="fl1" x1="13" y1="29.5" x2="36" y2="29.5">
            <stop stopColor="#29B6F6"/>
            <stop offset="1" stopColor="#54C5F8"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    desc: 'Realtime DB, Auth & Cloud Functions',
    color: '251,146,60',
    accent: 'from-orange-500/20 to-amber-500/10',
    border: 'hover:border-orange-500/40',
    textColor: 'text-orange-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M8 37L14.5 8l9 16.5L8 37z" fill="#FFA000"/>
        <path d="M8 37l16-9.5 16 9.5-16 5z" fill="#F57F17"/>
        <path d="M23.5 24.5L14.5 8 40 37l-16.5-12.5z" fill="#FFCA28"/>
        <path d="M8 37l16 5 16-5-16-9.5z" fill="#FF8F00" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'AI / ML',
    desc: 'Face verification, liveness & anti-spoofing',
    color: '167,139,250',
    accent: 'from-violet-500/20 to-purple-500/10',
    border: 'hover:border-violet-500/40',
    textColor: 'text-violet-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <circle cx="24" cy="24" r="10" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="#a78bfa"/>
        {[0,60,120,180,240,300].map((deg, i) => {
          const r = Math.PI * deg / 180;
          const x1 = 24 + 10 * Math.cos(r), y1 = 24 + 10 * Math.sin(r);
          const x2 = 24 + 18 * Math.cos(r), y2 = 24 + 18 * Math.sin(r);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>;
        })}
        {[0,60,120,180,240,300].map((deg, i) => {
          const r = Math.PI * deg / 180;
          const x = 24 + 18 * Math.cos(r), y = 24 + 18 * Math.sin(r);
          return <circle key={i} cx={x} cy={y} r="2.5" fill="#c4b5fd"/>;
        })}
      </svg>
    ),
  },
  {
    name: 'MERN Stack',
    desc: 'MongoDB · Express · React · Node.js',
    color: '52,211,153',
    accent: 'from-emerald-500/20 to-green-500/10',
    border: 'hover:border-emerald-500/40',
    textColor: 'text-emerald-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        {/* M */}
        <text x="4" y="32" fontSize="22" fontWeight="800" fill="#34d399" fontFamily="monospace">M</text>
        {/* dot */}
        <circle cx="38" cy="24" r="5" fill="#34d399" opacity="0.3" stroke="#34d399" strokeWidth="1.5"/>
        <path d="M24 10 C24 10 14 18 14 26 C14 31 18.5 35 24 35 C29.5 35 34 31 34 26 C34 18 24 10 24 10Z" stroke="#34d399" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="26" r="3" fill="#34d399"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    desc: 'Cloud infrastructure & scalable hosting',
    color: '251,191,36',
    accent: 'from-yellow-500/20 to-amber-500/10',
    border: 'hover:border-yellow-500/40',
    textColor: 'text-yellow-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        <path d="M14 28c-3.3 1.4-5 3.2-5 5 0 3.3 6.7 6 15 6s15-2.7 15-6c0-1.8-1.7-3.6-5-5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 20l4 8h20l4-8" stroke="#FBBF24" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 10v10M18 13l6-3 6 3" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="20" width="16" height="8" rx="2" stroke="#FBBF24" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    desc: 'Containerised deployments & CI/CD',
    color: '96,165,250',
    accent: 'from-blue-500/20 to-indigo-500/10',
    border: 'hover:border-blue-500/40',
    textColor: 'text-blue-300',
    logo: (
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none">
        {/* Container stack */}
        {[0,1,2].map(row =>
          [0,1,2,3].map(col => (
            <rect key={`${row}-${col}`} x={8 + col * 8} y={14 + row * 7} width="6" height="5" rx="1"
              stroke="#60a5fa" strokeWidth="1.2"
              fill={row === 2 && col < 3 ? 'rgba(96,165,250,0.15)' : 'none'}/>
          ))
        )}
        {/* Whale tail */}
        <path d="M36 26 C40 24 42 20 40 16" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="15" r="1.5" fill="#60a5fa"/>
      </svg>
    ),
  },
];

/* ── Animated orbit ring behind the grid ── */
function OrbitRing({ size, duration, delay, color }: { size: number; duration: number; delay: number; color: string }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
      className="absolute top-1/2 left-1/2 rounded-full border pointer-events-none"
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, borderColor: color }}
    />
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-28 bg-[#07091e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
          <OrbitRing size={400} duration={30} delay={0}   color="rgba(99,102,241,0.07)" />
          <OrbitRing size={600} duration={50} delay={5}   color="rgba(139,92,246,0.05)" />
          <OrbitRing size={820} duration={70} delay={10}  color="rgba(99,102,241,0.03)" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-300 text-sm font-medium">Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Engineered with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              industry-grade tools
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every layer of our stack is chosen for performance, security, and scale — from mobile UI to cloud infrastructure.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map(({ name, desc, color, accent, border, textColor, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative bg-white/[0.03] border border-white/[0.07] ${border} rounded-2xl p-6 overflow-hidden transition-colors duration-300 hover:bg-white/[0.05] cursor-default`}
            >
              {/* Corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                style={{ background: `radial-gradient(circle, rgba(${color},0.15), transparent)`, transform: 'translate(30%,-30%)' }}
              />

              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                {/* Logo box */}
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0], transition: { duration: 0.5 } }}
                  className={`w-14 h-14 bg-gradient-to-br ${accent} border border-white/[0.08] rounded-2xl flex items-center justify-center`}
                  style={{ boxShadow: `0 0 20px rgba(${color},0.2)` }}
                >
                  {logo}
                </motion.div>

                {/* Animated dot indicator */}
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: `rgba(${color},0.8)` }}
                  />
                  <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest">Active</span>
                </div>
              </div>

              {/* Name & desc */}
              <h3 className={`text-lg font-bold mb-1.5 ${textColor}`}>{name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>

              {/* Bottom bar */}
              <div className="mt-5 pt-4 border-t border-white/[0.05]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: 'easeOut' }}
                  style={{ originX: 0, background: `linear-gradient(90deg, rgba(${color},0.6), rgba(${color},0.1))` }}
                  className="h-0.5 rounded-full w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 relative overflow-hidden"
        >
          <div className="flex gap-6 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[...techs, ...techs].map(({ name, textColor }, i) => (
              <span key={i} className={`text-sm font-semibold ${textColor} opacity-40 flex-shrink-0`}>
                {name} ·
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#07091e] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#07091e] to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
