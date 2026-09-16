import { Container } from "./container";

export function Stakes() {
  return (
    <section aria-labelledby="stakes-heading" className="hairline py-20 sm:py-28">
      <Container>
        <h2
          id="stakes-heading"
          className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          Google and the AI answer are no longer the same thing.
        </h2>
        <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-off/70">
          For years, ranking on Google meant getting found. Now people ask
          ChatGPT, Perplexity, and Google&apos;s own AI, and those engines
          cite their own shortlist. The overlap between the top Google links
          and the sources AI actually quotes has fallen off a cliff. Optimize
          for one and you can be invisible on the other. We build for both.
        </p>
      </Container>
    </section>
  );
}
