'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap, BarChart3 } from 'lucide-react';

/* ── Floating 3-D orb that follows the cursor ── */
function CursorOrb() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full"
      style={{
        left: sx,
        top: sy,
        x: '-50%',
        y: '-50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
}

/* ── Rotating 3-D wireframe sphere (pure CSS + SVG) ── */
function WireframeSphere() {
  return (
    <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-20 pointer-events-none hidden lg:block">
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: 360, rotateX: 15 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      >
        <svg viewBox="0 0 520 520" className="w-full h-full" fill="none">
          {/* Latitude rings */}
          {[0.15, 0.3, 0.5, 0.7, 0.85].map((t, i) => {
            const cy = 260 + (t - 0.5) * 440;
            const r = Math.sqrt(Math.max(0, 220 * 220 - (cy - 260) * (cy - 260)));
            return <ellipse key={i} cx="260" cy={cy} rx={r} ry={r * 0.28} stroke="url(#sg)" strokeWidth="0.8" />;
          })}
          {/* Longitude arcs */}
          {[0, 30, 60, 90, 120, 150].map((deg, i) => (
            <ellipse key={i} cx="260" cy="260" rx={220 * Math.abs(Math.cos((deg * Math.PI) / 180))} ry="220" stroke="url(#sg)" strokeWidth="0.8"
              transform={`rotate(${deg} 260 260)`} />
          ))}
          {/* Equator */}
          <ellipse cx="260" cy="260" rx="220" ry="62" stroke="#818cf8" strokeWidth="1.2" />
          {/* Outer circle */}
          <circle cx="260" cy="260" r="220" stroke="#818cf8" strokeWidth="1" />
          <defs>
            <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {/* Glow behind sphere */}
      <div className="absolute inset-0 bg-indigo-600/10 rounded-full blur-3xl" />
    </div>
  );
}

/* ── Animated floating particles ── */
function Particles() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 6 + 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ── 3-D tilt card wrapper ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 25 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 25 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotX.set(((e.clientY - cy) / rect.height) * -12);
    rotY.set(((e.clientX - cx) / rect.width) * 12);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { rotX.set(0); rotY.set(0); }}
      style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' as const } }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05081a]">
      <CursorOrb />

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[5%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[130px] animate-pulse-glow" />
        <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[350px] bg-blue-700/6 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
      </div>

      <Particles />
      <WireframeSphere />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2 mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-indigo-300 text-sm font-medium tracking-wide">SaaS Innovation from India</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-white mb-7 leading-[1.08] tracking-tight"
        >
          Building Smart Digital
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            Systems for Institutions
          </span>
          <br />
          <span className="text-slate-200">&amp; Businesses</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="text-lg sm:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
        >
          We develop scalable SaaS platforms focused on automation, security, and real-time intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-colors duration-300 shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_50px_rgba(99,102,241,0.55)]"
          >
            Request Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.09] hover:border-white/[0.18] hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            View Products
          </motion.button>
        </motion.div>

        {/* 3D tilt stat pills */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: BarChart3, value: '30+',   label: 'Active Deployments' },
            { icon: Shield,    value: '99.9%', label: 'System Uptime' },
            { icon: Zap,       value: '5000+', label: 'Users Tracked' },
          ].map(({ icon: Icon, value, label }) => (
            <TiltCard key={label}>
              <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-3 backdrop-blur-sm hover:bg-white/[0.07] hover:border-indigo-500/30 transition-all duration-300 cursor-default">
                <Icon className="w-4 h-4 text-indigo-400" />
                <span className="text-white font-bold text-sm">{value}</span>
                <span className="text-slate-500 text-sm">{label}</span>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
