"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Stethoscope,
  FolderOpen,
  BarChart3,
} from "lucide-react";

const inclusions = [
  { icon: ClipboardList, text: "Custom curriculum plan" },
  { icon: Stethoscope, text: "Pre-assessment diagnostic" },
  { icon: FolderOpen, text: "Google Drive study vault access" },
  { icon: BarChart3, text: "Weekly progress reports to parents" },
];

export function PackageCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Amber gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-amber via-brand-amber-dark to-brand-amber" />

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand-navy/10 blur-[60px]" />

          <div className="relative z-10 p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left: copy */}
              <div>
                <span className="inline-block rounded-full bg-brand-navy/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
                  Best Value
                </span>
                <h3 className="mt-4 text-3xl font-bold text-brand-navy sm:text-4xl">
                  Calculus Readiness Package
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-brand-navy">
                    $550
                  </span>
                  <span className="text-lg text-brand-navy/70">
                    / 10 sessions
                  </span>
                </div>
                <p className="mt-2 inline-flex items-center rounded-full bg-brand-navy/15 px-3 py-1 text-sm font-semibold text-brand-navy">
                  Save $50 vs. individual sessions
                </p>
              </div>

              {/* Right: inclusions + CTA */}
              <div>
                <ul className="space-y-3">
                  {inclusions.map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 text-brand-navy"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-navy/10">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-navy px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Get the Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
