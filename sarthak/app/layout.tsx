import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bytesflare Infotech',
  icons:'https://media.licdn.com/dms/image/v2/D4D0BAQFUe8m5d02Q-w/company-logo_200_200/B4DZih0WwyH4AI-/0/1755061515713?e=1761782400&v=beta&t=_0-_VaZpmgI_WctUBmcCSO3g90CEZqw9JDtydP2j9lk',
  description: 'Your trusted partner for web development, mobile apps, ERP solutions, and API integration. Transform your vision into cutting-edge digital solutions.',
  keywords: 'IT services, web development, mobile apps, ERP solutions, API integration, software development,mobile app development, web development, ERP solutions, Flutter development, MERN stack, digital transformation, Bytesflare Infotech,bytes,flare,inforech',
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
      <body>{children}</body>
    </html>
  );
}