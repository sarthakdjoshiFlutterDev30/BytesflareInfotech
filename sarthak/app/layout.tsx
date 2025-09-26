import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bytesflare Infotech - Engineering Digital Excellence',
  description: 'Your trusted partner for web development, mobile apps, ERP solutions, and API integration. Transform your vision into cutting-edge digital solutions.',
  keywords: 'IT services, web development, mobile apps, ERP solutions, API integration, software development',
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