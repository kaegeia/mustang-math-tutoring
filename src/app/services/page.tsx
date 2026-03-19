import { PricingCards } from "@/components/services/PricingCards";
import { PackageCTA } from "@/components/services/PackageCTA";
import { ComparisonTable } from "@/components/services/ComparisonTable";

export const metadata = {
  title: "Services & Pricing",
  description:
    "AP Calculus, AP Statistics, Algebra, Geometry — premium 1-on-1 math tutoring. Simple, transparent pricing with no contracts.",
};

export default function ServicesPage() {
  return (
    <main>
      <PricingCards />
      <PackageCTA />
      <ComparisonTable />
    </main>
  );
}
