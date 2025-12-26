import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/data/case-studies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <Container>
          <Button
            asChild
            variant="ghost"
            className="mb-8"
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground">
                {caseStudy.client}
              </span>
              <span className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {caseStudy.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{result}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-border">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Interested in Similar Results?</h3>
                <p className="text-muted-foreground">
                  Let's discuss how we can help you achieve your pharmaceutical goals.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


