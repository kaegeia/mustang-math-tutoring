"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const MATH_SYMBOLS = "∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇  ∫  Σ  π  √  ∞  Δ  θ  λ  ∂  ∇";

const statCards = [
  { label: "AP Calc AB", value: "5", color: "text-[#3B82F6]", borderClass: "glass-card-blue" },
  { label: "AP Calc BC", value: "4", color: "text-[#F59E0B]", borderClass: "glass-card-amber" },
  { label: "Cal Poly SLO", value: "Cal Poly SLO", subtitle: "Statistics", color: "text-[#22D3EE]", borderClass: "glass-card-cyan", isText: true },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const noMotion = { duration: 0 };
  const stagger = (delay: number) =>
    prefersReducedMotion
      ? noMotion
      : { duration: 0.6, delay, ease: "easeOut" as const };

  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 70%, #172554 100%)",
      }}
      aria-label="Hero"
    >
      {/* ── Ambient glow orbs ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="ambient-glow"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            right: "-5%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="ambient-glow"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-15%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="ambient-glow"
          style={{
            width: "400px",
            height: "400px",
            top: "50%",
            left: "40%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Math symbols background layer ── */}
      <div className="math-symbols-bg" aria-hidden="true">
        <div className="whitespace-pre-wrap break-words font-mono leading-relaxed">
          {MATH_SYMBOLS}
        </div>
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Left column: copy + stats + CTAs */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Glass pill badge */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0)}
          >
            <span className="glass-card-blue inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#3B82F6]">
              Near-Peer Math Tutoring
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0.1)}
            className="mt-6 text-4xl font-bold leading-tight text-[#F8FAFC] md:text-5xl"
            style={{ letterSpacing: "-0.5px" }}
          >
            Your Advanced Math{" "}
            <br className="hidden sm:block" />
            Advantage Starts Here
          </motion.h1>

          {/* Subtitle — service areas */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0.2)}
            className="mt-4 text-lg text-slate-400"
          >
            La Ca&ntilde;ada &middot; Crescenta Valley &middot; Pasadena
          </motion.p>

          {/* Stat cards — 3-column grid */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0.3)}
            className="mt-8 grid w-full max-w-md grid-cols-3 gap-3"
          >
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={stagger(0.3 + i * 0.1)}
                className={`${stat.borderClass} flex flex-col items-center px-2 py-4 text-center`}
              >
                {stat.isText ? (
                  <>
                    <span className={`text-sm font-bold ${stat.color} sm:text-base`}>
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs text-slate-400">{stat.subtitle}</span>
                  </>
                ) : (
                  <>
                    <span className={`text-3xl font-bold ${stat.color} sm:text-4xl`}>
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs text-slate-400">{stat.label}</span>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0.6)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/book"
              className="inline-flex items-center rounded-lg bg-[#3B82F6] px-7 py-3 text-base font-semibold text-white transition-all hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Book a Session
            </Link>
            <Link
              href="/about"
              className="glass-card-hover inline-flex items-center px-7 py-3 text-base font-semibold text-slate-200 transition-colors hover:text-white"
            >
              Meet Kenny &rarr;
            </Link>
          </motion.div>
        </div>

        {/* Right column: Kenny's headshot */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={stagger(0.7)}
          className="flex flex-col items-center lg:justify-center"
        >
          {/* Photo container with blue glow ring */}
          <div className="relative">
            {/* Blue glow behind photo */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-50"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              aria-hidden="true"
            />
            <div className="glass-card relative aspect-[3/4] w-64 overflow-hidden sm:w-72 lg:w-80">
              <Image
                src="/images/kenny-headshot.jpg"
                alt="Kenny Carpenter - Mathematics Tutor"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                className="object-cover"
                priority
              />
              {/* Subtle gradient at bottom for readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Glass pill badges below photo */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="glass-card inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white">
              Kenny Carpenter
            </span>
            <span className="glass-card-cyan inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#22D3EE]">
              Statistics &middot; Cal Poly SLO
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
