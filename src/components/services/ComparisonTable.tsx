"use client";

import { motion, useReducedMotion } from "framer-motion";

type CellValue = boolean;

interface ComparisonRow {
  feature: string;
  kenny: CellValue;
  mathnasium: CellValue;
  kumon: CellValue;
  generic: CellValue;
}

const rows: ComparisonRow[] = [
  {
    feature: "1-on-1 Attention",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: true,
  },
  {
    feature: "SFHS Curriculum Alignment",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: false,
  },
  {
    feature: "Flexible Scheduling",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: true,
  },
  {
    feature: "AP Exam Expertise",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: false,
  },
  {
    feature: "Personalized Pacing",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: true,
  },
  {
    feature: "Price Transparency",
    kenny: true,
    mathnasium: false,
    kumon: false,
    generic: false,
  },
];

const competitors = [
  { key: "kenny" as const, label: "Kenny\u2019s Tutoring" },
  { key: "mathnasium" as const, label: "Mathnasium" },
  { key: "kumon" as const, label: "Kumon" },
  { key: "generic" as const, label: "Generic College Tutor" },
];

function CellIndicator({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#3B82F6]">
        <span aria-hidden="true">&#x2726;</span> Yes
      </span>
    );
  }
  return (
    <span className="text-sm text-slate-500">&mdash;</span>
  );
}

export function ComparisonTable() {
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section className="section-dark py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Compare
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-400">
            See why personalized near-peer tutoring beats the alternatives.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={
            reduced
              ? noMotion
              : { duration: 0.5, delay: 0.1, ease: "easeOut" }
          }
          className="glass-card overflow-x-auto"
        >
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="bg-white/5">
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={`px-4 py-4 text-center text-sm font-semibold ${
                      c.key === "kenny"
                        ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                        : "text-slate-400"
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i < rows.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-200">
                    {row.feature}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.key}
                      className={`px-4 py-4 text-center ${
                        c.key === "kenny" ? "bg-[#3B82F6]/10" : ""
                      } ${
                        i % 2 === 1 && c.key !== "kenny"
                          ? "bg-white/[0.02]"
                          : ""
                      }`}
                    >
                      <CellIndicator value={row[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
