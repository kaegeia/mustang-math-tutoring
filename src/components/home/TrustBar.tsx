"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, School, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

const badges = [
  { icon: GraduationCap, label: siteConfig.tutor.university },
  { icon: Award, label: `AP Calc AB: ${siteConfig.tutor.apScores.calcAB}` },
  { icon: Award, label: `AP Calc BC: ${siteConfig.tutor.apScores.calcBC}` },
  { icon: School, label: `${siteConfig.tutor.highSchool} Alumni` },
  { icon: CheckCircle, label: `${siteConfig.tutor.major} Major` },
];

export function TrustBar() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="relative overflow-hidden bg-brand-navy/50 py-6" aria-label="Credentials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduced ? noMotion : { duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200"
            >
              <badge.icon className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
