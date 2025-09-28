import PrivacyPolicy from '@/components/privacy-policy';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
