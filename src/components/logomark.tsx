export function Logomark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`inline-block h-[0.9em] w-[0.9em] align-middle ${className}`}
    >
      <rect x="3" y="17" width="18" height="4" rx="1.4" fill="currentColor" opacity="0.5" />
      <rect x="5.5" y="12" width="13" height="4" rx="1.4" fill="currentColor" opacity="0.72" />
      <rect x="8" y="7.4" width="8" height="3.9" rx="1.3" fill="currentColor" />
      <rect x="9.6" y="3" width="4.8" height="3.6" rx="1.2" fill="var(--color-ember)" />
    </svg>
  );
}
