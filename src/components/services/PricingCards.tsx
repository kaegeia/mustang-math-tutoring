"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, Users, Sparkles } from "lucide-react";

interface PricingTier {
  name: string;
  target: string;
  duration: string;
  rate: string;
  rateLabel: string;
  subjects: string[];
  features: string[];
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Foundational Math",
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
  },
  {
    name: "Advanced STEM & AP",
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
  },
  {
    name: "Concept Check / Homework Rescue",
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
  },
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
      style={{ perspective: "800px" }}
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:-translate-y-1 ${
          tier.popular
            ? "border-2 border-brand-amber/60 bg-white shadow-glow-amber"
            : "border border-white/15 bg-white shadow-card group-hover:shadow-card-hover"
        }`}
      >
        {/* Popular badge */}
        {tier.popular && (
          <div className="flex items-center justify-center gap-1.5 bg-brand-amber px-4 py-1.5 text-sm font-semibold text-brand-navy">
            <Sparkles className="h-4 w-4" />
            Most Popular
          </div>
        )}

        <div className="p-8">
          {/* Header */}
          <h3 className="text-xl font-bold text-brand-navy">{tier.name}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <Users className="h-4 w-4" />
            {tier.target}
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <Clock className="h-4 w-4" />
            {tier.duration}
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-brand-navy">
              {tier.rate}
            </span>
            <span className="text-lg text-slate-500">{tier.rateLabel}</span>
          </div>

          {/* Subjects */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tier.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-full bg-brand-slate px-3 py-1 text-xs font-medium text-brand-navy"
              >
                {subject}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-slate-200" />

          {/* Features */}
          <ul className="space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/book"
            className={`mt-8 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
              tier.popular
                ? "bg-brand-blue text-white glow-blue"
                : "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            }`}
          >
            Book This Session
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingCards() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
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
