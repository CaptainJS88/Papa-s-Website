import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("h-full transition-all duration-300 hover:-translate-y-2 border-border bg-background", className)}>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg border border-foreground flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
          <Icon className="h-6 w-6 text-foreground" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-foreground">
              <span className="text-foreground mr-2 font-bold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

