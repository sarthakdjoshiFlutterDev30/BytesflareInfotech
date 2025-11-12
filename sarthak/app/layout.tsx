import './globals.css';
import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}