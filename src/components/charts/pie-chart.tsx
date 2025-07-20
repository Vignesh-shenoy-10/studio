"use client";

import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

type PieChartProps = {
  data: any[];
  config: ChartConfig;
  dataKey: string;
  nameKey: string;
};

export function PieChartComponent({
  data,
  config,
  dataKey,
  nameKey,
}: PieChartProps) {
  return (
    <ChartContainer config={config} className="mx-auto aspect-square max-h-[350px]">
      <PieChart accessibilityLayer>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={60}
          strokeWidth={5}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey={nameKey} />}
          className="-mt-4"
        />
      </PieChart>
    </ChartContainer>
  );
}
