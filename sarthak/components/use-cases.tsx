
'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Building2, Monitor } from 'lucide-react';

const cases = [
  { icon: GraduationCap, title: 'Universities',             desc: 'Multi-department, multi-semester attendance with NAAC-ready reports and role-based access for HODs, teachers, and students.', shadowColor: '99,102,241',  borderHover: 'hover:border-indigo-500/30', iconBg: 'bg-indigo-500/15', iconColor: 'text-indigo-400', tag: 'Education'  },
  { icon: BookOpen,       title: 'Coaching Institutes',      desc: 'Track batch-wise attendance, manage multiple courses, and send instant notifications to students and parents.',                  shadowColor: '139,92,246',  borderHover: 'hover:border-violet-500/30', iconBg: 'bg-violet-500/15', iconColor: 'text-violet-400', tag: 'Training'   },
  { icon: Building2,      title: 'Corporate Offices',        desc: 'Employee check-in with face verification and geo-fencing. Real-time HR dashboards and automated monthly reports.',               shadowColor: '168,85,247',  borderHover: 'hover:border-purple-500/30', iconBg: 'bg-purple-500/15', iconColor: 'text-purple-400', tag: 'Enterprise' },
  { icon: Monitor,        title: 'Online Interview Platforms', desc: 'Verify candidate identity and presence during remote interviews with liveness detection and anti-spoofing technology.',       shadowColor: '59,130,246',  borderHover: 'hover:border-blue-500/30',   iconBg: 'bg-blue-500/15',   iconColor: 'text-blue-400',   tag: 'Remote'     },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-28 bg-[#07091e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
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
            <span className="text-violet-300 text-sm font-medium">Use Cases</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for every{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              institution type
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you run a university, coaching center, or corporate office — our platforms adapt to your workflow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map(({ icon: Icon, title, desc, shadowColor, borderHover, iconBg, iconColor, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotateY: 4, transition: { duration: 0.25 } }}
              style={{ transformStyle: 'preserve-3d', perspective: 600 }}
              className={`group bg-white/[0.03] border border-white/[0.07] ${borderHover} rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.05] cursor-default`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 20px rgba(${shadowColor},0.2)` }}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
