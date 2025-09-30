'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { TrustSignals } from '@/components/trust-signals';
import { Stats } from '@/components/stats';
import { Portfolio } from '@/components/portfolio';
import { Process } from '@/components/process';
import { TechStack } from '@/components/tech-stack';
import { Blog } from '@/components/blog';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Careers } from '@/components/careers';
import { Footer } from '@/components/footer';
import TechnicalSupportPage  from '@/components/TechnicalSupportPage';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <TrustSignals />
        <Stats />
        <Portfolio />
        <TechStack />
        <Blog />
        <FAQ />
        <Careers />
        <Contact />
        <section id="support">
          <TechnicalSupportPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}