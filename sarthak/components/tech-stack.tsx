'use client';

const stack = [
  {
    category: 'Frontend',
    color: 'teal',
    items: [
      { name: 'Flutter Web', desc: 'Web admin & teacher dashboard' },
      { name: 'Flutter Mobile', desc: 'Android & iOS student/teacher app' },
      { name: 'Material UI', desc: 'Consistent design system' },
    ],
  },
  {
    category: 'Backend & Database',
    color: 'cyan',
    items: [
      { name: 'Firebase Firestore', desc: 'Real-time NoSQL database' },
      { name: 'Firebase Auth', desc: 'Email/password authentication' },
      { name: 'Cloud Functions', desc: 'Node.js scheduled jobs (midnight IST)' },
    ],
  },
  {
    category: 'AI & Verification',
    color: 'blue',
    items: [
      { name: 'Custom AI API', desc: 'Liveness detection + anti-spoofing' },
      { name: 'Google ML Kit', desc: 'On-device face detection' },
      { name: 'Face Matching', desc: 'Similarity score verification' },
    ],
  },
  {
    category: 'Infrastructure',
    color: 'violet',
    items: [
      { name: 'Firebase Hosting', desc: 'Web app deployment' },
      { name: 'Firebase Storage', desc: 'Profile photos & project files' },
      { name: 'Remote Config', desc: 'Feature flags & API endpoint control' },
    ],
  },
  {
    category: 'Device & Notifications',
    color: 'amber',
    items: [
      { name: 'GPS / Geolocation', desc: '20m geo-fencing per session' },
      { name: 'Firebase FCM', desc: 'Push notifications' },
      { name: 'Text-to-Speech', desc: 'Audio attendance confirmation' },
    ],
  },
  {
    category: 'Export & Compliance',
    color: 'emerald',
    items: [
      { name: 'Excel (.xlsx)', desc: 'Bulk import & report export' },
      { name: 'PDF Export', desc: 'Attendance reports & summaries' },
      { name: 'NAAC/IQAC Ready', desc: 'Audit-friendly data schema' },
    ],
  },
];

const colorMap: Record<string, string> = {
  teal: 'border-teal-500/20 bg-teal-500/5 text-teal-400',
  cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400',
  blue: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
  violet: 'border-violet-500/20 bg-violet-500/5 text-violet-400',
  amber: 'border-amber-500/20 bg-amber-500/5 text-amber-400',
  emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
};

export function TechStack() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on a{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              focused stack
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Flutter + Firebase at the core, with AI verification, GPS tracking, and cloud-native infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map(({ category, color, items }) => (
            <div
              key={category}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
            >
              <div className={`inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-semibold mb-5 ${colorMap[color]}`}>
                {category}
              </div>
              <div className="space-y-3">
                {items.map(({ name, desc }) => (
                  <div key={name} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-white text-sm font-medium">{name}</span>
                      <span className="text-slate-500 text-xs ml-2">— {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
