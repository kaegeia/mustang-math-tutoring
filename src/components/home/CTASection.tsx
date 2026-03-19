"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function CTASection() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="relative overflow-hidden gradient-hero py-20 sm:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-brand-cyan/15 blur-[80px]" />
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
          className="mx-auto mt-4 max-w-xl text-lg text-slate-300"
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
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-base font-semibold text-white glow-blue"
          >
            Book a Free Session
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
