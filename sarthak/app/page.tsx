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
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Careers } from '@/components/careers';
import { Footer } from '@/components/footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
        <FAQ />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}