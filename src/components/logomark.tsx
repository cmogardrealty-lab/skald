import Image from "next/image";

export function Logomark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logos/logo-plain-transparent.png"
      alt=""
      aria-hidden="true"
      width={581}
      height={546}
      priority
      className={`inline-block h-[1.1em] w-auto align-middle ${className}`}
    />
  );
}
