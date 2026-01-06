import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Logo from '@/app/Logo.png';

export const metadata: Metadata = {
  title: 'Bytesflare Infotech',
  icons: {
    icon: Logo.src,
    shortcut: Logo.src,
    apple: Logo.src,
  },
  description:
    'Your trusted partner for web development, mobile apps, ERP solutions, and API integration. Transform your vision into cutting-edge digital solutions.',
  keywords:
    'IT services, web development, mobile apps, ERP solutions, API integration, software development,mobile app development, web development, ERP solutions, Flutter development, MERN stack, digital transformation, Bytesflare Infotech,bytes,flare,inforech,BytesAttend, digital attendance system, face recognition attendance, biometric attendance, automatic attendance, geo-fencing attendance, NAAC compliant attendance, IQAC attendance solution, school attendance app, college attendance software, employee attendance tracker, online attendance solution, secure attendance app, attendance management system, mobile attendance app, premium attendance software, attendance automation, educational institution attendance, smart attendance system, facial verification attendance',
  verification: {
    google: 'Nr6_ejgGp7gXH4ioPH-4mEeOi0QpgswRPJYF_y3PBOI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NWCMPVT5');
        `}
      </Script>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWCMPVT5"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}