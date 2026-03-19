"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kenny explained derivatives in a way that finally clicked for my daughter. Her grade went from a C+ to an A\u2013 in just six weeks. He knows exactly what SFHS teachers expect.",
    name: "Jennifer M.",
    detail: "Parent of 11th grader at SFHS",
    stars: 5,
  },
  {
    quote:
      "Finding a tutor who actually took the same AP Calc class at the same school was a game-changer. Kenny remembers the exact problem sets and pacing, so he always knows what\u2019s coming next.",
    name: "David R.",
    detail: "Parent of 10th grader at SFHS",
    stars: 5,
  },
  {
    quote:
      "My son was anxious about starting Algebra 2 this year. After just three sessions with Kenny he felt confident walking into class. Worth every penny.",
    name: "Maria L.",
    detail: "Parent of 9th grader at SFHS",
    stars: 5,
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
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={prefersReducedMotion ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
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
                className="glass-card p-8 sm:p-10"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${active + 1} of ${testimonials.length}`}
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1" aria-label={`${testimonials[active].stars} out of 5 stars`}>
                  {Array.from({ length: testimonials[active].stars }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-brand-amber text-brand-amber"
                        aria-hidden="true"
                      />
                    ),
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg italic leading-relaxed text-slate-700">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <footer className="mt-6">
                  <p className="font-semibold text-brand-navy">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonials[active].detail}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot navigation — 44px touch target via padding */}
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setActive(i)}
              aria-selected={i === active}
              aria-label={`Show testimonial ${i + 1}`}
              className={`flex h-11 items-center px-1 ${
                i === active ? "" : ""
              }`}
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-brand-blue"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
