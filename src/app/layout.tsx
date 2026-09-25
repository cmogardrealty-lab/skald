import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { AuditModal } from "@/components/audit-modal";
import { AuditModalProvider } from "@/components/audit-modal-context";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DATE_MODIFIED, SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name}: SEO and AI visibility for local business`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name}: Be the answer they land on`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name}: Be the answer they land on`,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    areaServed: SITE_CONFIG.areaServed,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.parent,
    },
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      jobTitle: SITE_CONFIG.founder.jobTitle,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.founder.name,
    jobTitle: SITE_CONFIG.founder.jobTitle,
    description: SITE_CONFIG.founder.bio,
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/about`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.name}: Be the answer they land on`,
    url: SITE_CONFIG.url,
    dateModified: DATE_MODIFIED,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-obsidian text-frost antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuditModalProvider>
          <Nav />
          {children}
          <Footer />
          <AuditModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
