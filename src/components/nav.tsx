"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Logomark } from "./logomark";
import {
  AUDIT_MAILTO,
  BRAND_NAME,
  NAV_LINKS,
  PARENT_NAME,
} from "@/lib/site-config";

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
          ? "border-b border-slate bg-obsidian/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#top" className="flex flex-col leading-none">
          <span className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-frost">
            <Logomark />
            {BRAND_NAME}
          </span>
          <span className="mt-1 font-mono text-[11px] text-ash">
            by {PARENT_NAME}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm text-frost/80 transition-colors hover:text-frost"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={AUDIT_MAILTO}
            className="rounded-md bg-ember px-4 py-2 text-sm font-medium text-obsidian transition-colors duration-200 hover:bg-ember-dark"
          >
            Get a free audit
          </Link>
        </nav>
      </Container>
    </header>
  );
}
