import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({ value, label, icon, className }: MetricCardProps) {
  return (
    <Card className={cn("text-center border-border/50 bg-muted/30 hover:bg-muted/50 transition-all duration-300", className)}>
      <CardContent className="pt-6">
        {icon && <div className="flex justify-center mb-4">{icon}</div>}
        <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
          {value}
        </div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

