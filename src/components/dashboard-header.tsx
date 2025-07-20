import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart2 } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <BarChart2 className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">DataCanvas</h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://placehold.co/40x40.png"
            alt="User Avatar"
            data-ai-hint="avatar user"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
