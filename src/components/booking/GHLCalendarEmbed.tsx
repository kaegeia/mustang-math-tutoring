"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function GHLCalendarEmbed() {
  const [loaded, setLoaded] = useState(false);
  const url = siteConfig.ghl.calendarEmbedUrl;
  const isPlaceholder = !url || url.includes("placeholder");
  const reduced = useReducedMotion();
  const noMotion = { duration: 0 };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F172A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="ambient-glow"
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? noMotion : { duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Book a <span className="text-gradient">Session</span>
        </motion.h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-slate-400">
          Select a 30-minute or 60-minute session slot that works for you.
        </p>

        {isPlaceholder ? (
          /* Fallback card */
          <div className="glass-card flex flex-col items-center p-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B82F6]/10">
              <Calendar className="h-8 w-8 text-[#3B82F6]" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Calendar Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Online booking is on the way. In the meantime, use the consultation form below or contact us directly.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4B93FF] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </div>
        ) : (
          /* GHL iframe in glass card */
          <div className="glass-card relative overflow-hidden p-2">
            {/* Loading skeleton */}
            <AnimatePresence>
              {!loaded && (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4"
                  style={{ minHeight: 600 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                    <Calendar className="h-7 w-7 animate-pulse text-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-4 w-48 animate-pulse rounded-full bg-white/10" />
                    <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-white/10" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.iframe
              src={url}
              title="Book a tutoring session"
              className="w-full rounded-xl"
              style={{ minHeight: 600, border: "none" }}
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
