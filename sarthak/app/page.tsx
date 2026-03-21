'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Stats } from '@/components/stats';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { Portfolio } from '@/components/portfolio';
import { TrustSignals } from '@/components/trust-signals';
import { TechStack } from '@/components/tech-stack';
import { FAQ } from '@/components/faq';
import { Careers } from '@/components/careers';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <TrustSignals />
        <TechStack />
        <FAQ />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
