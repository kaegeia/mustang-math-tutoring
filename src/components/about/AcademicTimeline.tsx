"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    year: "2019",
    title: "SFHS Enrollment",
    description: "Began the math journey at St. Francis High School.",
  },
  {
    icon: BookOpen,
    year: "2020",
    title: "Advanced Algebra with Trig Honors",
    description:
      "Built a strong foundation in algebraic reasoning and trigonometric identities.",
  },
  {
    icon: Calculator,
    year: "2021",
    title: "AP Precalculus",
    description:
      "Mastered limits, function analysis, and the gateway concepts leading into calculus.",
  },
  {
    icon: Award,
    year: "2022",
    title: "AP Calculus AB \u2014 Score: 5",
    description:
      "Earned the highest possible score, mastering derivatives, integrals, and the FTC.",
  },
  {
    icon: Trophy,
    year: "2022",
    title: "AP Calculus BC \u2014 Score: 4",
    description:
      "Tackled series, parametric equations, and polar coordinates at the advanced level.",
  },
  {
    icon: GraduationCap,
    year: "2023",
    title: "Cal Poly SLO Admission",
    description:
      "Accepted into one of the top public universities on the West Coast.",
  },
  {
    icon: BarChart3,
    year: "2024",
    title: "Statistics Major Declaration",
    description:
      "Committed to the discipline of data, probability, and mathematical inference.",
  },
];

export function AcademicTimeline() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          The Academic Journey
        </motion.h2>

        {/* Timeline cards — vertical stack with connecting line */}
        <div className="relative">
          {/* Connecting dashed line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px sm:left-1/2 sm:-translate-x-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 6px, transparent 6px, transparent 12px)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.title}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={
                  reduced
                    ? noMotion
                    : {
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }
                }
                className="relative flex items-start gap-6 sm:items-start"
              >
                {/* Node dot on the line */}
                <div className="absolute left-5 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[#3B82F6] ring-4 ring-[#0F172A] sm:left-1/2" aria-hidden="true" />

                {/* Card — offset from line */}
                <div
                  className={`ml-12 w-full sm:ml-0 ${
                    i % 2 === 0
                      ? "sm:mr-auto sm:w-[calc(50%-2rem)] sm:pr-0"
                      : "sm:ml-auto sm:w-[calc(50%-2rem)] sm:pl-0"
                  }`}
                >
                  <div className="glass-card-hover p-5">
                    {/* Year badge */}
                    <span className="inline-block rounded-full bg-[#3B82F6]/15 px-3 py-0.5 text-xs font-semibold text-[#3B82F6]">
                      {milestone.year}
                    </span>

                    <div className="mt-3 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <milestone.icon
                          className="h-4 w-4 text-[#3B82F6]"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
