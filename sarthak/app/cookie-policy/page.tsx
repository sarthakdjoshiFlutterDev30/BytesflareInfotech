import CookiePolicy from '@/components/cookie-policy';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#05081a]">
      <Navigation />
      <main className="pt-24">
        <CookiePolicy />
      </main>
      <Footer />
    </div>
  );
}
