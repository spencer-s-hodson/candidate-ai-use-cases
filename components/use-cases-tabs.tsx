"use client";

import { InitiativeCard } from "@/components/initiative-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES, USE_CASES } from "@/lib/use-cases";
import { cn } from "@/lib/utils";

const PILL_CLASSES = cn(
  "h-8 flex-none rounded-full border border-border bg-white px-4 text-xs font-semibold text-muted-foreground shadow-sm transition-colors dark:bg-card",
  "hover:text-foreground",
  "group-data-[variant=line]/tabs-list:data-active:!border-[#1c6cc8] group-data-[variant=line]/tabs-list:data-active:!bg-[#1c6cc8] group-data-[variant=line]/tabs-list:data-active:!text-white",
  "data-active:!border-[#1c6cc8] data-active:!bg-[#1c6cc8] data-active:!text-white",
  "after:hidden"
);

function CountBadge({ count }: { count: number }) {
  return (
    <span
      className={cn(
        "ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold",
        "bg-muted text-muted-foreground",
        "group-data-active/pill:!bg-white/25 group-data-active/pill:!text-white"
      )}
    >
      {count}
    </span>
  );
}

export function UseCasesTabs() {
  const filters = [
    { id: "all", label: "All", count: USE_CASES.length },
    ...CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.label,
      count: USE_CASES.filter((uc) => uc.category === cat.id).length,
    })),
  ];

  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
        <span className="text-[11px] font-bold tracking-[0.14em] text-muted-foreground uppercase sm:shrink-0 sm:pt-1.5">
          Filter
        </span>
        <TabsList
          variant="line"
          className="!h-auto min-h-8 w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:min-w-0 sm:flex-1"
        >
          {filters.map((filter) => (
            <TabsTrigger
              key={filter.id}
              value={filter.id}
              className={cn("group/pill", PILL_CLASSES)}
            >
              {filter.label}
              <CountBadge count={filter.count} />
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {filters.map((filter) => (
        <TabsContent key={filter.id} value={filter.id} className="mt-6 w-full flex-none">
          <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.filter(
              (uc) => filter.id === "all" || uc.category === filter.id
            ).map((uc) => (
              <InitiativeCard key={uc.id} useCase={uc} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
