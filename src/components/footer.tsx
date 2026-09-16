import Link from "next/link";
import { Container } from "./container";
import { BRAND_NAME, SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-off/10 py-12">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-sm text-off/50">
          <span className="font-display text-base font-semibold text-off">
            {BRAND_NAME}
          </span>
          <span>{SITE_CONFIG.location}</span>
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="w-fit text-amber transition-colors hover:text-amber-dark"
          >
            {SITE_CONFIG.email}
          </Link>
        </div>
        <ul className="flex items-center gap-6 text-sm text-blue">
          <li>
            <Link
              href={SITE_CONFIG.social.linkedin}
              className="transition-opacity hover:opacity-80"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={SITE_CONFIG.social.instagram}
              className="transition-opacity hover:opacity-80"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
