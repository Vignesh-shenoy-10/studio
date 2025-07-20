"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Cog } from "lucide-react";

import { BarChartComponent } from "./charts/bar-chart";
import { LineChartComponent } from "./charts/line-chart";
import { AreaChartComponent } from "./charts/area-chart";
import { PieChartComponent } from "./charts/pie-chart";
import { ChartCustomizationSheet } from "./chart-customization-sheet";
import type { ChartConfig } from "./ui/chart";
import { cn } from "@/lib/utils";

type ChartCardProps = {
  title: string;
  description: string;
  chartType: "bar" | "line" | "area" | "pie";
  data: any[];
  chartConfig: ChartConfig;
  categoryKey: string;
  dataKey?: string; // for pie chart
  dataKeys?: string[]; // for other charts
  showSwitcher?: boolean;
} & ComponentProps<typeof Card>;

export function ChartCard({
  title,
  description,
  chartType,
  data,
  chartConfig,
  categoryKey,
  dataKey,
  dataKeys,
  showSwitcher = true,
  className,
  ...props
}: ChartCardProps) {
  const [currentChartType, setCurrentChartType] = useState(chartType);
  const [isCustomizationOpen, setCustomizationOpen] = useState(false);

  const renderChart = () => {
    switch (currentChartType) {
      case "bar":
        return (
          <BarChartComponent
            data={data}
            config={chartConfig}
            categoryKey={categoryKey}
            dataKeys={dataKeys || []}
          />
        );
      case "line":
        return (
          <LineChartComponent
            data={data}
            config={chartConfig}
            categoryKey={categoryKey}
            dataKeys={dataKeys || []}
          />
        );
      case "area":
        return (
          <AreaChartComponent
            data={data}
            config={chartConfig}
            categoryKey={categoryKey}
            dataKeys={dataKeys || []}
          />
        );
      case "pie":
        return (
          <PieChartComponent
            data={data}
            config={chartConfig}
            nameKey={categoryKey}
            dataKey={dataKey || ""}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex shrink-0 gap-2">
            {showSwitcher && chartType !== "pie" && (
              <Select
                value={currentChartType}
                onValueChange={(value) =>
                  setCurrentChartType(value as "bar" | "line" | "area")
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select Chart" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Bar</SelectItem>
                  <SelectItem value="line">Line</SelectItem>
                  <SelectItem value="area">Area</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCustomizationOpen(true)}
            >
              <Cog className="h-4 w-4" />
              <span className="sr-only">Customize</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">{renderChart()}</CardContent>
      <ChartCustomizationSheet
        open={isCustomizationOpen}
        onOpenChange={setCustomizationOpen}
      />
    </Card>
  );
}
