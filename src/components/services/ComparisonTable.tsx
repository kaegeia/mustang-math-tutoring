"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue">
        <Check className="h-4 w-4" />
        <span className="sr-only sm:not-sr-only">Yes</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-sm text-slate-400">
      <X className="h-4 w-4" />
      <span className="sr-only sm:not-sr-only">No</span>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            How We Compare
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
            See why personalized near-peer tutoring beats the alternatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card"
        >
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-brand-slate">
                <th className="px-6 py-4 text-sm font-semibold text-brand-navy">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={`px-4 py-4 text-center text-sm font-semibold ${
                      c.key === "kenny"
                        ? "bg-brand-blue/5 text-brand-blue"
                        : "text-slate-600"
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
                  className={i < rows.length - 1 ? "border-b border-slate-100" : ""}
                >
                  <td className="px-6 py-4 text-sm font-medium text-brand-navy">
                    {row.feature}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.key}
                      className={`px-4 py-4 text-center ${
                        c.key === "kenny" ? "bg-brand-blue/5" : ""
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
