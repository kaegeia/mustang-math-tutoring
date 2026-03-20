"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function CTASection() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 70%, #172554 100%)",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="ambient-glow"
          style={{
            width: "500px",
            height: "500px",
            top: "-20%",
            left: "20%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="ambient-glow"
          style={{
            width: "400px",
            height: "400px",
            bottom: "-15%",
            right: "15%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready to Raise Your Math Grade?
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? noMotion : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-lg text-slate-400"
        >
          Book a free consultation with {siteConfig.tutor.name} and discover how
          near-peer tutoring can transform your understanding of math.
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? noMotion : { duration: 0.5, delay: 0.24, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Book a Free Session
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="glass-card-hover inline-flex items-center px-8 py-4 text-base font-semibold text-slate-200 transition-colors hover:text-white"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
