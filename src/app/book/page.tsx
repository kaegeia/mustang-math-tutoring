import { GHLCalendarEmbed } from "@/components/booking/GHLCalendarEmbed";
import { ConsultationForm } from "@/components/booking/ConsultationForm";
import { WhatToExpect } from "@/components/booking/WhatToExpect";

export const metadata = {
  title: "Book a Session",
  description:
    "Schedule your free consultation and start improving your math grades today.",
};

export default function BookPage() {
  return (
    <main>
      <GHLCalendarEmbed />
      <WhatToExpect />
      <ConsultationForm />
    </main>
  );
}
