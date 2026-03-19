import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueProps } from "@/components/home/ValueProps";
import { QuickStats } from "@/components/home/QuickStats";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ValueProps />
      <QuickStats />
      <TestimonialsPreview />
      <CTASection />
    </main>
  );
}
