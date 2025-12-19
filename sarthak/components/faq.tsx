'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What does Bytesflare Infotech specialize in?',
    answer:
      'Bytesflare Infotech is a product-focused technology company building scalable mobile-first SaaS platforms using Flutter and Firebase. Our primary focus is real-time systems such as attendance management, ERP platforms, workforce tracking, and institutional digital solutions.'
  },
  {
    question: 'What kind of products do you build?',
    answer:
      'We build secure, cloud-based products including attendance systems, ERP modules, student and workforce management platforms, and custom enterprise applications. Our flagship product, BytesAttend, is designed for institutions and organizations that need real-time, reliable attendance and session tracking.'
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'We intentionally use a focused technology stack consisting only of Flutter for frontend development and Firebase for backend, database, authentication, and real-time infrastructure. This allows us to deliver faster, more reliable, and highly scalable products.'
  },
  {
    question: 'Why do you use only Flutter and Firebase?',
    answer:
      'By standardizing on Flutter and Firebase, we ensure consistency, performance, security, and faster development cycles. This focused stack enables real-time synchronization, offline support, strong security rules, and seamless scalability for thousands of users.'
  },
  {
    question: 'Is BytesAttend customizable for institutions or companies?',
    answer:
      'Yes. BytesAttend is designed as a modular product. Institutions and organizations can configure roles, permissions, attendance rules, session logic, and reporting without changing the core system.'
  },
  {
    question: 'Do you provide long-term support and updates?',
    answer:
      'Absolutely. We provide continuous product updates, performance improvements, security enhancements, and feature upgrades. Our systems are monitored and improved regularly to ensure reliability and long-term value.'
  },
  {
    question: 'How secure are your products?',
    answer:
      'Security is built into our architecture. We use Firebase Authentication, role-based access control, Firestore security rules, encrypted data storage, and audit-friendly data structures to ensure enterprise-grade protection.'
  },
  {
    question: 'Can your products scale for large institutions?',
    answer:
      'Yes. Our Flutter + Firebase architecture is designed to scale seamlessly from small teams to large institutions with thousands of concurrent users, real-time updates, and minimal latency.'
  },
  {
    question: 'Do you offer demos or pilot deployments?',
    answer:
      'Yes. We provide product demos and pilot deployments for institutions and organizations interested in evaluating BytesAttend or our upcoming platforms before full adoption.'
  },
  {
    question: 'Is Bytesflare Infotech a service company or product company?',
    answer:
      'Bytesflare Infotech is a product-driven company. Our primary focus is building, scaling, and continuously improving our own SaaS products rather than offering generic development services.'
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about Bytesflare Infotech and our
            Flutter-powered SaaS products.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/70 rounded-2xl overflow-hidden hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-100 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-teal-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-slate-300 leading-relaxed">
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
