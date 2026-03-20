"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Users } from "lucide-react";

interface PricingTier {
  name: string;
  tierLabel: string;
  target: string;
  duration: string;
  rate: string;
  rateLabel: string;
  subjects: string[];
  features: string[];
  popular?: boolean;
  glassClass: string;
  labelColor: string;
}

const tiers: PricingTier[] = [
  {
    name: "Foundational Math",
    tierLabel: "FOUNDATIONAL",
    target: "Rising 8th\u201310th Graders",
    duration: "60 min",
    rate: "$45",
    rateLabel: "/hr",
    subjects: ["Algebra I", "Algebra II", "Geometry"],
    features: [
      "Personalized lesson plans",
      "Homework & test review",
      "Concept-building worksheets",
      "Progress updates for parents",
    ],
    glassClass: "glass-card",
    labelColor: "text-slate-500",
  },
  {
    name: "Advanced STEM & AP",
    tierLabel: "ADVANCED STEM",
    target: "Rising 11th\u201312th Graders",
    duration: "60 min",
    rate: "$60",
    rateLabel: "/hr",
    subjects: ["AP Precalculus", "AP Calc AB", "AP Calc BC", "AP Stats"],
    features: [
      "AP exam strategy & practice",
      "SFHS-aligned curriculum pacing",
      "FRQ & MCQ drill sessions",
      "Score improvement tracking",
    ],
    popular: true,
    glassClass: "glass-card-blue",
    labelColor: "text-[#3B82F6]",
  },
  {
    name: "Concept Check / Homework Rescue",
    tierLabel: "CONCEPT CHECK",
    target: "All Levels",
    duration: "30 min",
    rate: "$35",
    rateLabel: "",
    subjects: ["Any math subject"],
    features: [
      "Quick targeted help when you\u2019re stuck",
      "Single-concept deep dives",
      "Pre-test confidence boost",
    ],
    glassClass: "glass-card",
    labelColor: "text-slate-500",
  },
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        reduced
          ? noMotion
          : { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
      }
      className={`${tier.glassClass} relative flex h-full flex-col p-8`}
      style={
        tier.popular
          ? { border: "1px solid rgba(59, 130, 246, 0.3)" }
          : undefined
      }
    >
      {/* Popular badge */}
      {tier.popular && (
        <span className="absolute top-4 right-4 rounded-full bg-[#3B82F6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          Popular
        </span>
      )}

      {/* Tier label */}
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${tier.labelColor}`}
      >
        {tier.tierLabel}
      </span>

      {/* Name & meta */}
      <h3 className="mt-2 text-xl font-bold text-white">{tier.name}</h3>
      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <Users className="h-4 w-4" aria-hidden="true" />
        {tier.target}
      </div>
      <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
        <Clock className="h-4 w-4" aria-hidden="true" />
        {tier.duration}
      </div>

      {/* Price */}
      <div className="mt-6">
        <span className="text-3xl font-bold text-white">{tier.rate}</span>
        <span className="ml-1 text-sm text-slate-500">{tier.rateLabel}</span>
      </div>

      {/* Subjects */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tier.subjects.map((subject) => (
          <span
            key={subject}
            className="glass rounded-full px-3 py-1 text-xs font-medium text-slate-300"
          >
            {subject}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Features */}
      <ul className="flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-slate-300"
          >
            <span className="mt-0.5 shrink-0 text-[#3B82F6]" aria-hidden="true">
              &#x2726;
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/book"
        className={`mt-8 flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition-all ${
          tier.popular
            ? "bg-[#3B82F6] text-white hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            : "glass-card-hover text-slate-200 hover:text-white"
        }`}
      >
        Book This Session
      </Link>
    </motion.div>
  );
}

export function PricingCards() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-400">
            No contracts, no hidden fees. Pay per session or save with a package.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
