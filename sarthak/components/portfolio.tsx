'use client';

import { QrCode, Brain, MapPin, BarChart3, Users, Shield, CalendarDays, FileSpreadsheet, ArrowRight } from 'lucide-react';

const modules = [
  {
    icon: QrCode,
    title: 'QR Attendance System',
    desc: 'Teachers generate unique QR codes per session. Students scan via mobile app. Manual marking also supported.',
    color: 'teal',
  },
  {
    icon: Brain,
    title: 'AI Face Verification',
    desc: 'Liveness detection, anti-spoofing, and face similarity matching via custom AI API + Google ML Kit.',
    color: 'violet',
  },
  {
    icon: MapPin,
    title: 'GPS Geo-Fencing',
    desc: 'Attendance locked within 20m of teacher location. GPS coordinates and timestamp stored per record.',
    color: 'cyan',
  },
  {
    icon: CalendarDays,
    title: 'Auto Session Generation',
    desc: 'Cloud Functions run daily at midnight IST, reading timetables to generate sessions with deterministic IDs.',
    color: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    desc: 'Subject, semester, and monthly reports. Attendance percentage per student. Export to PDF and Excel.',
    color: 'amber',
  },
  {
    icon: Users,
    title: 'Multi-Role Management',
    desc: 'Super Admin, HOD, Teacher, and Student roles with isolated data per university in a multi-tenant setup.',
    color: 'emerald',
  },
  {
    icon: FileSpreadsheet,
    title: 'Bulk Excel Import',
    desc: 'Upload students and teachers via Excel templates. Firebase Auth accounts created in batch automatically.',
    color: 'pink',
  },
  {
    icon: Shield,
    title: 'Subscription & Maintenance',
    desc: 'Per-university subscription plans with expiry enforcement. Real-time maintenance mode via Firestore.',
    color: 'indigo',
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string }> = {
  teal:    { border: 'hover:border-teal-500/40',    bg: 'bg-teal-500/10',    icon: 'text-teal-400' },
  violet:  { border: 'hover:border-violet-500/40',  bg: 'bg-violet-500/10',  icon: 'text-violet-400' },
  cyan:    { border: 'hover:border-cyan-500/40',    bg: 'bg-cyan-500/10',    icon: 'text-cyan-400' },
  blue:    { border: 'hover:border-blue-500/40',    bg: 'bg-blue-500/10',    icon: 'text-blue-400' },
  amber:   { border: 'hover:border-amber-500/40',   bg: 'bg-amber-500/10',   icon: 'text-amber-400' },
  emerald: { border: 'hover:border-emerald-500/40', bg: 'bg-emerald-500/10', icon: 'text-emerald-400' },
  pink:    { border: 'hover:border-pink-500/40',    bg: 'bg-pink-500/10',    icon: 'text-pink-400' },
  indigo:  { border: 'hover:border-indigo-500/40',  bg: 'bg-indigo-500/10',  icon: 'text-indigo-400' },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">BytesAttend Modules</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A complete{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              attendance ecosystem
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every module is purpose-built for educational institutions — from session creation to NAAC-ready reports.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map(({ icon: Icon, title, desc, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-slate-900/60 border border-white/10 rounded-2xl p-6 transition-all duration-300 ${c.border} group`}
              >
                <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/bytesattend"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors group"
          >
            View full BytesAttend product page
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
