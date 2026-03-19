"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  School,
  BookOpen,
  Calculator,
  Award,
  Trophy,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const milestones = [
  {
    icon: School,
    title: "SFHS Enrollment",
    description: "Began the math journey at St. Francis High School.",
  },
  {
    icon: BookOpen,
    title: "Advanced Algebra with Trig Honors",
    description: "Built a strong foundation in algebraic reasoning and trigonometric identities.",
  },
  {
    icon: Calculator,
    title: "AP Precalculus",
    description: "Mastered limits, function analysis, and the gateway concepts leading into calculus.",
  },
  {
    icon: Award,
    title: "AP Calculus AB — Score: 5",
    description: "Earned the highest possible score, mastering derivatives, integrals, and the FTC.",
  },
  {
    icon: Trophy,
    title: "AP Calculus BC — Score: 4",
    description: "Tackled series, parametric equations, and polar coordinates at the advanced level.",
  },
  {
    icon: GraduationCap,
    title: "Cal Poly SLO Admission",
    description: "Accepted into one of the top public universities on the West Coast.",
  },
  {
    icon: BarChart3,
    title: "Statistics Major Declaration",
    description: "Committed to the discipline of data, probability, and mathematical inference.",
  },
];

export function AcademicTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
        >
          The Academic Journey
        </motion.h2>

        <div ref={containerRef} className="relative">
          {/* Background track */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 sm:left-1/2 sm:-translate-x-px" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-5 top-0 w-0.5 bg-brand-blue sm:left-1/2 sm:-translate-x-px"
            style={{ height: lineHeight }}
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className="relative flex items-start gap-6 sm:items-center"
                >
                  {/* Mobile: all left-aligned. Desktop: alternating */}
                  {/* Desktop left content */}
                  <div className="hidden sm:flex sm:w-1/2 sm:justify-end sm:pr-10">
                    {isLeft && (
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-brand-navy">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Node */}
                  <div className="absolute left-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-sm sm:relative sm:left-auto sm:translate-x-0 sm:shrink-0">
                    <milestone.icon className="h-5 w-5 text-brand-blue" />
                  </div>

                  {/* Desktop right content */}
                  <div className="hidden sm:flex sm:w-1/2 sm:pl-10">
                    {!isLeft && (
                      <div>
                        <h3 className="text-lg font-semibold text-brand-navy">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile content (always right of node) */}
                  <div className="ml-10 sm:hidden">
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
