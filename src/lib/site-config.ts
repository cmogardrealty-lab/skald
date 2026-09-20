export const BRAND_NAME = "Skald";

// Skald is a product of Mogard Studios: present but quiet, never co-branded.
export const PARENT_NAME = "Mogard Studios";

export const TAGLINE = "We make you the name they say.";

export const DESCRIPTOR = "SEO and AI visibility for local business.";

// Bump this when homepage content meaningfully changes. Surfaced in the
// footer and in JSON-LD as dateModified, for the freshness signal.
export const DATE_MODIFIED = "2026-09-19";

// Placeholder inbox, swap for a real address once a custom domain is live.
export const AUDIT_MAILTO =
  "mailto:hello@skald.studio?subject=Free%20audit%20request";

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "How it works", href: "#how-it-works" },
];

export const SITE_CONFIG = {
  name: BRAND_NAME,
  parent: PARENT_NAME,
  tagline: TAGLINE,
  description:
    "Tool-assisted web design and SEO built for the age of AI search. Skald re-imagines local business websites so they get found on Google and cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  // Current Vercel production URL, swap once a custom domain is connected.
  url: "https://skald-amc.vercel.app",
  // Placeholder inbox on a domain not yet owned, swap for a real address.
  email: "hello@skald.studio",
  location: "Fargo-Moorhead and remote",
  areaServed: ["Fargo", "Moorhead", "Fargo-Moorhead metro", "United States (remote)"],
  founder: {
    // Placeholder: swap in the real founder name and credentials before launch.
    name: "Founder Name",
    jobTitle: "Founder",
    bio: "Founder Name has spent [N years] building and rebuilding local business websites, and now builds the entity and content signals that get a business cited by name, not just ranked.",
  },
  social: {
    // Placeholder handles, swap before launch.
    linkedin: "https://www.linkedin.com/company/skald-studio",
    instagram: "https://www.instagram.com/skald.studio",
  },
};
