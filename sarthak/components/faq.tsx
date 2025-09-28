'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of projects do you specialize in?',
    answer: 'We specialize in web development, mobile app development, ERP solutions, and API integrations. Our expertise spans across e-commerce platforms, enterprise applications, custom software solutions, and digital transformation projects for businesses of all sizes.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex web applications or ERP systems can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. We also provide 24/7 monitoring for critical business applications.'
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with five key phases: Discovery & Analysis, Strategy & Planning, Development & Testing, Launch & Deployment, and ongoing Support & Optimization. This ensures transparency, regular communication, and high-quality deliverables.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We have extensive experience integrating with existing systems, databases, and third-party services. We can modernize legacy systems, create APIs for system integration, and ensure seamless data migration without disrupting your current operations.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, Google Cloud), and various databases. We select the best technology stack based on your specific requirements and long-term goals.'
  },
  {
    question: 'How do you ensure project security?',
    answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with standards like GDPR, HIPAA, and SOC 2. All code undergoes thorough security reviews.'
  },
  {
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements during our free consultation.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally. We have experience managing projects across different time zones and have established communication processes to ensure smooth collaboration regardless of location.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain transparent communication through regular updates, scheduled meetings, project management tools, and dedicated project managers. You\'ll have real-time access to project progress and can communicate with our team whenever needed.'
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked <span className="text-teal-500">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-teal-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
         </div>
    </section>
  );
}