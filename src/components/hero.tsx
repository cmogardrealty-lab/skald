import Link from "next/link";
import { Container } from "./container";
import { AiAnswerCard } from "./ai-answer-card";
import { AUDIT_MAILTO } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[3fr_2fr]">
        <div>
          <h1
            id="hero-heading"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-off sm:text-6xl lg:text-7xl"
          >
            Be the answer they land on.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-off/70 sm:text-xl">
            Tool-assisted web design and SEO, built for the age of AI search.
            Faster than an agency, run by a human, sharper than a bot.
          </p>
          <Link
            href={AUDIT_MAILTO}
            className="mt-8 inline-block rounded-md bg-amber px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-amber-dark"
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
