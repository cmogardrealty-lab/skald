import Link from "next/link";
import { Container } from "./container";
import { AUDIT_MAILTO, BRAND_NAME, NAV_LINKS } from "@/lib/site-config";

export function Nav() {
  return (
    <header className="border-b border-off/10">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-off"
        >
          {BRAND_NAME}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-off/80 transition-colors hover:text-off"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={AUDIT_MAILTO}
            className="rounded-md bg-amber px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-amber-dark"
          >
            Get a free audit
          </Link>
        </nav>
      </Container>
    </header>
  );
}
