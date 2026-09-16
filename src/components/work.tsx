import { Container } from "./container";
import { PlaceholderMedia } from "./placeholder-media";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="hairline scroll-mt-20 py-20 sm:py-28"
    >
      <Container>
        <h2
          id="work-heading"
          className="font-display text-3xl font-semibold tracking-tight text-off sm:text-4xl"
        >
          Recent work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <div className="rounded-[13px] bg-gradient-to-br from-off/15 via-off/5 to-transparent p-px">
            <article className="grid grid-cols-1 gap-6 rounded-[12px] bg-slate p-8 lg:grid-cols-[2fr_3fr]">
              <PlaceholderMedia label="Screenshot placeholder" />
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
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="rounded-lg border border-off/10 p-6">
              <PlaceholderMedia label="Screenshot placeholder" />
              <h3 className="mt-4 font-display text-lg font-semibold text-off">
                The Launchpad
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-off/60">
                A custom listing-management app built from scratch. Proof we
                build tools, not just pages.
              </p>
            </article>

            <article className="rounded-lg border border-off/10 p-6">
              <PlaceholderMedia label="Screenshot placeholder" />
              <h3 className="mt-4 font-display text-lg font-semibold text-off">
                Content system
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-off/60">
                Structured content and schema built to be legible to AI
                answer engines, not just search crawlers.
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
