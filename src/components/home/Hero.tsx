"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { siteConfig } from "@/lib/config";

/* ── Floating math symbols ── */
const mathSymbols = [
  { char: "\u222B", x: "10%", y: "20%", size: "text-4xl", duration: 18, delay: 0 },
  { char: "\u03A3", x: "80%", y: "15%", size: "text-5xl", duration: 22, delay: 2 },
  { char: "\u03C0", x: "70%", y: "70%", size: "text-3xl", duration: 20, delay: 4 },
  { char: "\u221A", x: "15%", y: "75%", size: "text-4xl", duration: 24, delay: 1 },
  { char: "\u221E", x: "50%", y: "10%", size: "text-3xl", duration: 19, delay: 3 },
  { char: "\u0394", x: "90%", y: "50%", size: "text-3xl", duration: 21, delay: 5 },
  { char: "\u03B8", x: "25%", y: "45%", size: "text-2xl", duration: 23, delay: 2.5 },
  { char: "\u03BB", x: "60%", y: "85%", size: "text-2xl", duration: 17, delay: 1.5 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  /* ── Mouse-driven parallax for glass card ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 90,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 90,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const noMotion = { duration: 0 };
  const enterTransition = prefersReducedMotion
    ? noMotion
    : { duration: 0.6, ease: "easeOut" as const };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-brand-navy"
      aria-label="Hero"
    >
      {/* ── Gradient mesh background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[50%] w-[50%] rounded-full bg-brand-cyan/15 blur-[100px]" />
        <div className="absolute -left-20 -top-20 h-[30%] w-[30%] rounded-full bg-brand-amber/8 blur-[80px]" />
      </div>

      {/* ── Floating math symbols (decorative, hidden from SR) ── */}
      <div aria-hidden="true">
        {mathSymbols.map((sym, i) =>
          prefersReducedMotion ? (
            <span
              key={i}
              className={`pointer-events-none absolute select-none font-mono ${sym.size} text-white/[0.06]`}
              style={{ left: sym.x, top: sym.y }}
            >
              {sym.char}
            </span>
          ) : (
            <motion.span
              key={i}
              className={`pointer-events-none absolute select-none font-mono ${sym.size} text-white/[0.06]`}
              style={{ left: sym.x, top: sym.y }}
              animate={{
                y: [0, -30, 0, 20, 0],
                x: [0, 15, -10, 5, 0],
                rotate: [0, 5, -3, 2, 0],
              }}
              transition={{
                duration: sym.duration,
                delay: sym.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {sym.char}
            </motion.span>
          ),
        )}
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Left column: copy + CTAs */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
              Your SFHS Math Advantage
            </span>
            <br />
            <span className="text-white">Starts Here</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? noMotion
                : { duration: 0.6, delay: 0.15, ease: "easeOut" }
            }
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? noMotion
                : { duration: 0.6, delay: 0.3, ease: "easeOut" }
            }
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/book"
              className="inline-flex items-center rounded-xl bg-brand-blue px-7 py-3.5 text-base font-semibold text-white glow-blue"
            >
              Book a Session
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Meet Kenny
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              prefersReducedMotion
                ? noMotion
                : { duration: 0.8, delay: 0.5 }
            }
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-cyan" aria-hidden="true" />
              AP Calc AB: 5
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-cyan" aria-hidden="true" />
              AP Calc BC: 4
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-amber" aria-hidden="true" />
              {siteConfig.tutor.university}
            </span>
          </motion.div>
        </div>

        {/* Right column: glass-framed photo card with parallax */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion
              ? noMotion
              : { duration: 0.7, delay: 0.25, ease: "easeOut" }
          }
          className="hidden lg:flex lg:justify-center"
          style={{ perspective: 800 }}
        >
          <motion.div
            style={prefersReducedMotion ? {} : { rotateX, rotateY }}
            className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-glass-lg backdrop-blur-md"
            role="img"
            aria-label={`Photo placeholder for ${siteConfig.tutor.name}`}
          >
            <Image
              src="/images/kenny-headshot.jpg"
              alt="Kenny Carpenter - Mathematics Tutor"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
              priority
            />
            {/* Name overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
              <p className="text-lg font-semibold text-white">
                {siteConfig.tutor.name}
              </p>
              <p className="mt-0.5 text-sm text-slate-300">
                {siteConfig.tutor.major} &middot;{" "}
                {siteConfig.tutor.university}
              </p>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-blue/25 blur-[60px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/20 blur-[50px]" aria-hidden="true" />
          </motion.div>
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
