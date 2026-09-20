import { Container } from "./container";

const CATEGORIES = [
  { label: "Technical SEO", before: 40, after: 85 },
  { label: "Content structure", before: 25, after: 80 },
  { label: "Site speed", before: 50, after: 90 },
  { label: "AI citations", before: 10, after: 60 },
];

export function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="hairline py-20 sm:py-28">
      <Container>
        <p className="font-mono text-xs text-ash">the report card</p>
        <h2
          id="proof-heading"
          className="mt-3 max-w-[26ch] font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl"
        >
          We score you before, and we score you again.
        </h2>
        <p className="mt-6 max-w-[70ch] text-lg leading-relaxed text-ash">
          Every engagement opens with a readiness score and closes each
          quarter with a new one. Here is what movement looks like: from{" "}
          <mark className="rounded bg-ember px-1 text-obsidian">31</mark>{" "}
          <span className="text-ash">to</span>{" "}
          <mark className="rounded bg-ember px-1 text-obsidian">78</mark>.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.label}>
                <div className="flex items-baseline justify-between text-sm text-ash">
                  <span>{category.label}</span>
                  <span className="font-mono tabular-nums">
                    {category.before} <span className="text-ash/70">to</span>{" "}
                    <span className="font-medium text-frost">{category.after}</span>
                  </span>
                </div>
                <div className="relative mt-3 h-1.5 w-full rounded-full bg-slate">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-ember-dark to-ember"
                    style={{ width: `${category.after}%` }}
                  />
                  <div
                    className="absolute top-1/2 h-3 w-[3px] -translate-y-1/2 rounded-full bg-frost/60"
                    style={{ left: `calc(${category.before}% - 1.5px)` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[13px] bg-gradient-to-br from-frost/15 via-frost/5 to-transparent p-px">
            <div className="rounded-[12px] bg-basalt p-6 font-mono sm:p-8">
              <p className="text-xs text-ash">AI citation check</p>
              <p className="mt-4 text-ash">March: not mentioned.</p>
              <p className="mt-2 text-base text-frost">
                June:{" "}
                <mark className="rounded bg-ember px-1 text-obsidian">cited.</mark>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[65ch] text-base leading-relaxed text-ash/80">
          Scores and technical fixes move immediately. Rankings and citations
          lag sixty to ninety days. We show you dated proof, and we never
          promise a position we cannot control.
        </p>
      </Container>
    </section>
  );
}
