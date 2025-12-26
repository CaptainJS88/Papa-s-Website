import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start md:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10" />
            
            {/* Content */}
            <div className={cn(
              "ml-12 md:ml-0 md:w-1/2",
              index % 2 === 0 ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
            )}>
              <div className="text-sm font-semibold text-secondary mb-1">
                {item.year}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


