import { Container } from "./container";

const MOVES = [
  {
    number: "01",
    title: "Audit",
    body: "We measure where you stand in search and in AI answers today, then hand you the gaps in plain language. It is the map for everything after.",
  },
  {
    number: "02",
    title: "Re-imagine",
    body: "We rebuild the site so it is fast, clear, and structured for how search engines and AI actually read a page. Baked in, not bolted on.",
  },
  {
    number: "03",
    title: "Grow",
    body: "AI answers shift constantly and authority compounds. We track your citations, tune, and report every month, so the results keep climbing.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="hairline scroll-mt-20 py-20 sm:py-28"
    >
      <Container>
        <h2
          id="how-it-works-heading"
          className="font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          Audit. Re-imagine. Grow.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-display text-sm text-off/60">
              {MOVES[0].number}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-off">
              {MOVES[0].title}
            </h3>
            <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-off/70">
              {MOVES[0].body}
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            {MOVES.slice(1).map((move) => (
              <div key={move.number}>
                <span className="font-display text-sm text-off/60">
                  {move.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-off">
                  {move.title}
                </h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-off/70">
                  {move.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
