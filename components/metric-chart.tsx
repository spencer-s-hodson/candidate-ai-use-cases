"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import type { UseCaseChart } from "@/lib/use-cases";

type MetricChartProps = {
  chart: UseCaseChart;
  accent: string;
};

const CHART_CLASS =
  "aspect-auto h-28 w-full [&_.recharts-cartesian-axis-tick_text]:font-[family-name:inherit] [&_.recharts-text]:font-[family-name:inherit]";

export function MetricChart({ chart, accent }: MetricChartProps) {
  const config: ChartConfig = {
    value: { label: "Value", color: accent },
  };

  if (chart.kind === "progress") {
    return (
      <div className="flex h-28 w-full flex-col justify-center gap-2.5">
        {chart.data.map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">{row.label}</span>
              <span className="font-semibold text-foreground">{row.value}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: `${row.value}%`, backgroundColor: accent }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (chart.kind === "donut") {
    const percent = chart.data[0];
    return (
      <div className="flex h-28 w-full items-center gap-4">
        <div className="relative h-24 w-24 shrink-0">
          <ChartContainer config={config} className="aspect-square h-24 w-24 [&_.recharts-text]:font-[family-name:inherit]">
            <RadialBarChart
              data={[{ value: percent.value }]}
              startAngle={90}
              endAngle={-270}
              innerRadius={38}
              outerRadius={48}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                dataKey="value"
                angleAxisId={0}
                background
                cornerRadius={10}
                fill={accent}
              />
            </RadialBarChart>
          </ChartContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-foreground">
              {percent.value}%
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{percent.label}</p>
      </div>
    );
  }

  if (chart.kind === "bar") {
    const lastIndex = chart.data.length - 1;
    return (
      <ChartContainer config={config} className={CHART_CLASS}>
        <BarChart data={chart.data} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            fontSize={11}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chart.data.map((entry, index) => (
              <Cell
                key={entry.label}
                fill={accent}
                fillOpacity={index === lastIndex ? 1 : 0.25}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    );
  }

  return (
    <ChartContainer config={config} className={CHART_CLASS}>
      <AreaChart data={chart.data} margin={{ top: 8, right: 4, bottom: 4, left: 4 }}>
        <XAxis dataKey="label" hide />
        <Area
          dataKey="value"
          type="monotone"
          stroke={accent}
          strokeWidth={2}
          fill={accent}
          fillOpacity={0.12}
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}
