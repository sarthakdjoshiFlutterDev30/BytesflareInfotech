import CookiePolicy from '@/components/cookie-policy';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <CookiePolicy />
      </main>
      <Footer />
    </div>
  );
}
