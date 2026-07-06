import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081a3a] text-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:h-20">
        <Link href="/" className="relative block h-9 aspect-[9/2] shrink-0 sm:h-10">
          <Image
            src="/northrop-grumman-logo.png"
            alt="Northrop Grumman"
            fill
            className="object-contain object-left mix-blend-screen"
            priority
            sizes="(min-width: 640px) 180px, 162px"
          />
        </Link>
        <span className="shrink-0 text-right text-[9px] leading-tight font-bold tracking-[0.18em] text-white/60 uppercase sm:text-[10px] sm:tracking-[0.22em]">
          AI Opportunity Brief · 2026
        </span>
      </div>
    </header>
  );
}
