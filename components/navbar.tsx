import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081a3a] text-white">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/northrop-grumman-logo.png"
            alt="Northrop Grumman"
            width={320}
            height={72}
            className="h-14 w-auto mix-blend-screen"
            priority
          />
        </Link>
        <span className="hidden text-[10px] font-bold tracking-[0.22em] text-white/60 uppercase sm:block">
          AI Opportunity Brief · 2026
        </span>
      </div>
    </header>
  );
}
