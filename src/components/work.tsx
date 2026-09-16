import { Container } from "./container";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-off/10 py-20 sm:py-28">
      <Container>
        <h2
          id="work-heading"
          className="font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          Recent work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <article className="grid grid-cols-1 gap-6 rounded-lg border border-off/10 bg-slate p-8 lg:grid-cols-[2fr_3fr]">
            <div className="flex aspect-video items-center justify-center rounded-md bg-ink text-sm text-off/50 lg:aspect-auto">
              Screenshot placeholder
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold text-off">
                Wall Street Realty
              </h3>
              <p className="mt-3 max-w-[52ch] leading-relaxed text-off/70">
                Full site re-imagining with SEO and GEO.
              </p>
              <p className="mt-3 text-sm text-off/60">
                [Add real metric: organic sessions or lead lift]
              </p>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="rounded-lg border border-off/10 p-6">
              <div className="flex aspect-video items-center justify-center rounded-md bg-slate text-sm text-off/60">
                Screenshot placeholder
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-off">
                The Launchpad
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-off/60">
                A custom listing-management app built from scratch. Proof we
                build tools, not just pages.
              </p>
            </article>

            <article className="rounded-lg border border-off/10 p-6">
              <div className="flex aspect-video items-center justify-center rounded-md bg-slate text-sm text-off/60">
                Video placeholder
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-off">
                Listing video
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-off/60">
                Cinematic property reels, shot and cut in house.
              </p>
            </article>

            <article className="flex flex-col items-start justify-center rounded-lg border border-dashed border-off/20 p-6">
              <h3 className="font-display text-lg font-semibold text-off">
                Your project next.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-off/60">
                One slot opens each quarter for a new re-imagining.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
