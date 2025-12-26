import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  industry,
  challenge,
  className,
}: CaseStudyCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className={cn(
        "h-full transition-all hover:shadow-lg hover:-translate-y-1 group cursor-pointer",
        className
      )}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                  {client}
                </span>
                <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                  {industry}
                </span>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {challenge}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}


