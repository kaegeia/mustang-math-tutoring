"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, School } from "lucide-react";
import { siteConfig } from "@/lib/config";

const credentials = [
  { icon: GraduationCap, label: siteConfig.tutor.university },
  { icon: Award, label: `AP Calc AB: ${siteConfig.tutor.apScores.calcAB}` },
  { icon: Award, label: `AP Calc BC: ${siteConfig.tutor.apScores.calcBC}` },
  { icon: School, label: "SFHS \u201923" },
  { icon: GraduationCap, label: "Statistics Major" },
];

export function BioHero() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="ambient-glow"
          style={{
            width: "500px",
            height: "500px",
            top: "-10%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="ambient-glow"
          style={{
            width: "400px",
            height: "400px",
            bottom: "-15%",
            right: "-5%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              reduced ? noMotion : { duration: 0.6, ease: "easeOut" }
            }
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Blue glow ring */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-50"
                style={{
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                aria-hidden="true"
              />
              <div className="glass-card relative aspect-[3/4] w-full max-w-sm overflow-hidden">
                <Image
                  src="/images/kenny-headshot.jpg"
                  alt="Kenny Carpenter - Mathematics Tutor"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              reduced
                ? noMotion
                : { duration: 0.6, delay: 0.1, ease: "easeOut" }
            }
          >
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {siteConfig.tutor.name}
            </h1>
            <p className="mb-6 text-lg text-slate-400">
              {siteConfig.tutor.major} Major &middot;{" "}
              {siteConfig.tutor.university} &middot; Near-Peer Math Tutor
            </p>

            <div
              className="space-y-4 text-base text-slate-300"
              style={{ lineHeight: 1.7 }}
            >
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
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    reduced
                      ? noMotion
                      : {
                          duration: 0.4,
                          delay: 0.4 + i * 0.08,
                          ease: "easeOut",
                        }
                  }
                  className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-200"
                >
                  <cred.icon
                    className="h-4 w-4 shrink-0 text-[#3B82F6]"
                    aria-hidden="true"
                  />
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
