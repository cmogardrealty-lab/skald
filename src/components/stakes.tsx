import { Container } from "./container";

export function Stakes() {
  return (
    <section aria-labelledby="stakes-heading" className="hairline py-20 sm:py-28">
      <Container>
        <p className="font-mono text-xs text-ash">the shift</p>
        <h2
          id="stakes-heading"
          className="mt-3 max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl"
        >
          Google and the AI answer are no longer the same thing.
        </h2>
        <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-ash">
          For years, ranking on Google meant getting found. Now people ask
          ChatGPT, Perplexity, and Google&apos;s own AI, and those engines
          cite their own shortlist. Google&apos;s AI leans on the same search
          foundations, but ChatGPT and Perplexity read the web differently,
          and the sources they quote often do not even rank on page one.
          Optimize for one and you can be invisible on the others. We build
          for all of them.
        </p>
      </Container>
    </section>
  );
}
