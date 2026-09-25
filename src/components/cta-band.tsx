import { AuditCtaButton } from "./audit-cta-button";
import { Container } from "./container";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="hairline bg-basalt py-20">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="cta-heading"
          className="max-w-[36ch] font-display text-2xl font-semibold leading-snug tracking-tight text-frost sm:text-3xl"
        >
          See where you stand. The audit is free, and the gaps are yours to
          keep.
        </h2>
        <AuditCtaButton className="shrink-0 rounded-md bg-ember px-6 py-3 text-base font-medium text-obsidian transition-colors duration-200 hover:bg-ember-dark">
          Get a free audit
        </AuditCtaButton>
      </Container>
    </section>
  );
}
