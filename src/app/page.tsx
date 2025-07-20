import { DashboardHeader } from "@/components/dashboard-header";
import { ChartCard } from "@/components/chart-card";
import {
  monthlySales,
  trafficSources,
  userActivity,
  chartConfig,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardHeader />
      <main className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          <ChartCard
            title="Monthly Sales"
            description="An overview of sales performance per month."
            chartType="bar"
            data={monthlySales}
            chartConfig={chartConfig}
            categoryKey="month"
            dataKeys={["sales"]}
            className="lg:col-span-4"
          />
          <ChartCard
            title="Traffic Sources"
            description="Breakdown of website traffic by source."
            chartType="pie"
            data={trafficSources}
            chartConfig={chartConfig}
            categoryKey="source"
            dataKey="visitors"
            showSwitcher={false}
            className="lg:col-span-3"
          />
          <ChartCard
            title="User Activity"
            description="Daily signups and logins."
            chartType="line"
            data={userActivity}
            chartConfig={chartConfig}
            categoryKey="date"
            dataKeys={["signups", "logins"]}
            className="lg:col-span-7"
          />
        </div>
      </main>
    </div>
  );
}
