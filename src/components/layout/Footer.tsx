import Link from "next/link";
import { Instagram, Music2, Linkedin, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.social.tiktok, label: "TikTok", icon: Music2 },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy">
      {/* Glass-border top accent */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3B82F6, #22D3EE, #3B82F6, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-opacity hover:opacity-80 hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Service Areas
            </h3>
            <ul className="mt-3 space-y-2">
              {siteConfig.contact.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-slate-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            <div className="mt-3 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-opacity hover:opacity-70"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-400">
            &copy; 2026 {siteConfig.name}. All rights reserved. Built with care
            in La Ca&ntilde;ada.
          </p>
        </div>
      </div>
    </footer>
  );
}
