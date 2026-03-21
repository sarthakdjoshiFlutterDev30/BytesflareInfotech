'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is BytesAttend?',
    a: 'BytesAttend is a cloud-based attendance management platform built for educational institutions. It combines a Flutter Web admin dashboard with a Flutter mobile app, powered by Firebase, to automate attendance tracking with QR codes, AI face verification, and GPS geo-fencing.',
  },
  {
    q: 'How does face verification work?',
    a: 'When a student marks attendance, the mobile app captures 2 face images 500ms apart. These are sent to a custom AI API that performs liveness detection, anti-spoofing checks, and face similarity matching. If verification fails, attendance is rejected. Re-verification is required if the app is inactive for more than 10 minutes.',
  },
  {
    q: 'What is the geo-fencing feature?',
    a: 'Attendance can only be marked within 20 meters of the teacher\'s GPS location. The system records GPS coordinates and a timestamp for every attendance entry, preventing remote or proxy marking.',
  },
  {
    q: 'How are sessions generated automatically?',
    a: 'A Firebase Cloud Function runs daily at midnight IST. It reads the configured weekly timetable and generates sessions for each course, semester, division, and subject. Deterministic session IDs prevent duplicate generation.',
  },
  {
    q: 'Does BytesAttend support multiple universities?',
    a: 'Yes. BytesAttend uses a multi-tenant architecture where each university has a unique code and fully isolated data. A Super Admin manages all universities, subscriptions, and global settings from a single platform.',
  },
  {
    q: 'What subscription plans are available?',
    a: 'Each university operates under a subscription plan that includes deployment type (Testing/Production), duration (15 days, 30 days, or 1–3 years), and a user limit. Subscription status is checked at login with expiry warnings shown in advance.',
  },
  {
    q: 'Can we export attendance reports?',
    a: 'Yes. BytesAttend supports export to both PDF and Excel. Reports include attendance summaries, subject-wise breakdowns, monthly reports, and semester reports — all in NAAC/IQAC audit-ready format.',
  },
  {
    q: 'How does bulk user import work?',
    a: 'Admins upload an Excel template with student or teacher data. The backend creates Firebase Authentication accounts and Firestore records in batch. This works for both individual and bulk additions.',
  },
  {
    q: 'Is BytesAttend NAAC compliant?',
    a: 'BytesAttend maintains attendance records in a consistent schema designed for NAAC/NBA audit requirements. Reports are generated automatically with the data structure needed for institutional accreditation.',
  },
  {
    q: 'What happens during maintenance?',
    a: 'Maintenance mode is controlled via Firestore and applies globally to all users in real time — no redeployment required. When active, all users see a maintenance screen on app launch.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Common{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Everything you need to know about BytesAttend.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180 text-teal-400' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-slate-400 leading-relaxed pt-4 text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
