"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type ChartCustomizationSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ChartCustomizationSheet({
  open,
  onOpenChange,
}: ChartCustomizationSheetProps) {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const color = formData.get("color");
    const label = formData.get("label");

    toast({
      title: "Customization Applied (Simulated)",
      description: `This is a placeholder. Real implementation would involve an AI call to validate and apply changes like color: ${color} and label: ${label}.`,
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Customize Chart</SheetTitle>
          <SheetDescription>
            Change colors, labels, and more. An AI would typically validate if
            your change is applicable.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
              Color
            </Label>
            <Input
              id="color"
              name="color"
              defaultValue="#673AB7"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="label" className="text-right">
              Label
            </Label>
            <Input
              id="label"
              name="label"
              defaultValue="My Custom Label"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="xAxis" className="text-right">
              X-Axis Label
            </Label>
            <Input
              id="xAxis"
              name="xAxis"
              defaultValue="Months"
              className="col-span-3"
            />
          </div>
          <SheetFooter>
            <Button type="submit">Apply Customization</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
