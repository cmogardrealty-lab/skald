import { Container } from "./container";

const CATEGORIES = [
  { label: "Technical SEO", before: 40, after: 85 },
  { label: "Content structure", before: 25, after: 80 },
  { label: "Site speed", before: 50, after: 90 },
  { label: "AI citations", before: 10, after: 60 },
];

export function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="border-t border-off/10 py-20 sm:py-28">
      <Container>
        <h2
          id="proof-heading"
          className="max-w-[26ch] font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          We score you before, and we score you again.
        </h2>
        <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-off/70">
          Every engagement opens with a readiness score and closes each
          quarter with a new one. Here is what movement looks like: from{" "}
          <mark className="rounded bg-amber px-1 text-ink">31</mark>{" "}
          <span className="text-off/60">to</span>{" "}
          <mark className="rounded bg-amber px-1 text-ink">78</mark>.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.label}>
                <div className="flex items-baseline justify-between text-sm text-off/60">
                  <span>{category.label}</span>
                  <span>
                    {category.before} <span className="text-off/50">to</span>{" "}
                    <span className="font-medium text-off">{category.after}</span>
                  </span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-off/10">
                  <div
                    className="h-2 rounded-full bg-off/25"
                    style={{ width: `${category.before}%` }}
                  />
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-off/10">
                  <div
                    className="h-2 rounded-full bg-amber"
                    style={{ width: `${category.after}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-off/10 bg-slate p-6 sm:p-8">
            <p className="text-sm font-medium text-off/60">AI citation check</p>
            <p className="mt-4 text-off/60">March: not mentioned.</p>
            <p className="mt-2 text-lg text-off">
              June:{" "}
              <mark className="rounded bg-amber px-1 text-ink">cited.</mark>
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[65ch] text-base leading-relaxed text-off/50">
          Scores and technical fixes move immediately. Rankings and citations
          lag sixty to ninety days. We show you dated proof, and we never
          promise a position we cannot control.
        </p>
      </Container>
    </section>
  );
}
