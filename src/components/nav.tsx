"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Logomark } from "./logomark";
import { AUDIT_MAILTO, BRAND_NAME, NAV_LINKS } from "@/lib/site-config";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-off/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-off"
        >
          {BRAND_NAME}
          <Logomark />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm text-off/80 transition-colors hover:text-off"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={AUDIT_MAILTO}
            className="rounded-md bg-amber px-4 py-2 text-sm font-medium text-ink shadow-[0_6px_20px_-8px_rgba(244,183,64,0.7)] transition-all duration-200 hover:-translate-y-px hover:bg-amber-dark hover:shadow-[0_8px_24px_-6px_rgba(244,183,64,0.8)] active:translate-y-0"
          >
            Get a free audit
          </Link>
        </nav>
      </Container>
    </header>
  );
}
