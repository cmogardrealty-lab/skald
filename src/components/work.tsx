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
        <p className="font-mono text-xs text-ash">selected work</p>
        <h2
          id="work-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl"
        >
          Recent work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <div className="rounded-[13px] bg-gradient-to-br from-frost/12 via-frost/5 to-transparent p-px">
            <article className="grid grid-cols-1 gap-6 rounded-[12px] bg-basalt p-8 lg:grid-cols-[2fr_3fr]">
              <PlaceholderMedia label="Screenshot placeholder" />
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-2xl font-semibold text-frost">
                  Wall Street Realty
                </h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-ash">
                  Full site re-imagining with SEO and GEO.
                </p>
                <p className="mt-3 font-mono text-sm text-ash">
                  [Add real metric: organic sessions or lead lift]
                </p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="rounded-lg border border-slate p-6">
              <PlaceholderMedia label="Screenshot placeholder" />
              <h3 className="mt-4 font-display text-lg font-semibold text-frost">
                The Launchpad
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                A custom listing-management app built from scratch. Proof we
                build tools, not just pages.
              </p>
            </article>

            <article className="rounded-lg border border-slate p-6">
              <PlaceholderMedia label="Video placeholder" />
              <h3 className="mt-4 font-display text-lg font-semibold text-frost">
                Listing video
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                Cinematic property reels, shot and cut in house.
              </p>
            </article>

            <article className="flex flex-col items-start justify-center rounded-lg border border-dashed border-slate p-6">
              <h3 className="font-display text-lg font-semibold text-frost">
                Your project next.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                One slot opens each quarter for a new re-imagining.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
