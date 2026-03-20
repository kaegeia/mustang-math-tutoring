"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, School, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Near-Peer Advantage",
    label: "NEAR-PEER ADVANTAGE",
    body: "I didn\u2019t just read about AP Calc in a textbook \u2014 I took it at your school, with your teachers.",
    glassClass: "glass-card-blue",
    labelColor: "text-[#3B82F6]",
    featured: true,
  },
  {
    icon: School,
    title: "SFHS Curriculum Expert",
    label: "SFHS CURRICULUM EXPERT",
    body: "I know the exams, the pacing, and the exact topics that trip students up.",
    glassClass: "glass-card-amber",
    labelColor: "text-[#FBBF24]",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    label: "PROVEN RESULTS",
    body: "AP Calc AB: 5. AP Calc BC: 4. Cal Poly Statistics Major. I\u2019ve been where you\u2019re going.",
    glassClass: "glass-card-cyan",
    labelColor: "text-[#22D3EE]",
    featured: false,
  },
];

export function ValueProps() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      {/* Ambient glow orb — top right */}
      <div
        className="ambient-glow"
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Why Students Choose{" "}
          <span className="text-gradient">Mustang Math</span>
        </motion.h2>

        {/* Bento grid: 2 cols desktop, 1 col mobile, 12px gap */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                reduced
                  ? noMotion
                  : { duration: 0.5, delay: i * 0.15, ease: "easeOut" }
              }
              className={`${card.glassClass} ${
                card.featured ? "sm:col-span-2" : ""
              } ${card.featured ? "p-6 sm:p-8" : "p-6"}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <card.icon className={`h-5 w-5 ${card.labelColor}`} aria-hidden="true" />
                </div>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${card.labelColor}`}
                >
                  {card.label}
                </span>
              </div>
              <p
                className={`leading-relaxed ${
                  card.featured
                    ? "text-base text-white"
                    : "text-sm text-slate-300"
                }`}
                style={card.featured ? { lineHeight: 1.4 } : undefined}
              >
                {card.body}
              </p>
            </motion.div>
          ))}

          {/* Full-width glass CTA bar */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={
              reduced
                ? noMotion
                : { duration: 0.5, delay: 0.45, ease: "easeOut" }
            }
            className="glass-card sm:col-span-2 flex flex-col items-center justify-between gap-4 p-5 sm:flex-row"
          >
            <p className="text-sm text-slate-400">
              Ready to raise your grade?
            </p>
            <Link
              href="/book"
              className="inline-flex items-center rounded-lg bg-[#3B82F6] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Book free consultation &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
