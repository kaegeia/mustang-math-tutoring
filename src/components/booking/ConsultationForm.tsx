"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { submitConsultationForm } from "@/lib/ghl";

const subjects = [
  "Algebra I",
  "Algebra II",
  "Geometry",
  "AP Precalculus",
  "AP Calculus AB",
  "AP Calculus BC",
  "AP Statistics",
] as const;

const grades = [
  "Rising 8th",
  "Rising 9th",
  "Rising 10th",
  "Rising 11th",
  "Rising 12th",
] as const;

const schools = [
  "St. Francis High School",
  "La Cañada High School",
  "San Marino High School",
  "Flintridge Preparatory",
  "Other",
] as const;

const callTimes = ["Morning", "Afternoon", "Evening"] as const;

const schema = z.object({
  parentName: z.string().min(1, "Parent name is required"),
  studentName: z.string().min(1, "Student name is required"),
  studentGrade: z.string().min(1, "Please select a grade"),
  school: z.string().min(1, "Please select a school"),
  subjects: z
    .array(z.string())
    .min(1, "Select at least one subject"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[\d\s()+-]{7,20}$/,
      "Please enter a valid phone number",
    ),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  bestTimeToCall: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subjects: [] },
  });

  const selectedSubjects = watch("subjects");

  function toggleSubject(subject: string) {
    const current = selectedSubjects || [];
    const next = current.includes(subject)
      ? current.filter((s) => s !== subject)
      : [...current, subject];
    setValue("subjects", next, { shouldValidate: true });
  }

  async function onSubmit(data: FormData) {
    setStatus("submitting");
    const result = await submitConsultationForm(data);
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <section className="section-dark py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduced ? noMotion : { duration: 0.4, ease: "easeOut" }}
            className="glass-card flex flex-col items-center p-10 text-center"
          >
            <motion.div
              initial={reduced ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={
                reduced
                  ? noMotion
                  : { delay: 0.15, type: "spring", stiffness: 200, damping: 15 }
              }
            >
              <CheckCircle className="h-16 w-16 text-[#3B82F6]" />
            </motion.div>
            <h3 className="mt-4 text-2xl font-bold text-white">
              Thanks!
            </h3>
            <p className="mt-2 text-slate-400">
              {siteConfig.tutor.name} will be in touch within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)" }}>
      {/* Ambient glow behind form */}
      <div
        className="ambient-glow"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Book a Free Consultation
        </motion.h2>
        <p className="mb-8 text-center text-slate-400">
          Request a free 15-minute consultation.
        </p>

        <div className="glass-card p-8 sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            {/* Parent Name */}
            <Field label="Parent Name" htmlFor="parentName" error={errors.parentName?.message}>
              <input
                {...register("parentName")}
                id="parentName"
                type="text"
                className="form-input"
                placeholder="Jane Doe"
              />
            </Field>

            {/* Student Name */}
            <Field label="Student Name" htmlFor="studentName" error={errors.studentName?.message}>
              <input
                {...register("studentName")}
                id="studentName"
                type="text"
                className="form-input"
                placeholder="Alex Doe"
              />
            </Field>

            {/* Two-col row */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Student Grade */}
              <Field label="Student Grade" htmlFor="studentGrade" error={errors.studentGrade?.message}>
                <select {...register("studentGrade")} id="studentGrade" className="form-input">
                  <option value="">Select grade</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </Field>

              {/* School */}
              <Field label="School" htmlFor="school" error={errors.school?.message}>
                <select {...register("school")} id="school" className="form-input">
                  <option value="">Select school</option>
                  {schools.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Subjects */}
            <Field label="Subject(s) of Interest" error={errors.subjects?.message}>
              <div className="flex flex-wrap gap-2">
                {subjects.map((s) => {
                  const checked = selectedSubjects?.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSubject(s)}
                      className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                        checked
                          ? "border-[#3B82F6] bg-[#3B82F6]/15 text-[#3B82F6]"
                          : "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </Field>

            {/* Two-col row */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Phone */}
              <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  className="form-input"
                  placeholder="(626) 555-0100"
                />
              </Field>

              {/* Email */}
              <Field label="Email" htmlFor="email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="parent@email.com"
                />
              </Field>
            </div>

            {/* Best Time to Call */}
            <Field label="Best Time to Call" htmlFor="bestTimeToCall" error={errors.bestTimeToCall?.message}>
              <select {...register("bestTimeToCall")} id="bestTimeToCall" className="form-input">
                <option value="">No preference</option>
                {callTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            {/* Error banner */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  role="alert"
                  className="flex items-center gap-3 rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-3 text-sm text-[#FBBF24]"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Request Consultation"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable field wrapper ── */
function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-[#FBBF24]">{error}</p>
      )}
    </div>
  );
}
