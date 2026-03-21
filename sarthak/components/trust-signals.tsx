'use client';

import { GraduationCap, Building2, Users, CheckCircle2 } from 'lucide-react';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Colleges & Universities',
    desc: 'Multi-department setup with course, semester, and division-level attendance. NAAC/IQAC audit-ready reports with elective subject tracking.',
    tags: ['NAAC Compliant', 'Multi-Department', 'Elective Tracking'],
    color: 'teal',
  },
  {
    icon: Building2,
    title: 'Schools & Coaching',
    desc: 'Class-wise attendance with teacher oversight. Bulk student import via Excel. Parent-friendly transparency through student reports.',
    tags: ['Class-Wise', 'Bulk Import', 'Reports'],
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Enterprises & Training',
    desc: 'Role-based access control, location-bound session management, and secure cloud storage for workforce attendance tracking.',
    tags: ['Role-Based', 'Geo-Fenced', 'Secure Cloud'],
    color: 'blue',
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string; tag: string }> = {
  teal: { border: 'border-teal-500/20', bg: 'bg-teal-500/10', icon: 'text-teal-400', tag: 'bg-teal-500/10 border-teal-500/20 text-teal-300' },
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/10', icon: 'text-cyan-400', tag: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/10', icon: 'text-blue-400', tag: 'bg-blue-500/10 border-blue-500/20 text-blue-300' },
};

const outcomes = [
  'Near-zero proxy attendance with face verification + geo-fencing',
  'Automated daily session generation — no manual effort',
  'NAAC/IQAC audit-ready reports generated automatically',
  'Real-time attendance visibility for admins and teachers',
  'Bulk user management via Excel import',
  'Semester promotion with a single bulk action',
];

export function TrustSignals() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use Cases */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">Who It's For</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for every{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              institution type
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {useCases.map(({ icon: Icon, title, desc, tags, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl p-8 hover:bg-slate-900/80 transition-colors duration-300`}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed mb-5 text-sm">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className={`text-xs border rounded-full px-3 py-1 ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Outcomes */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 border border-white/10 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">What institutions get</h3>
            <p className="text-slate-400">Real outcomes from deploying BytesAttend</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div key={o} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
