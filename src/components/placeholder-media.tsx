export function PlaceholderMedia({ label }: { label: string }) {
  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md bg-ink"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(236,234,227,0.05) 0px, rgba(236,234,227,0.05) 1px, transparent 1px, transparent 10px)",
      }}
    >
      <span className="rounded-full border border-off/15 bg-ink/60 px-3 py-1 text-xs text-off/50 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
