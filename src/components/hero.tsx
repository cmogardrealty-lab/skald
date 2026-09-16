import Link from "next/link";
import { Container } from "./container";
import { AiAnswerCard } from "./ai-answer-card";
import { AUDIT_MAILTO } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(236,234,227,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-amber/20 blur-[120px]"
      />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[3fr_2fr]">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.75rem,4.5vw+1.25rem,5rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-off"
          >
            Be the answer they land on.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-off/70 sm:text-xl">
            Tool-assisted web design and SEO, built for the age of AI search.
            Faster than an agency, run by a human, sharper than a bot.
          </p>
          <Link
            href={AUDIT_MAILTO}
            className="mt-8 inline-block rounded-md bg-amber px-6 py-3 text-base font-medium text-ink shadow-[0_10px_30px_-10px_rgba(244,183,64,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-dark hover:shadow-[0_14px_36px_-8px_rgba(244,183,64,0.7)] active:translate-y-0"
          >
            Get a free audit
          </Link>
        </div>
        <div>
          <AiAnswerCard />
          <p className="mt-4 text-sm text-off/50">
            This is what we sell. Your business, cited as the answer.
          </p>
        </div>
      </Container>
    </section>
  );
}
