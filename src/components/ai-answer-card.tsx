const SOURCES = ["Local Eats Review", "Fargo Weekly", "Prairie Smoke BBQ"];

export function AiAnswerCard() {
  return (
    <div className="rounded-[13px] bg-gradient-to-br from-off/20 via-off/5 to-transparent p-px shadow-[0_30px_80px_-25px_rgba(0,0,0,0.6)]">
      <div className="rounded-[12px] bg-slate p-6 sm:p-8">
        <p className="text-sm text-off/60">best BBQ in Fargo?</p>
        <p className="mt-4 text-lg leading-relaxed text-off">
          Based on recent reviews and local coverage,{" "}
          <mark className="highlight-sweep">Prairie Smoke BBQ</mark> is the
          spot people keep recommending for brisket and burnt ends.
        </p>
        <p className="mt-6 text-xs text-off/60">Sources</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {SOURCES.map((source) => (
            <li
              key={source}
              className="rounded-full border border-off/10 px-3 py-1 text-xs text-off/60"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
