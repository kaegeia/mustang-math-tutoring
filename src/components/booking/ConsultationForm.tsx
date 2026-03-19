"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card flex flex-col items-center p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle className="h-16 w-16 text-brand-blue" />
            </motion.div>
            <h3 className="mt-4 text-2xl font-bold text-brand-navy">
              Thanks!
            </h3>
            <p className="mt-2 text-slate-500">
              {siteConfig.tutor.name} will be in touch within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-10">
          <h2 className="mb-2 text-2xl font-bold text-brand-navy">
            Prefer to Talk First?
          </h2>
          <p className="mb-8 text-slate-500">
            Request a free 15-minute consultation.
          </p>

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
                          ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
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
                  className="flex items-center gap-3 rounded-xl border border-brand-amber/30 bg-brand-amber/10 px-4 py-3 text-sm text-brand-navy"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-brand-amber" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white glow-blue disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
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
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-brand-amber">{error}</p>
      )}
    </div>
  );
}
