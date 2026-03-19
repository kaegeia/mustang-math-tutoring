"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 5, suffix: "", label: "AP Calc AB Score" },
  { target: 3, suffix: "+", label: "Years Advanced STEM Study" },
  { target: 100, suffix: "%", label: "Personalized 1-on-1 Attention" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
  instant,
}: {
  target: number;
  suffix: string;
  inView: boolean;
  instant: boolean;
}) {
  const [count, setCount] = useState(instant ? target : 0);
  const hasAnimated = useRef(instant);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function QuickStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="gradient-hero py-20 sm:py-24" aria-label="Key statistics">
      <div
        ref={ref}
        className="mx-auto grid max-w-4xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              prefersReducedMotion
                ? noMotion
                : { duration: 0.5, delay: i * 0.12, ease: "easeOut" }
            }
            className="flex flex-col items-center text-center"
          >
            <span className="text-5xl font-extrabold text-brand-blue sm:text-6xl">
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                inView={inView}
                instant={!!prefersReducedMotion}
              />
            </span>
            <span className="mt-2 text-sm font-medium text-slate-400">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
