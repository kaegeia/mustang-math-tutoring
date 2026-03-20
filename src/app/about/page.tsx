import { siteConfig } from "@/lib/config";
import { BioHero } from "@/components/about/BioHero";
import { AcademicTimeline } from "@/components/about/AcademicTimeline";

export const metadata = {
  title: "About",
  description: `Learn about ${siteConfig.tutor.name}, ${siteConfig.tutor.university} ${siteConfig.tutor.major} major and elite math tutor.`,
};

export default function AboutPage() {
  return (
    <main className="bg-[#0F172A]">
      <BioHero />
      <AcademicTimeline />
    </main>
  );
}
