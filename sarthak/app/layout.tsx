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
    'IT services, web development, mobile apps, ERP solutions, API integration, software development,mobile app development, web development, ERP solutions, Flutter development, MERN stack, digital transformation, Bytesflare Infotech,bytes,flare,inforech',
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
    <html lang="en" className="scroll-smooth">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NWCMPVT5');
        `}
      </Script>
      <body>
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