import type { ChartConfig } from "@/components/ui/chart";

export const monthlySales = [
  { month: "Jan", sales: 1230 },
  { month: "Feb", sales: 2145 },
  { month: "Mar", sales: 1876 },
  { month: "Apr", sales: 2589 },
  { month: "May", sales: 2341 },
  { month: "Jun", sales: 3012 },
  { month: "Jul", sales: 2879 },
  { month: "Aug", sales: 3456 },
  { month: "Sep", sales: 3123 },
  { month: "Oct", sales: 3789 },
  { month: "Nov", sales: 4123 },
  { month: "Dec", sales: 4567 },
];

export const trafficSources = [
  { source: "Google", visitors: 12450, fill: "hsl(var(--chart-1))" },
  { source: "Facebook", visitors: 7543, fill: "hsl(var(--chart-2))" },
  { source: "Twitter", visitors: 4321, fill: "hsl(var(--chart-3))" },
  { source: "Direct", visitors: 9876, fill: "hsl(var(--chart-4))" },
  { source: "Other", visitors: 2345, fill: "hsl(var(--chart-5))" },
];

export const userActivity = [
  { date: "2024-07-01", signups: 23, logins: 154 },
  { date: "2024-07-02", signups: 34, logins: 189 },
  { date: "2024-07-03", signups: 28, logins: 201 },
  { date: "2024-07-04", signups: 45, logins: 234 },
  { date: "2024-07-05", signups: 38, logins: 210 },
  { date: "2024-07-06", signups: 51, logins: 256 },
  { date: "2024-07-07", signups: 42, logins: 243 },
];

export const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
  signups: {
    label: "Sign-ups",
    color: "hsl(var(--chart-1))",
  },
  logins: {
    label: "Log-ins",
    color: "hsl(var(--chart-2))",
  },
  source: {
    label: "Source",
  },
} satisfies ChartConfig;
