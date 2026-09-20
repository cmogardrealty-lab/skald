import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PARENT_NAME, SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Who runs ${SITE_CONFIG.name}: the founder behind the audits, rebuilds, and citation tracking.`,
};

export default function AboutPage() {
  return (
    <main className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="font-mono text-xs text-ash">about</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
          Who runs {SITE_CONFIG.name}?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ash">
          {SITE_CONFIG.name} is built and run by {SITE_CONFIG.founder.name}, a
          product of {PARENT_NAME} based in {SITE_CONFIG.location}. Every
          engagement is audited, rebuilt, and tracked by the same person who
          signs the report, so the site gets found on Google and cited by
          ChatGPT, Perplexity, Gemini, and Google AI Overviews, not just
          handed to a template.
        </p>

        <div className="mt-12 hairline pt-10">
          <h2 className="font-display text-xl font-semibold text-frost">
            {SITE_CONFIG.founder.name}, {SITE_CONFIG.founder.jobTitle}
          </h2>
          <p className="mt-4 max-w-[65ch] leading-relaxed text-ash">
            {SITE_CONFIG.founder.bio}
          </p>
          <ul className="mt-6 space-y-2 font-mono text-sm text-ash">
            <li>[Add real years of experience]</li>
            <li>[Add relevant certifications or past work]</li>
            <li>[Add a link to a LinkedIn or portfolio profile]</li>
          </ul>
        </div>

        <div className="mt-12 hairline pt-10">
          <h2 className="font-display text-xl font-semibold text-frost">
            {PARENT_NAME}
          </h2>
          <p className="mt-4 max-w-[65ch] leading-relaxed text-ash">
            {SITE_CONFIG.name} is a product of {PARENT_NAME}. The parent stays
            quiet on purpose: you hire {SITE_CONFIG.name} for the work, and{" "}
            {PARENT_NAME} is the studio behind it.
          </p>
        </div>
      </Container>
    </main>
  );
}
