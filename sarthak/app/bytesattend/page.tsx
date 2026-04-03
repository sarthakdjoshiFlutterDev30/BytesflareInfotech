import React from 'react';
import {
  QrCode, Brain, MapPin, BarChart3, Users, Shield, Bell,
  FileSpreadsheet, CalendarDays, Building2, GraduationCap,
  Smartphone, CheckCircle2, ArrowRight, FileText, Clock,
  Database, Cloud, Zap, Lock, RefreshCw,
} from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { FAQ } from '@/components/faq';
import { Button } from '@/components/ui/button';

export default function BytesAttendPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">Cloud-Based Attendance Management Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              BytesAttend
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
            Smart, Secure, NAAC-Compliant Attendance
          </p>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Replace manual registers with a cloud-based, AI-powered attendance system.
            QR codes, face verification, GPS geo-fencing, and automated reports — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-ba">
              <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-6 rounded-xl text-base font-semibold transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+918799196162">
              <Button className="border border-white/10 bg-transparent text-white hover:bg-white/5 px-8 py-6 rounded-xl text-base transition-all hover:border-teal-500/30">
                Call +91-8799196162
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '4', label: 'User Roles' },
            { value: '2', label: 'Platforms (Web + Mobile)' },
            { value: '20m', label: 'Geo-Fence Radius' },
            { value: '99.9%', label: 'System Accuracy' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-teal-400 mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Four Roles, One Platform</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every stakeholder has a purpose-built experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, role: 'Super Admin (University Admin )', desc: 'Platform-level control — manages universities, subscriptions, and global settings.', color: 'violet' },
              { icon: Building2, role: 'Admin (HOD)', desc: 'Manages courses, users, subjects, timetables, and reports within a university.', color: 'teal' },
              { icon: Users, role: 'Teacher', desc: 'Creates sessions, generates QR codes, marks attendance, and manages assigned students.', color: 'cyan' },
              { icon: GraduationCap, role: 'Student', desc: 'Views attendance summaries, subject reports, and marks attendance via mobile app.', color: 'blue' },
            ].map(({ icon: Icon, role, desc, color }) => (
              <div key={role} className={`bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-${color}-500/30 transition-colors`}>
                <div className={`w-11 h-11 bg-${color}-500/10 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 text-${color}-400`} />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{role}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web App Features */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center">
              <Cloud className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Web App</h2>
              <p className="text-slate-400 text-sm">Flutter Web + Firebase — Admin & Teacher Dashboard</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: 'University Onboarding', desc: 'Super Admin creates universities with unique codes, sets subscription plans, duration, and user limits.' },
              { icon: GraduationCap, title: 'Student Management', desc: 'Add students individually or bulk via Excel. Change semester, view profiles, search and filter.' },
              { icon: Users, title: 'Teacher Management', desc: 'Add teachers and HODs individually or in bulk. View profiles, update details, assign subjects.' },
              { icon: CalendarDays, title: 'Timetable Configuration', desc: 'Configure weekly timetable, map time slots to lecture numbers. Used for automated session generation.' },
              { icon: QrCode, title: 'Session Management', desc: 'Manual session creation with QR code. Auto-generation via Cloud Functions. Deterministic IDs prevent duplicates.' },
              { icon: FileSpreadsheet, title: 'Attendance Management', desc: 'View and edit attendance per session or date. Teacher attendance screen. Stored per student per session.' },
              { icon: BarChart3, title: 'Reports & Export', desc: 'Attendance summary, subject report with charts, semester report, monthly report. Export to PDF and Excel.' },
              { icon: Shield, title: 'Subscription Control', desc: 'Testing/Production deployment types. 15 days to 3 years duration. User limits enforced at login.' },
              { icon: Zap, title: 'Maintenance Mode', desc: 'Controlled via Firestore. Applies globally in real time. No redeployment required.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900/60 border border-white/10 rounded-xl p-5 hover:border-teal-500/20 transition-colors group">
                <div className="w-9 h-9 bg-teal-500/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Mobile App</h2>
              <p className="text-slate-400 text-sm">Flutter (Android & iOS) + AI + Firebase</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Student Module */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-teal-400" />
                <h3 className="text-white font-bold">Student Module</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: QrCode, title: 'Mark Attendance', desc: 'Scan QR → capture 2 face images → liveness + anti-spoofing + face match → attendance saved with GPS + timestamp.' },
                  { icon: BarChart3, title: 'Attendance Summary', desc: 'Subject-wise percentage, overall semester stats, today\'s attendance, and elective tracking.' },
                  { icon: FileText, title: 'Reports', desc: 'Subject report, monthly report, and semester report with charts.' },
                  { icon: FileSpreadsheet, title: 'Projects', desc: 'Upload and manage project submissions. Firebase Storage integration with URL launcher.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teacher Module */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-bold">Teacher Module</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: QrCode, title: 'Create Session', desc: 'Select semester & division → fetch GPS → generate unique QR → display for students → monitor real-time.' },
                  { icon: BarChart3, title: 'Attendance Management', desc: 'Attendance list with timestamps. Class-level attendance summary and statistics.' },
                  { icon: Users, title: 'Student Management', desc: 'View all students, access individual profiles and attendance records.' },
                  { icon: RefreshCw, title: 'Face Re-Verification', desc: 'Required on login and if app is inactive for more than 10 minutes. Applies to both students and teachers.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Face Verification Deep Dive */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Face Verification System
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Multi-layer verification ensures only the real student marks attendance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {[
                { step: '1', title: 'Camera Activation', desc: 'Camera activates during attendance marking or when app resumes after 10+ minutes of inactivity.' },
                { step: '2', title: 'Face Detection', desc: 'Google ML Kit performs on-device face detection to locate and frame the face.' },
                { step: '3', title: 'Dual Frame Capture', desc: 'Two face images captured 500ms apart to ensure a live, real-time subject.' },
                { step: '4', title: 'AI API Verification', desc: 'Images sent to custom AI API for liveness detection, anti-spoofing, and face similarity matching.' },
                { step: '5', title: 'Score & Decision', desc: 'API returns a similarity score. If below threshold, attendance is rejected. If passed, saved to Firestore.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-8 h-8 bg-violet-500/20 border border-violet-500/30 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400 font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm mb-0.5">{title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8">
              <Brain className="w-10 h-10 text-violet-400 mb-6" />
              <h3 className="text-white font-bold text-lg mb-4">What the AI checks</h3>
              <div className="space-y-3">
                {[
                  { label: 'Liveness Detection', desc: 'Confirms the subject is a real, live person — not a photo or video.' },
                  { label: 'Anti-Spoofing', desc: 'Detects and rejects attempts to use printed photos, screens, or masks.' },
                  { label: 'Face Similarity', desc: 'Matches the captured face against the registered profile photo.' },
                  { label: 'Re-Verification', desc: 'Triggered automatically after 10 minutes of app inactivity.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white text-sm font-medium">{label}</span>
                      <span className="text-slate-400 text-xs ml-2">— {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Attendance in 3 Steps</h2>
            <p className="text-slate-400">From session creation to verified attendance record.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: QrCode, title: 'Teacher Creates Session', desc: 'Teacher opens the app, selects semester & division, fetches GPS location, and generates a unique QR code.' },
              { step: '02', icon: Brain, title: 'Student Scans & Verifies', desc: 'Student scans the QR code, completes face verification (liveness + anti-spoofing + match), and confirms location.' },
              { step: '03', icon: BarChart3, title: 'Attendance Saved', desc: 'Attendance stored in Firestore with GPS coordinates, timestamp, and face verification status. Reports auto-update.' },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-teal-400/40 font-bold text-5xl mb-4">{step}</div>
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscription Plans</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Each university gets its own subscription with configurable deployment type (Testing/Production),
              duration (15 days to 3 years), and user limits. Contact us for pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Testing Deployment', 'Production Deployment', '15 Days – 3 Years', 'Custom User Limits'].map((t) => (
                <span key={t} className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-300 px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="text-2xl font-bold text-teal-400 mb-6">Contact for Pricing</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-ba">
                <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-6 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                  Request a Demo
                </Button>
              </a>
              <a href="tel:+918799196162">
                <Button className="border border-white/10 bg-transparent text-white hover:bg-white/5 px-8 py-6 rounded-xl transition-all">
                  +91-8799196162
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Contact */}
      <section id="contact-ba" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-slate-400 mb-8">
            Request a demo and see BytesAttend in action for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:bytesflareinfotechsales@gmail.com">
              <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-6 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                bytesflareinfotechsales@gmail.com
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/bytesattend/privacy-policy" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <Shield className="w-4 h-4" /> Privacy Policy
            </a>
            <a href="/bytesattend/terms-of-use" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <FileText className="w-4 h-4" /> Terms of Use
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
