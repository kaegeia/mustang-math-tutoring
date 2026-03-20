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
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "#0B1120",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}
            </p>
            {/* Decorative math symbol accent */}
            <span
              className="mt-3 block text-3xl font-mono text-[#3B82F6] opacity-10 select-none"
              aria-hidden="true"
            >
              &int;
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300">
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

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300">
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
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500">
            &copy; 2026 {siteConfig.name}. All rights reserved. Built with care
            in La Ca&ntilde;ada.
          </p>
        </div>
      </div>
    </footer>
  );
}
