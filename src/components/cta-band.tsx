import Link from "next/link";
import { Container } from "./container";
import { AUDIT_MAILTO } from "@/lib/site-config";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="hairline bg-slate py-20">
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
          className="shrink-0 rounded-md bg-amber px-6 py-3 text-base font-medium text-ink shadow-[0_10px_30px_-10px_rgba(244,183,64,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-dark hover:shadow-[0_14px_36px_-8px_rgba(244,183,64,0.7)] active:translate-y-0"
        >
          Get a free audit
        </Link>
      </Container>
    </section>
  );
}
