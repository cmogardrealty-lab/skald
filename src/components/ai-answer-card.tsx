const SOURCES = ["Local Eats Review", "Fargo Weekly", "Prairie Smoke BBQ"];

export function AiAnswerCard() {
  return (
    <div className="rounded-[13px] bg-gradient-to-br from-frost/15 via-frost/5 to-transparent p-px shadow-[0_30px_80px_-25px_rgba(0,0,0,0.6)]">
      <div className="rounded-[12px] bg-basalt p-6 font-mono sm:p-8">
        <p className="text-xs text-ash">best BBQ in Fargo?</p>
        <p className="mt-4 text-base leading-relaxed text-frost">
          Based on recent reviews and local coverage,{" "}
          <mark className="highlight-sweep">Prairie Smoke BBQ</mark> is the
          spot people keep recommending for brisket and burnt ends.
        </p>
        <p className="mt-6 text-[11px] text-ash">Sources</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {SOURCES.map((source) => (
            <li
              key={source}
              className="rounded-full border border-slate px-3 py-1 text-[11px] text-ash"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
