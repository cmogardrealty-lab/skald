import { Container } from "./container";

export function ToolAssisted() {
  return (
    <section aria-labelledby="tool-assisted-heading" className="hairline py-20 sm:py-28">
      <Container>
        <h2
          id="tool-assisted-heading"
          className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          Tool-assisted, human-run.
        </h2>
        <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-off/70">
          The tools make this fast and affordable. A person makes it good.
          You get the speed of automation with the judgment of someone who
          has done the work, reads the page like a human, and stands behind
          the result. That is the part a bot cannot fake.
        </p>
      </Container>
    </section>
  );
}
