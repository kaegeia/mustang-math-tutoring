"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { target: 5, suffix: "", label: "AP Calc AB Score", color: "text-[#3B82F6]" },
  { target: 3, suffix: "+", label: "Years Advanced STEM Study", color: "text-[#F59E0B]" },
  { target: 100, suffix: "%", label: "Personalized 1-on-1 Attention", color: "text-[#22D3EE]" },
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
    <section className="section-dark py-20 sm:py-24" aria-label="Key statistics">
      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8"
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
            className="glass-card flex flex-col items-center p-6 text-center"
          >
            <span className={`text-3xl font-bold sm:text-4xl ${stat.color}`}>
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                inView={inView}
                instant={!!prefersReducedMotion}
              />
            </span>
            <span className="mt-2 text-sm text-slate-400">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
