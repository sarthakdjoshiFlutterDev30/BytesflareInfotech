'use client';

import { useEffect, useRef } from 'react';
import { Smartphone, Database, Cloud, Cpu, Shield } from 'lucide-react';

// Bytesflare Infotech — Focused Flutter + Firebase Product Stack
const techCategories = [
  {
    icon: Smartphone,
    title: 'Frontend (Mobile & Web)',
    technologies: [
      'Flutter',
      'Flutter Web',
      'Material UI',
      'Cupertino UI',
      'Responsive Design'
    ]
  },
  {
    icon: Database,
    title: 'Backend & Database',
    technologies: [
      'Firebase',
      'Cloud Firestore',
      'Firebase Realtime Database',
      'Firebase Functions',
      'Firebase Storage'
    ]
  },
  {
    icon: Cloud,
    title: 'Authentication & Infrastructure',
    technologies: [
      'Firebase Authentication',
      'OTP & Phone Auth',
      'Email & Password Auth',
      'Role-Based Access Control',
      'Serverless Architecture'
    ]
  },
  {
    icon: Cpu,
    title: 'Real-Time Systems',
    technologies: [
      'QR Code Attendance',
      'Live Session Tracking',
      'Real-Time Sync',
      'Offline Support',
      'Instant Data Updates'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    technologies: [
      'Firestore Security Rules',
      'Encrypted Data Storage',
      'User Access Control',
      'Audit Logs',
      'Scalable Architecture'
    ]
  }
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.tech-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Technology Stack</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Bytesflare Infotech builds powerful, real-time, and scalable products
            using a focused Flutter & Firebase ecosystem.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-slate-900/70 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 border border-white/10 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow shadow-cyan-500/30">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-teal-200 rounded-full text-sm font-medium hover:bg-teal-500/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8 rounded-2xl text-white shadow-lg shadow-teal-500/30">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Built for Scale & Security</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our Flutter & Firebase architecture ensures real-time performance,
              enterprise-grade security, and effortless scalability for thousands
              of users.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
