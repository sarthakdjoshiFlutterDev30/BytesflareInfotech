'use client';

import { useState } from 'react';
import { Loader } from '@/components/loader';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Products } from '@/components/products';
import { Process } from '@/components/process';
import { UseCases } from '@/components/use-cases';
import { TechStack } from '@/components/tech-stack';
import { Vision } from '@/components/vision';
import { CTA } from '@/components/cta';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />

      {loaded && (
        <div className="min-h-screen bg-[#05081a] text-slate-100">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Products />
            <Process />
            <UseCases />
            <TechStack />
            <Vision />
            <CTA />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
