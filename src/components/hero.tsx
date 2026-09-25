import { AuditCtaButton } from "./audit-cta-button";
import { Container } from "./container";
import { AiAnswerCard } from "./ai-answer-card";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(231,234,239,0.06)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-ember/15 blur-[120px]"
      />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[3fr_2fr]">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,4.5vw+1.25rem,5rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-frost"
          >
            Be the answer they land on.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ash sm:text-xl">
            Tool-assisted web design and SEO, built for the age of AI search.
            Faster than an agency, run by a human, sharper than a bot.
          </p>
          <AuditCtaButton className="mt-8 inline-block rounded-md bg-ember px-6 py-3 text-base font-medium text-obsidian shadow-[0_10px_30px_-10px_rgba(245,176,46,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ember-dark hover:shadow-[0_14px_36px_-8px_rgba(245,176,46,0.65)] active:translate-y-0">
            Get a free audit
          </AuditCtaButton>
        </div>
        <div>
          <AiAnswerCard />
          <p className="mt-4 text-sm text-ash">
            This is what we sell. Your business, cited as the answer.
          </p>
        </div>
      </Container>
    </section>
  );
}
