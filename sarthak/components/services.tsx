'use client';

import {
  QrCode,
  Brain,
  MapPin,
  BarChart3,
  Users,
  Shield,
  Bell,
  FileSpreadsheet,
  CalendarDays,
  Building2,
  GraduationCap,
  Smartphone,
} from 'lucide-react';

const webFeatures = [
  { icon: Building2, title: 'Multi-University Management', desc: 'Super Admin manages multiple universities, subscriptions, and global settings from one dashboard.' },
  { icon: Users, title: 'Role-Based Access', desc: 'Four distinct roles: Super Admin, University Admin (HOD), Teacher, and Student with isolated permissions.' },
  { icon: CalendarDays, title: 'Automated Session Generation', desc: 'Firebase Cloud Functions run daily at midnight to auto-generate sessions from timetables — no duplicates.' },
  { icon: QrCode, title: 'QR-Based Attendance', desc: 'Teachers generate unique QR codes per session. Students scan to mark attendance instantly.' },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Subject, semester, and monthly reports with PDF/Excel export. Attendance summaries with charts.' },
  { icon: FileSpreadsheet, title: 'Bulk Excel Import', desc: 'Add students and teachers in bulk via Excel templates. Firebase Auth accounts created automatically.' },
  { icon: GraduationCap, title: 'Elective Subject Tracking', desc: 'Supports elective enrollment per student with filtered attendance reports.' },
  { icon: Shield, title: 'Subscription Management', desc: 'Per-university subscription plans with expiry alerts, user limits, and deployment types.' },
];

const mobileFeatures = [
  { icon: Brain, title: 'AI Face Verification', desc: 'Liveness detection + anti-spoofing + face similarity matching via custom AI API and Google ML Kit.' },
  { icon: MapPin, title: 'GPS Geo-Fencing', desc: 'Attendance locked within 20m of the teacher\'s location. GPS + timestamp recorded per session.' },
  { icon: Smartphone, title: 'QR Scanner', desc: 'Students scan teacher-generated QR codes. Face verification runs before attendance is confirmed.' },
  { icon: Bell, title: 'Push Notifications', desc: 'Firebase FCM + local notifications + Text-to-Speech confirmations on successful attendance.' },
  { icon: BarChart3, title: 'Student Reports', desc: 'Subject-wise percentage, overall semester stats, today\'s attendance, and elective tracking.' },
  { icon: Shield, title: 'Re-Verification Policy', desc: 'Face re-verification required if app is inactive for more than 10 minutes — for both students and teachers.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              manage attendance
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            BytesAttend ships as a Web App (Flutter Web + Firebase) and a Mobile App (Flutter + AI) — two platforms, one unified system.
          </p>
        </div>

        {/* Web App */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Web App — Admin & Teacher Dashboard</h3>
            <span className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">Flutter Web + Firebase</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {webFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900/80 border border-white/10 rounded-xl p-5 hover:border-teal-500/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:from-teal-500/30 transition-colors">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Mobile App — Student & Teacher</h3>
            <span className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">Flutter + AI + Firebase</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobileFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900/80 border border-white/10 rounded-xl p-5 hover:border-cyan-500/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:from-cyan-500/30 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
