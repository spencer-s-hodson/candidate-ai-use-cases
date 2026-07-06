import { UseCasesTabs } from "@/components/use-cases-tabs";
import { CATEGORIES, DISCLAIMER, HERO, USE_CASES } from "@/lib/use-cases";

const STATS = [
  { value: String(USE_CASES.length), label: "AI use cases mapped" },
  { value: HERO.impactStat, label: "Est. annual impact" },
  { value: String(CATEGORIES.length), label: "Business domains" },
];

export default function Home() {
  return (
    <div className="flex-1 bg-slate-50 dark:bg-background">
      <section className="bg-gradient-to-br from-[#081a3a] via-[#0a1f44] to-[#0d2a5e] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-12">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance">
            {HERO.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            {HERO.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-12 border-t border-white/10 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-6 py-8">
        <UseCasesTabs />
        <p className="mt-12 pb-4 text-center text-xs text-muted-foreground">
          {DISCLAIMER}
        </p>
      </main>
    </div>
  );
}
