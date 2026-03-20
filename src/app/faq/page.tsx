import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about tutoring sessions, pricing, scheduling, and policies.",
};

export default function FAQPage() {
  return (
    <main className="bg-[#0F172A]">
      <FAQAccordion />
    </main>
  );
}
