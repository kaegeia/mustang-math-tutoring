export const siteConfig = {
  name: "Mustang Mathematics & AI Tutoring",
  tagline:
    "Elite Near-Peer Mathematics Tutoring for La Cañada & San Marino",
  description:
    "Premium 1-on-1 math tutoring by a Cal Poly SLO Statistics major and St. Francis High School alumnus. AP Calculus, AP Statistics, Algebra, Geometry. Serving La Cañada Flintridge (91011) and San Marino (91108).",
  url: "https://mustang-math-tutoring.vercel.app",
  tutor: {
    name: "Kenny Carpenter",
    university: "Cal Poly SLO",
    major: "Statistics",
    year: "Junior",
    highSchool: "St. Francis High School",
    apScores: { calcAB: 5, calcBC: 4 },
  },
  contact: {
    email: "placeholder@mustangmath.com",
    phone: "(000) 000-0000",
    serviceAreas: [
      "La Cañada Flintridge",
      "San Marino",
      "Pasadena",
      "Glendale",
    ],
  },
  social: {
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
    facebook: "#",
  },
  ghl: {
    calendarEmbedUrl: process.env.NEXT_PUBLIC_GHL_CALENDAR_URL || "",
    webhookUrl: process.env.GHL_WEBHOOK_URL || "",
    chatWidgetId: process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID || "",
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
} as const;
