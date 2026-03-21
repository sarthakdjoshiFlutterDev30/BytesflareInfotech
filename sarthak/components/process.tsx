'use client';

const steps = [
  {
    step: '01',
    title: 'University Onboarding',
    desc: 'Super Admin creates a university with a unique code, sets subscription plan, duration, and user limits. University Admin logs in with provided credentials.',
    tags: ['Unique University Code', 'Subscription Plans', 'User Limits'],
  },
  {
    step: '02',
    title: 'Course & Timetable Setup',
    desc: 'Add colleges, configure courses, semesters, and specializations. Add subjects (regular + elective), assign teachers, and define the weekly timetable.',
    tags: ['Colleges', 'Subjects', 'Timetable', 'Electives'],
  },
  {
    step: '03',
    title: 'Automated Session Generation',
    desc: 'Firebase Cloud Functions run daily at midnight (IST). Sessions are auto-generated from the timetable covering course, semester, division, and subject. Deterministic IDs prevent duplicates.',
    tags: ['Cloud Functions', 'Daily Automation', 'No Duplicates'],
  },
  {
    step: '04',
    title: 'Attendance Marking',
    desc: 'Teacher opens a session and a QR code is generated. Students scan via the mobile app, complete face verification (liveness + anti-spoofing), and attendance is saved with GPS + timestamp.',
    tags: ['QR Code', 'Face Verification', 'GPS Tracking'],
  },
  {
    step: '05',
    title: 'Reports & Promotion',
    desc: 'Admins and students view attendance summaries, subject reports, and monthly breakdowns. Export to PDF or Excel. Bulk semester promotion handled separately for final-semester students.',
    tags: ['PDF Export', 'Excel Export', 'Semester Promotion'],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            From onboarding to{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              automated reports
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            BytesAttend handles the full lifecycle — setup, session generation, attendance marking, and reporting.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-cyan-500/30 to-transparent hidden lg:block" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="relative flex gap-8 items-start group">
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-slate-900 border border-teal-500/30 rounded-2xl flex items-center justify-center group-hover:border-teal-500/60 transition-colors hidden lg:flex">
                  <span className="text-teal-400 font-bold text-lg">{s.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-teal-500/20 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider lg:hidden">Step {s.step}</span>
                      <h3 className="text-white font-bold text-xl">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-teal-500/10 border border-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
