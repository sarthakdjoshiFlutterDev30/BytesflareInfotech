'use client';

import { useEffect, useRef } from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';

const techCategories = [
  {
    icon: Code,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Database,
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'Java', 'PHP', 'C#', '.NET Core']
  },
  {
    icon: Database,
    title: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins']
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    technologies: ['React Native', 'Flutter']
  },
  {
    icon: Globe,
    title: 'Integration',
    technologies: ['REST APIs', 'GraphQL', 'Microservices', 'Webhooks', 'OAuth', 'JWT']
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Stack</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to build scalable, 
            secure, and high-performance solutions.
          </p>
        </div>

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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8 rounded-2xl text-white shadow-lg shadow-teal-500/30">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Security & Compliance First</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              All our solutions are built with enterprise-grade security, following industry standards 
              like GDPR, HIPAA, and SOC 2 compliance requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}