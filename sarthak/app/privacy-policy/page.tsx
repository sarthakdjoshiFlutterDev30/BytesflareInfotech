import PrivacyPolicy from '@/components/privacy-policy';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#05081a]">
      <Navigation />
      <main className="pt-24">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
