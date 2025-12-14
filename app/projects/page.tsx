import type { Metadata } from "next";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our case studies and successful pharmaceutical consulting projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real results from real projects. See how we've helped companies achieve their goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Success Stories"
            subtitle="Case Studies"
            description="Explore detailed case studies showcasing our approach and the results we've delivered for clients."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                slug={caseStudy.slug}
                title={caseStudy.title}
                client={caseStudy.client}
                industry={caseStudy.industry}
                challenge={caseStudy.challenge}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

