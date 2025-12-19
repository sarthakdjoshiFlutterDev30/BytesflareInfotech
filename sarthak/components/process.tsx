'use client';

import { useEffect, useRef } from 'react';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Problem Identification',
    description:
      'We identify real operational challenges through market insights, user behavior, and system gaps.',
    details: [
      'Industry research',
      'User pain-point analysis',
      'Operational gap identification',
      'Feasibility assessment',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description:
      'Defining a clear product vision, feature roadmap, and long-term scalability goals.',
    details: [
      'Product vision',
      'Feature prioritization',
      'System architecture planning',
      'Scalability strategy',
    ],
  },
  {
    icon: Code,
    title: 'Product Development',
    description:
      'Building secure, scalable, and high-performance platforms using modern technologies.',
    details: [
      'Modular development',
      'Secure architecture',
      'Performance optimization',
      'Continuous internal testing',
    ],
  },
  {
    icon: Rocket,
    title: 'Platform Launch',
    description:
      'Deploying the product on cloud infrastructure with reliability, monitoring, and stability.',
    details: [
      'Cloud deployment',
      'System monitoring',
      'Performance validation',
      'Production readiness',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Continuous Evolution',
    description:
      'Improving products continuously through analytics, feedback, and innovation.',
    details: [
      'Usage analytics',
      'Security updates',
      'Feature enhancements',
      'Long-term optimization',
    ],
  },
];

export function Process() {
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

    const steps = sectionRef.current?.querySelectorAll('.process-step');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Lifecycle</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A structured product-first approach that ensures reliability, scalability, and long-term value.
          </p>
        </div>

        <div className="relative">
          {/* Process timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 via-cyan-500 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.4)]"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step opacity-0 flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div
                    className={`bg-slate-900/70 border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-teal-500/30 transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {step.description}
                    </p>
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-400 flex items-center"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/40">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center shadow-md border border-white/20">
                    <span className="text-sm font-bold text-teal-300">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
