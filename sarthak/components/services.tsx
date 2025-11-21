'use client';

import { useEffect, useRef } from 'react';
import { Code, Smartphone, Database, Link, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies, optimized for performance and user experience.',
    features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'Progressive Web Apps']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: Database,
    title: 'ERP Solutions',
    description: 'Comprehensive enterprise resource planning systems tailored to streamline your business processes and boost efficiency.',
    features: ['Custom ERP', 'Cloud Solutions', 'Data Migration', 'Process Automation']
  },
  {
    icon: Link,
    title: 'API Integration',
    description: 'Seamless integration of third-party services and APIs to enhance functionality and connect your systems.',
    features: ['REST & GraphQL', 'Payment Gateways', 'CRM Integration', 'Real-time Sync']
  }
];

export function Services() {
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

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We deliver comprehensive IT solutions that drive digital transformation 
            and accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card opacity-0 group hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-slate-900/70 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="text-sm text-slate-400 mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 shadow shadow-teal-400/40"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="group-hover:opacity-100 opacity-0 text-teal-300 font-semibold flex items-center justify-center transition-all duration-300 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}