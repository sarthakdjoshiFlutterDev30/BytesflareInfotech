'use client';

import { useEffect, useRef, useState } from 'react';
import { Building2, Users, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  { icon: Building2, value: 30, suffix: '+', label: 'Active Deployments', color: 'text-teal-400' },
  { icon: Users, value: 5000, suffix: '+', label: 'Students Tracked', color: 'text-cyan-400' },
  { icon: ShieldCheck, value: 99, suffix: '.9%', label: 'System Accuracy', color: 'text-blue-400' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Cloud Availability', color: 'text-violet-400' },
];

export function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((stat, i) => {
            let current = 0;
            const steps = 60;
            const inc = stat.value / steps;
            const timer = setInterval(() => {
              current += inc;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const next = [...prev];
                next[i] = Math.floor(current);
                return next;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={ref} className="py-20 bg-slate-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, suffix, label, color }, i) => (
            <div key={label} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-white/10 mb-4 mx-auto`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className="text-4xl font-bold text-white mb-1">
                {counters[i]}{suffix}
              </div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
