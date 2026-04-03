import React from 'react';
import { Cookie } from 'lucide-react';

const sections = [
  {
    title: '1. What Are Cookies?',
    content: [
      'Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners.',
      'Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device for a set period or until manually deleted).',
      'Similar technologies such as web beacons, pixels, and local storage may also be used alongside cookies for the same purposes described in this policy.',
    ],
  },
  {
    title: '2. Cookies We Use',
    content: [
      'Essential cookies: Required for the website and our platforms to function correctly. These include session management, authentication tokens, and security cookies. These cannot be disabled.',
      'Analytics cookies: We use tools such as Google Analytics to understand how visitors interact with our website — pages visited, time on site, referral sources, and device types. This data is aggregated and anonymized.',
      'Preference cookies: These remember your settings and preferences (e.g., language, region) to provide a more personalized experience on return visits.',
      'Performance cookies: Used to monitor platform performance, detect errors, and improve load times and reliability of our SaaS products.',
    ],
  },
  {
    title: '3. Third-Party Cookies',
    content: [
      'Some cookies on our website are set by third-party services we use, such as Google Analytics, Firebase, and embedded content providers.',
      'These third parties have their own privacy and cookie policies, which we encourage you to review.',
      'We do not control third-party cookies and are not responsible for their content or practices.',
      'We do not allow third-party advertising cookies on our website.',
    ],
  },
  {
    title: '4. How Long Cookies Last',
    content: [
      'Session cookies expire when you close your browser and are used for authentication and temporary state management.',
      'Persistent analytics cookies typically expire after 12–24 months, depending on the tool.',
      'Preference cookies are retained for up to 12 months or until you clear your browser data.',
      'You can view and manage cookie expiry dates through your browser\'s developer tools.',
    ],
  },
  {
    title: '5. Managing Your Cookie Preferences',
    content: [
      'You can control and manage cookies through your browser settings. Most browsers allow you to block, delete, or receive notifications about cookies.',
      'Chrome: Settings → Privacy and Security → Cookies and other site data.',
      'Firefox: Settings → Privacy & Security → Cookies and Site Data.',
      'Safari: Preferences → Privacy → Manage Website Data.',
      'Edge: Settings → Cookies and site permissions → Cookies and site data.',
      'Please note that disabling essential cookies may prevent certain features of our website and platforms from functioning correctly.',
    ],
  },
  {
    title: '6. Cookie Consent',
    content: [
      'When you first visit our website, you may be presented with a cookie consent banner allowing you to accept or decline non-essential cookies.',
      'Your consent preferences are stored and respected on subsequent visits.',
      'You may withdraw or update your consent at any time by clearing your browser cookies or adjusting your browser settings.',
      'Continued use of our website after dismissing the consent banner implies acceptance of essential cookies only.',
    ],
  },
  {
    title: '7. Do Not Track',
    content: [
      'Some browsers include a "Do Not Track" (DNT) feature that signals websites not to track your browsing activity.',
      'Our website currently does not respond to DNT signals, as there is no consistent industry standard for how to interpret them.',
      'We are committed to transparency and will update this policy if our practices change.',
    ],
  },
  {
    title: '8. Updates to This Policy',
    content: [
      'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices.',
      'Updated policies will be posted on this page with a revised effective date.',
      'We encourage you to review this policy periodically to stay informed about how we use cookies.',
    ],
  },
];

const CookiePolicy: React.FC = () => {
  return (
    <section className="py-16 bg-[#05081a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Cookie className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Cookie{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            This policy explains what cookies are, how Bytesflare Infotech uses them, and the choices you have regarding their use.
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
            <span className="text-white font-medium">Bytesflare Infotech</span> uses cookies and similar tracking technologies on our website and SaaS platforms. This Cookie Policy explains what these technologies are, why we use them, and your rights to control their use.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
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
        <div className="mt-8 bg-gradient-to-br from-blue-950/60 to-indigo-950/40 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            For questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <div className="text-slate-300">Bytesflare Infotech</div>
            <a href="mailto:bytesflareinfotechsales@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              bytesflareinfotechsales@gmail.com
            </a>
            <div className="text-slate-500">Bhavnagar, Gujarat, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
