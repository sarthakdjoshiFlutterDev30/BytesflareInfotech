import TermsOfService from '@/components/terms-of-service';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}
