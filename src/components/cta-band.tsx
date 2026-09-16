import Link from "next/link";
import { Container } from "./container";
import { AUDIT_MAILTO } from "@/lib/site-config";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-off/10 bg-slate py-20">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="cta-heading"
          className="max-w-[36ch] font-display text-2xl font-semibold leading-snug tracking-tight text-off sm:text-3xl"
        >
          See where you stand. The audit is free, and the gaps are yours to
          keep.
        </h2>
        <Link
          href={AUDIT_MAILTO}
          className="shrink-0 rounded-md bg-amber px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-amber-dark"
        >
          Get a free audit
        </Link>
      </Container>
    </section>
  );
}
