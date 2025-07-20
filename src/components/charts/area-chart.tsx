"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

type AreaChartProps = {
  data: any[];
  config: ChartConfig;
  dataKeys: string[];
  categoryKey: string;
};

export function AreaChartComponent({
  data,
  config,
  dataKeys,
  categoryKey,
}: AreaChartProps) {
  return (
    <ChartContainer config={config} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={categoryKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          fontSize={12}
        />
        <YAxis tickLine={false} axisLine={false} fontSize={12} />
        <ChartTooltip content={<ChartTooltipContent />} />
        {dataKeys.length > 1 && <ChartLegend content={<ChartLegendContent />} />}
        {dataKeys.map((key) => (
          <defs key={`defs-${key}`}>
            <linearGradient id={`fill-${key}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={`var(--color-${key})`}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={`var(--color-${key})`}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
        ))}
        {dataKeys.map((key) => (
          <Area
            key={key}
            dataKey={key}
            type="natural"
            fill={`url(#fill-${key})`}
            stroke={`var(--color-${key})`}
            stackId="a"
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
}
