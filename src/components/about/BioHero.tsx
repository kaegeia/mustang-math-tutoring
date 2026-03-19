"use client";

import { motion } from "framer-motion";
import { Camera, GraduationCap, Award, School } from "lucide-react";
import { siteConfig } from "@/lib/config";

const credentials = [
  { icon: GraduationCap, label: siteConfig.tutor.university },
  { icon: Award, label: `AP Calc AB: ${siteConfig.tutor.apScores.calcAB}` },
  { icon: Award, label: `AP Calc BC: ${siteConfig.tutor.apScores.calcBC}` },
  { icon: School, label: "SFHS \u201923" },
];

export function BioHero() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-white/15 bg-slate-100 shadow-card">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-slate-400">
                <Camera className="h-12 w-12" />
                <span className="text-sm font-medium">
                  {siteConfig.tutor.name}&apos;s photo
                </span>
              </div>
              {/* Accent glow */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-blue/20 blur-[60px]" />
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Meet{" "}
              <span className="text-gradient">{siteConfig.tutor.name}</span>
            </h1>

            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                I remember sitting in an AP Calc class at St.&nbsp;Francis,
                staring at a related rates problem that felt impossible. Fast
                forward a few years, and I&apos;m a Statistics major at Cal
                Poly&nbsp;SLO&nbsp;&mdash; and those &ldquo;impossible&rdquo;
                problems are exactly what I love helping students crack.
              </p>
              <p>
                The near-peer advantage is real. I didn&apos;t learn this
                material decades ago&nbsp;&mdash; I learned it recently, at
                the same school, from the same curriculum. I remember what it
                feels like to be confused by epsilon-delta proofs at midnight
                before a test, and I know the specific shortcuts and mental
                models that made everything click. That empathy is something no
                amount of teaching experience alone can replicate.
              </p>
              <p>
                I&apos;m not here to lecture. I&apos;m here to show you how
                someone who already passed this class actually thinks through
                these problems&nbsp;&mdash; step by step, in language that
                makes sense.
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {credentials.map((cred, i) => (
                <motion.span
                  key={cred.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-brand-navy"
                >
                  <cred.icon className="h-4 w-4 shrink-0 text-brand-blue" />
                  {cred.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
