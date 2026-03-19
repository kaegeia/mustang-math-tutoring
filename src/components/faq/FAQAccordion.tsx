"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are Kenny\u2019s qualifications?",
    a: "Kenny is a Statistics major at Cal Poly SLO (Junior) and a St. Francis High School alumnus. He scored a 5 on AP Calculus AB and a 4 on AP Calculus BC. He brings firsthand experience with the exact SFHS curriculum your student is taking.",
  },
  {
    q: "What subjects does Kenny tutor?",
    a: "Kenny tutors Algebra I, Algebra II, Geometry, Advanced Algebra with Trigonometry Honors, AP Precalculus, AP Calculus AB, AP Calculus BC, and AP Statistics.",
  },
  {
    q: "How much does tutoring cost?",
    a: "Foundational Math (Algebra, Geometry) is $45/hour. Advanced STEM & AP subjects are $60/hour. Quick 30-minute Concept Check sessions are $35. The Calculus Readiness Package offers 10 sessions for $550 (a $50 savings).",
  },
  {
    q: "Where do sessions take place?",
    a: "Sessions are available in-person (at your home, a local library, or a caf\u00E9 in the La Ca\u00F1ada/San Marino area) or virtually via Zoom with a digital whiteboard. Kenny will work with you to find the most convenient option.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We require 24 hours\u2019 notice to cancel or reschedule. Sessions canceled with less than 24 hours\u2019 notice are billed at 50% of the scheduled rate. No-shows are charged the full session fee. A credit card on file is required at booking.",
  },
  {
    q: "How do payments work?",
    a: "Payments are processed securely via credit card. Your card is kept on file and charged after each session, or upfront for package purchases. All billing is handled through our secure scheduling system.",
  },
  {
    q: "Can I get progress reports on my student?",
    a: "Absolutely. Kenny provides regular updates to parents on topics covered, areas of strength, and what to focus on next. Package students receive formal weekly progress reports.",
  },
  {
    q: "Does Kenny tutor students at schools other than SFHS?",
    a: "Yes! While Kenny has specialized knowledge of the SFHS curriculum, he tutors students at La Ca\u00F1ada High School, San Marino High School, Flintridge Preparatory, and other schools in the Pasadena-Glendale corridor. The core math concepts are universal.",
  },
  {
    q: "What technology is used for virtual sessions?",
    a: "Virtual sessions use Zoom with a digital whiteboard. Kenny uses a stylus for real-time problem-solving so students can follow along exactly as they would in person.",
  },
  {
    q: "Are there package discounts?",
    a: "Yes. The Calculus Readiness Package offers 10 sessions for $550, saving $50 compared to booking individually. Contact Kenny to discuss custom packages for ongoing support.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  const noMotion = { duration: 0 };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
        >
          Frequently Asked{" "}
          <span className="text-gradient">Questions</span>
        </motion.h1>
        <p className="mb-12 text-center text-lg text-slate-500">
          Everything parents and students need to know.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={
                  prefersReducedMotion
                    ? noMotion
                    : { duration: 0.4, delay: Math.min(i * 0.05, 0.3), ease: "easeOut" }
                }
                className="glass-card overflow-hidden"
              >
                <button
                  id={buttonId}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-brand-navy">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={
                      prefersReducedMotion
                        ? noMotion
                        : { duration: 0.25, ease: "easeInOut" }
                    }
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={
                        prefersReducedMotion
                          ? noMotion
                          : { duration: 0.3, ease: "easeInOut" }
                      }
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200/60 px-6 pb-5 pt-4">
                        <p className="leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
