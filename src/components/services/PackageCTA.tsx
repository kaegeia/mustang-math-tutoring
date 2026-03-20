"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            reduced
              ? noMotion
              : { duration: 0.6, ease: "easeOut" }
          }
          className="glass-card-amber relative overflow-hidden p-8 sm:p-12"
          style={{ border: "1px solid rgba(245, 158, 11, 0.25)" }}
        >
          {/* Decorative glow */}
          <div
            className="ambient-glow"
            style={{
              width: "300px",
              height: "300px",
              top: "-20%",
              right: "-10%",
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
            {/* Left: copy */}
            <div>
              <span className="inline-block rounded-full bg-[#F59E0B]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                Best Value
              </span>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Calculus Readiness Package
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  $550
                </span>
                <span className="text-lg text-slate-400">/ 10 sessions</span>
              </div>
              <p className="mt-2 inline-flex items-center rounded-full bg-[#F59E0B]/15 px-3 py-1 text-sm font-semibold text-[#FBBF24]">
                Save $50 vs. individual sessions
              </p>
            </div>

            {/* Right: inclusions + CTA */}
            <div>
              <ul className="space-y-3">
                {inclusions.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <item.icon className="h-4 w-4 text-[#FBBF24]" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-8 py-4 text-base font-semibold text-[#0F172A] transition-all hover:bg-[#FBBF24] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                Get the Package
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
