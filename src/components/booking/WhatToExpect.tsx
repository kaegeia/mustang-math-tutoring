"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, MessageSquare, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Book Your Slot",
    description:
      "Pick a time that works for you. 30-minute concept checks or 60-minute deep dives available.",
  },
  {
    icon: MessageSquare,
    title: "2. Quick Intro Call",
    description:
      "Kenny will reach out to learn what you're working on and where you need the most help.",
  },
  {
    icon: BookOpen,
    title: "3. Personalized Session",
    description:
      "Show up with your homework, textbook, or just questions. Every session is tailored to you.",
  },
  {
    icon: TrendingUp,
    title: "4. Track Your Progress",
    description:
      "Parents receive weekly updates. Watch confidence — and grades — climb.",
  },
];

export function WhatToExpect() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What to Expect
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                reduced
                  ? noMotion
                  : { duration: 0.5, delay: i * 0.12, ease: "easeOut" }
              }
              className="glass-card-hover flex flex-col items-center p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                <step.icon className="h-6 w-6 text-[#3B82F6]" aria-hidden="true" />
              </div>
              <span className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6]/15 text-xs font-bold text-[#3B82F6]">
                {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
