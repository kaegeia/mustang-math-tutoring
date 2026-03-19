"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, School, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Near-Peer Advantage",
    body: "I didn\u2019t just read about AP Calc in a textbook \u2014 I took it at your school, with your teachers.",
  },
  {
    icon: School,
    title: "SFHS Curriculum Expert",
    body: "I know the exams, the pacing, and the exact topics that trip students up.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    body: "AP Calc AB: 5. AP Calc BC: 4. Cal Poly Statistics Major. I\u2019ve been where you\u2019re going.",
  },
];

export function ValueProps() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
        >
          Why Students Choose{" "}
          <span className="text-gradient">Mustang Math</span>
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                reduced
                  ? noMotion
                  : { duration: 0.5, delay: i * 0.15, ease: "easeOut" }
              }
              className="glass-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <card.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-brand-navy">
                {card.title}
              </h3>
              <p className="leading-relaxed text-slate-600">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
