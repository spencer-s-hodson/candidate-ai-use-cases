"use client";

import { useState } from "react";
import Link from "next/link";

import { MetricChart } from "@/components/metric-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CATEGORIES, type UseCase } from "@/lib/use-cases";

const STATUS_LABELS: Record<NonNullable<UseCase["status"]>, string> = {
  live: "Live",
  pilot: "Pilot",
  planned: "Planned",
};

const STATUS_VARIANTS: Record<
  NonNullable<UseCase["status"]>,
  "default" | "secondary" | "outline"
> = {
  live: "default",
  pilot: "secondary",
  planned: "outline",
};

export function InitiativeCard({ useCase }: { useCase: UseCase }) {
  const [flipped, setFlipped] = useState(false);
  const category = CATEGORIES.find((cat) => cat.id === useCase.category);
  const accent = category?.accent ?? "#1c6cc8";

  const handleFlip = () => setFlipped((current) => !current);

  return (
    <div
      className="group h-full min-h-[300px] cursor-pointer perspective-[1200px]"
      onClick={handleFlip}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${useCase.title}. Click to ${flipped ? "show impact metrics" : "show details"}.`}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front: measured impact (PDF style) */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          <Card className="relative flex h-full flex-col gap-3 overflow-hidden bg-white pt-5 shadow-sm ring-black/5 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg dark:bg-card">
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ backgroundColor: accent }}
            />
            <div className="flex items-start justify-between gap-2 px-(--card-spacing)">
              <span
                className="text-[10px] font-bold tracking-[0.14em] uppercase"
                style={{ color: accent }}
              >
                Measured Impact
              </span>
              <span className="text-right text-xs text-muted-foreground">
                {useCase.title}
              </span>
            </div>
            <div className="px-(--card-spacing)">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  {useCase.metric}
                </span>
                {useCase.delta && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    {useCase.delta.direction === "up" ? "\u25B2" : "\u25BC"}{" "}
                    {useCase.delta.value}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {useCase.metricLabel}
              </p>
            </div>
            <div className="flex-1 px-(--card-spacing)">
              <MetricChart chart={useCase.chart} accent={accent} />
            </div>
            <div className="flex items-center justify-between border-t px-(--card-spacing) pt-3 pb-1">
              <p className="text-xs text-muted-foreground">
                {useCase.chart.caption}
              </p>
              <span
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold"
                style={{ color: accent }}
              >
                {"\u21BA"} Flip
              </span>
            </div>
          </Card>
        </div>

        {/* Back: use case details */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="relative flex h-full flex-col gap-3 overflow-hidden bg-white pt-5 shadow-sm ring-black/5 dark:bg-card">
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ backgroundColor: accent }}
            />
            <div className="flex items-start justify-between gap-3 px-(--card-spacing)">
              <span
                className="text-[10px] font-bold tracking-[0.14em] uppercase"
                style={{ color: accent }}
              >
                {category?.label}
              </span>
              {useCase.status && (
                <Badge variant={STATUS_VARIANTS[useCase.status]}>
                  {STATUS_LABELS[useCase.status]}
                </Badge>
              )}
            </div>
            <div className="flex-1 px-(--card-spacing)">
              <h3 className="font-heading text-lg leading-snug font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              {useCase.owner && (
                <div className="mt-4">
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Owner
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">{useCase.owner}</p>
                </div>
              )}
              {useCase.href && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-fit"
                  asChild
                  onClick={(event) => event.stopPropagation()}
                >
                  <Link href={useCase.href}>Learn more</Link>
                </Button>
              )}
            </div>
            <div className="flex items-center justify-end border-t px-(--card-spacing) pt-3 pb-1">
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: accent }}
              >
                {"\u21BA"} Back
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
