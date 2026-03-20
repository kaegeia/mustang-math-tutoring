"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Kenny explained derivatives in a way that finally clicked for my daughter. Her grade went from a C+ to an A\u2013 in just six weeks. He knows exactly what SFHS teachers expect.",
    name: "Jennifer M.",
    detail: "Parent of 11th grader at SFHS",
  },
  {
    quote:
      "Finding a tutor who actually took the same AP Calc class at the same school was a game-changer. Kenny remembers the exact problem sets and pacing, so he always knows what\u2019s coming next.",
    name: "David R.",
    detail: "Parent of 10th grader at SFHS",
  },
  {
    quote:
      "My son was anxious about starting Algebra 2 this year. After just three sessions with Kenny he felt confident walking into class. Worth every penny.",
    name: "Maria L.",
    detail: "Parent of 9th grader at SFHS",
  },
];

export function TestimonialsPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const noMotion = { duration: 0 };
  const cardTransition = prefersReducedMotion
    ? noMotion
    : { duration: 0.4, ease: "easeInOut" as const };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={prefersReducedMotion ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What Parents Are Saying
        </motion.h2>

        {/* Carousel */}
        <div
          className="relative min-h-[260px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Parent testimonials"
        >
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={cardTransition}
                className="glass-card relative p-8 sm:p-10"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${active + 1} of ${testimonials.length}`}
              >
                {/* Decorative quotation mark */}
                <span
                  className="absolute top-4 left-6 text-4xl font-serif text-[#3B82F6] opacity-30 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="mt-4 text-lg italic leading-relaxed text-slate-200">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <footer className="mt-6">
                  <p className="font-semibold text-white">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-slate-400">
                    {testimonials[active].detail}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setActive(i)}
              aria-selected={i === active}
              aria-label={`Show testimonial ${i + 1}`}
              className="flex h-11 items-center px-1"
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-[#3B82F6]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
