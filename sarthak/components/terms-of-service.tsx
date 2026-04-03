import React from 'react';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using any service provided by Bytesflare Infotech — including our website and SaaS products such as BytesAttend — you agree to be bound by these Terms of Service.',
      'If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.',
      'If you do not agree to these terms, please discontinue use of our services immediately.',
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      'Bytesflare Infotech provides cloud-based SaaS platforms for institutional and enterprise use, including attendance management, identity verification, and analytics.',
      'BytesAttend is a smart attendance and verification platform supporting QR-based check-in, face verification, real-time dashboards, and role-based access control.',
      'We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.',
    ],
  },
  {
    title: '3. Account Responsibilities',
    content: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      'You must notify us immediately of any unauthorized use of your account or any other security breach.',
      'You agree to provide accurate, current, and complete information during registration and to keep it updated.',
      'Accounts may not be shared, transferred, or used by more than one individual without prior written consent.',
    ],
  },
  {
    title: '4. Acceptable Use',
    content: [
      'You agree to use our services only for lawful purposes and in accordance with these Terms.',
      'You must not use our services to collect, store, or process data in violation of applicable privacy laws.',
      'You must not attempt to gain unauthorized access to any part of our systems, networks, or data.',
      'You must not use our services to transmit malware, spam, or any harmful or disruptive content.',
      'You must not reverse-engineer, decompile, or attempt to extract the source code of our software.',
      'Violation of acceptable use policies may result in immediate account suspension or termination.',
    ],
  },
  {
    title: '5. Intellectual Property',
    content: [
      'All content, software, logos, trademarks, and designs associated with Bytesflare Infotech and its products are the exclusive property of Bytesflare Infotech.',
      'You are granted a limited, non-exclusive, non-transferable license to use our services as permitted under these Terms.',
      'You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.',
      'Any feedback, suggestions, or ideas you provide may be used by us without obligation or compensation.',
    ],
  },
  {
    title: '6. Data & Privacy',
    content: [
      'Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
      'You retain ownership of all data you input into our platforms. We process it solely to provide the contracted services.',
      'You are responsible for ensuring you have the legal right to collect and process any personal data (including biometric data) of your users through our platform.',
      'We implement industry-standard security measures to protect your data. See our Privacy Policy for details.',
    ],
  },
  {
    title: '7. Payment & Subscriptions',
    content: [
      'Paid plans are billed in advance on a monthly or annual basis as selected at the time of subscription.',
      'All fees are non-refundable except as required by applicable law or as explicitly stated in a separate agreement.',
      'We reserve the right to change pricing with 30 days\' notice. Continued use after the notice period constitutes acceptance.',
      'Failure to pay may result in suspension of services until outstanding amounts are settled.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Bytesflare Infotech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
      'Our total liability for any claim arising from these Terms or use of our services shall not exceed the amount paid by you in the 3 months preceding the claim.',
      'We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components.',
      'We are not responsible for any loss of data, revenue, or business opportunity arising from service downtime or technical issues.',
    ],
  },
  {
    title: '9. Termination',
    content: [
      'Either party may terminate the agreement with 30 days\' written notice.',
      'We may terminate or suspend your access immediately if you breach these Terms or engage in conduct harmful to our platform or other users.',
      'Upon termination, your right to use our services ceases immediately. You may request an export of your data within 30 days of termination.',
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      'These Terms are governed by the laws of India, without regard to conflict of law principles.',
      'Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.',
      'We encourage resolution of disputes through good-faith negotiation before pursuing legal action.',
    ],
  },
];

const TermsOfService: React.FC = () => {
  return (
    <section className="py-16 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Terms of{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Please read these terms carefully before using any Bytesflare Infotech service. They govern your access to and use of our platforms.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-600 font-mono">
            <span>Effective: January 1, 2024</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>Last updated: April 2025</span>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 mb-8">
          <p className="text-slate-300 leading-relaxed text-sm">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and <span className="text-white font-medium">Bytesflare Infotech</span> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These Terms govern your access to and use of our website, products, and services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/20 transition-colors duration-300">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                {title}
              </h2>
              <ul className="space-y-2.5">
                {content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gradient-to-br from-violet-950/60 to-purple-950/40 border border-violet-500/20 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For questions about these Terms of Service, please reach out to us:
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <div className="text-slate-300">Bytesflare Infotech</div>
            <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">
              bytesflareinfotechsales@gmail.com
            </a>
            <div className="text-slate-500">Bhavnagar, Gujarat, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
