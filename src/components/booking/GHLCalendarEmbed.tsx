"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function GHLCalendarEmbed() {
  const [loaded, setLoaded] = useState(false);
  const url = siteConfig.ghl.calendarEmbedUrl;
  const isPlaceholder = !url || url.includes("placeholder");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          Book a <span className="text-gradient">Session</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-lg text-slate-500">
          Select a 30-minute or 60-minute session slot that works for you.
        </p>

        {isPlaceholder ? (
          /* Fallback card */
          <div className="glass-card flex flex-col items-center p-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
              <Calendar className="h-8 w-8 text-brand-blue" />
            </div>
            <h2 className="text-xl font-semibold text-brand-navy">
              Online Booking Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-500">
              Contact us directly to schedule your session.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white glow-blue"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          </div>
        ) : (
          /* GHL iframe with glass skeleton */
          <div className="relative mx-auto w-full max-w-[800px] overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            {/* Glass loading skeleton */}
            <AnimatePresence>
              {!loaded && (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 glass-card rounded-2xl"
                  style={{ minHeight: 600 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10">
                    <Calendar className="h-7 w-7 animate-pulse text-brand-blue" />
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-4 w-48 animate-pulse rounded-full bg-slate-200" />
                    <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-slate-200" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.iframe
              src={url}
              title="Book a tutoring session"
              className="w-full"
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
