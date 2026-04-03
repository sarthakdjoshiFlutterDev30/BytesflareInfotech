import React from 'react';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'Personal identification information: name, email address, phone number, and institution/organization name provided when you contact us or request a demo.',
      'Usage data: pages visited, time spent, browser type, device information, and IP address collected automatically via analytics tools.',
      'Attendance data processed through BytesAttend: biometric identifiers (face scan data), QR scan logs, session timestamps, and location metadata — collected only on behalf of the institution operating the platform.',
      'Communication records: messages sent through our contact form or email.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To provide, operate, and improve our SaaS platforms and services.',
      'To respond to inquiries, schedule demos, and communicate about your account.',
      'To send service-related notifications, product updates, and security alerts.',
      'To analyze usage patterns and improve platform performance and user experience.',
      'To comply with applicable laws, regulations, and legal obligations.',
      'To detect, prevent, and address technical issues or fraudulent activity.',
    ],
  },
  {
    title: '3. Data Storage & Security',
    content: [
      'All data is stored on secure cloud infrastructure (AWS / Firebase) with encryption at rest (AES-256) and in transit (TLS 1.3).',
      'Access to personal data is restricted to authorized personnel only, under strict confidentiality obligations.',
      'Biometric data processed by BytesAttend is stored in hashed/encrypted form and is never sold or shared with third parties.',
      'We conduct regular security audits and vulnerability assessments to maintain platform integrity.',
    ],
  },
  {
    title: '4. Data Sharing',
    content: [
      'We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
      'We may share data with trusted service providers (cloud hosting, analytics) solely to operate our services, under strict data processing agreements.',
      'We may disclose information if required by law, court order, or government authority.',
      'In the event of a merger or acquisition, user data may be transferred as part of business assets, with prior notice provided.',
    ],
  },
  {
    title: '5. Cookies & Tracking',
    content: [
      'We use essential cookies to maintain session state and platform functionality.',
      'Analytics cookies (e.g., Google Analytics) help us understand how visitors interact with our website.',
      'You can manage or disable cookies through your browser settings. Disabling certain cookies may affect website functionality.',
      'We do not use cookies to collect sensitive personal information without explicit consent.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'Right to access: you may request a copy of the personal data we hold about you.',
      'Right to rectification: you may request correction of inaccurate or incomplete data.',
      'Right to erasure: you may request deletion of your personal data, subject to legal retention requirements.',
      'Right to restrict processing: you may request that we limit how we use your data.',
      'Right to data portability: you may request your data in a structured, machine-readable format.',
      'To exercise any of these rights, contact us at bytesflareinfotechsales@gmail.com.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain personal data only as long as necessary to provide our services or as required by law.',
      'Attendance records are retained per the institution\'s configured retention policy within BytesAttend.',
      'Contact form submissions are retained for up to 24 months for business correspondence purposes.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children.',
      'If you believe a child has provided us with personal information, please contact us immediately and we will delete it.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
      'We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-16 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Bytesflare Infotech is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
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
            This Privacy Policy applies to all services provided by <span className="text-white font-medium">Bytesflare Infotech</span>, including our website at bytesflareinfotech.com and our SaaS products including BytesAttend. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
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
        <div className="mt-8 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 border border-indigo-500/20 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <div className="text-slate-300">Bytesflare Infotech</div>
            <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              bytesflareinfotechsales@gmail.com
            </a>
            <div className="text-slate-500">Bhavnagar, Gujarat, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
