export function PlaceholderMedia({ label }: { label: string }) {
  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md bg-obsidian"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(231,234,239,0.05) 0px, rgba(231,234,239,0.05) 1px, transparent 1px, transparent 10px)",
      }}
    >
      <span className="rounded-full border border-slate bg-obsidian/60 px-3 py-1 font-mono text-xs text-ash backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
