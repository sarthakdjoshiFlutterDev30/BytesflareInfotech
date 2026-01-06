import React from "react";
import { UserCheck, MapPin, Cloud, Shield, FileText, GraduationCap, Building2, Users, Bell, BarChart3, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/faq";

const Page: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white font-sans">
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-950 opacity-90" />
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Revolutionize Attendance with <span className="gradient-text">BytesAttend</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-8 animate-fade-in-up">
          Secure, digital, and NAAC-compliant attendance solution
        </p>
        <a href="#contact" className="animate-fade-in-up">
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(20,184,166,0.35)] transition-transform hover:scale-105">
            Request a Demo
          </Button>
        </a>
      </section>

      <section className="px-6 md:px-20 py-20 bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
          Premium Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(3,255,255,0.07)]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 flex items-center justify-center mb-4">
                <UserCheck className="text-fuchsia-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Face Verification</h3>
              <ul className="text-slate-300 mb-4 space-y-1">
                <li>Biometric authentication using facial recognition</li>
                <li>Anti-proxy checks to prevent impersonation</li>
                <li>Real-time face detection & validation</li>
                <li>Encrypted, secure face data handling</li>
              </ul>
              <p className="text-teal-400 font-semibold">
                ✅ Authentic, audit-ready records compliant with NAAC/NBA
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(3,255,255,0.07)]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-teal-500/30 flex items-center justify-center mb-4">
                <MapPin className="text-cyan-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">20m Geo-Fencing Lock</h3>
              <ul className="text-slate-300 mb-4 space-y-1">
                <li>Location-based attendance within 20 meters</li>
                <li>GPS validation on each attendance mark</li>
                <li>Lock prevents outside-area logging</li>
                <li>Admin alerts for out-of-zone attempts</li>
              </ul>
              <p className="text-teal-400 font-semibold">✅ Eliminates proxy attendance</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(3,255,255,0.07)]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 flex items-center justify-center mb-4">
                <Cloud className="text-indigo-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital & Secure Attendance</h3>
              <ul className="text-slate-300 mb-4 space-y-1">
                <li>Tamper-proof cloud storage</li>
                <li>Real-time reporting</li>
                <li>Intuitive admin & teacher dashboards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(3,255,255,0.07)]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center mb-4">
                <FileText className="text-teal-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">NAAC / IQAC Compliance</h3>
              <p className="text-slate-300">
                Maintains records in NAAC/NBA audit-ready format with consistent schema.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-[0_0_25px_rgba(3,255,255,0.07)]">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 flex items-center justify-center mb-4">
                <Shield className="text-cyan-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud-Based Access</h3>
              <p className="text-slate-300">Access secure attendance records anywhere, anytime.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Outcomes for Institutions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-slate-900/70 border border-white/10 hover:border-teal-400/30 transition-colors shadow-[0_0_25px_rgba(20,184,166,0.12)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/25 to-cyan-500/25 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-teal-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proxy-Free Attendance</h3>
                <p className="text-slate-300">Face verification and geo-fencing ensure authentic presence.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/70 border border-white/10 hover:border-indigo-400/30 transition-colors shadow-[0_0_25px_rgba(99,102,241,0.12)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 flex items-center justify-center mb-4">
                  <BarChart3 className="text-indigo-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">NAAC-Ready Reports</h3>
                <p className="text-slate-300">Audit-friendly records generated automatically with consistent schema.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/70 border border-white/10 hover:border-amber-400/30 transition-colors shadow-[0_0_25px_rgba(245,158,11,0.12)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400/25 to-orange-400/25 flex items-center justify-center mb-4">
                  <Bell className="text-amber-200" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Alerts</h3>
                <p className="text-slate-300">Instant notifications for out-of-zone attempts and attendance status.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/70 border border-white/10 hover:border-cyan-400/30 transition-colors shadow-[0_0_25px_rgba(6,182,212,0.12)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/25 to-teal-500/25 flex items-center justify-center mb-4">
                  <Users className="text-cyan-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Centralized Dashboard</h3>
                <p className="text-slate-300">Unified view for admins and teachers with real-time insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Built for Your Context
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-slate-900/70 border border-white/10 hover:border-teal-400/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/25 to-cyan-500/25 flex items-center justify-center mb-4">
                  <GraduationCap className="text-teal-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Colleges & Universities</h3>
                <p className="text-slate-300">Department-level sessions, audit-ready records, program-wise analytics.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/70 border border-white/10 hover:border-indigo-400/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 flex items-center justify-center mb-4">
                  <Building2 className="text-indigo-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schools & Coaching</h3>
                <p className="text-slate-300">Class-wise attendance, staff oversight, guardian-friendly transparency.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/70 border border-white/10 hover:border-cyan-400/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/25 to-teal-500/25 flex items-center justify-center mb-4">
                  <Shield className="text-cyan-300" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enterprises & Training</h3>
                <p className="text-slate-300">Role-based access, secure storage, location-bound session control.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-xl shadow-md mb-6">
              <h3 className="font-semibold mb-2">Step 1</h3>
              <p>Teacher sets up session/class location in the system</p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-xl shadow-md mb-6">
              <h3 className="font-semibold mb-2">Step 2</h3>
              <p>Students’ attendance is automatically marked within 20 meters</p>
            </div>
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Step 3</h3>
              <p>Automatic report generation & NAAC-ready data</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
              <svg viewBox="0 0 400 240" className="w-full h-64">
                <defs>
                  <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="120" r="90" fill="url(#ringGrad)" stroke="#22d3ee" strokeOpacity="0.2" />
                <circle cx="200" cy="120" r="60" fill="none" stroke="#94a3b8" strokeDasharray="6 6" strokeOpacity="0.4" />
                <circle cx="200" cy="120" r="30" fill="none" stroke="#22c55e" strokeDasharray="4 4" strokeOpacity="0.5" />
                <text x="200" y="30" textAnchor="middle" className="fill-teal-300 text-sm">Teacher Location</text>
                <text x="200" y="220" textAnchor="middle" className="fill-slate-300 text-sm">20m Radius → Auto Attendance</text>
                <circle cx="200" cy="120" r="8" fill="#22c55e" />
                <circle cx="140" cy="120" r="5" fill="#93c5fd" />
                <circle cx="260" cy="120" r="5" fill="#93c5fd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 text-center bg-slate-950">
        <div className="max-w-3xl mx-auto rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Pricing
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
            ₹365 + Applicable GST Per User Per Year
          </p>
          <a href="#contact">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(20,184,166,0.35)] transition-transform hover:scale-105">
              Get Started Now
            </Button>
          </a>
        </div>
      </section>

      <FAQ />

      <section className="px-6 md:px-20 py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_35px_rgba(20,184,166,0.12)]">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Attendance?</h3>
            <p className="text-slate-300 mb-6">
              Request a demo and see how BytesAttend delivers authentic, digital-first, NAAC-compliant attendance for your institution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact">
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-6 py-6 rounded-xl shadow-[0_0_30px_rgba(20,184,166,0.35)]">
                  Request a Demo
                </Button>
              </a>
              <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-teal-300 hover:text-teal-200 transition-colors">
                bytesflareinfotechsales@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-slate-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Bytesflare Infotech</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Bytesflare Infotech builds premium, secure, and scalable digital products for educational institutions and enterprises. BytesAttend is our flagship product—delivering authentic, tamper-proof, and NAAC-compliant attendance with modern, cloud-first architecture.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
