import Link from "next/link";
import { Container } from "./container";
import { Logomark } from "./logomark";
import { DATE_MODIFIED, PARENT_NAME, SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="hairline mt-auto py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1 text-sm text-ash">
          <span className="flex items-center gap-2 font-display text-base font-semibold text-frost">
            <Logomark />
            {SITE_CONFIG.name}, by {PARENT_NAME}
          </span>
          <span>{SITE_CONFIG.location}</span>
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="link-underline w-fit text-ember transition-colors hover:text-ember-dark"
          >
            {SITE_CONFIG.email}
          </Link>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex items-center gap-6 text-sm text-glacier">
            <li>
              <Link
                href="/about"
                className="link-underline text-ash transition-colors hover:text-frost"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={SITE_CONFIG.social.linkedin}
                className="link-underline transition-opacity hover:opacity-80"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={SITE_CONFIG.social.instagram}
                className="link-underline transition-opacity hover:opacity-80"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <p className="font-mono text-[11px] text-ash/70">
            Updated {DATE_MODIFIED}
          </p>
        </div>
      </Container>
    </footer>
  );
}
