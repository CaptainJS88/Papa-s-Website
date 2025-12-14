import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Timeline } from "@/components/sections/Timeline";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our pharmaceutical consulting expertise, professional background, and consulting philosophy.",
};

const timelineItems = [
  {
    year: "1994",
    title: "Started in Pharmaceutical Industry",
    description: "Began career in pharmaceutical manufacturing and quality assurance, working with leading companies.",
  },
  {
    year: "2000",
    title: "Regulatory Affairs Expertise",
    description: "Developed deep expertise in FDA and EMA regulatory requirements, leading multiple successful submissions.",
  },
  {
    year: "2010",
    title: "Independent Consulting Practice",
    description: "Established independent consulting practice, helping companies navigate complex regulatory and operational challenges.",
  },
  {
    year: "2024",
    title: "35+ Years of Excellence",
    description: "Continuing to deliver strategic guidance and practical solutions to pharmaceutical companies worldwide.",
  },
];

const values = [
  {
    title: "Integrity First",
    description: "Ethical practices and transparent communication in every engagement.",
  },
  {
    title: "Results-Driven",
    description: "Focus on delivering measurable outcomes that drive business success.",
  },
  {
    title: "Collaborative Approach",
    description: "Working as an extension of your team to achieve shared goals.",
  },
  {
    title: "Continuous Learning",
    description: "Staying current with evolving regulations, technologies, and industry best practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Three decades of pharmaceutical expertise, dedicated to your success.
            </p>
          </div>
        </Container>
      </section>

      {/* Professional Summary */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center mb-8 lg:mb-0">
                <span className="text-muted-foreground">Professional Portrait</span>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeader
                title="Professional Summary"
                align="left"
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 35+ years of experience in the pharmaceutical industry, I have built a reputation for delivering strategic guidance and practical solutions that drive results. My career spans across manufacturing operations, regulatory affairs, quality systems, and technology transfer.
                </p>
                <p>
                  I have worked with companies of all sizes—from startups to global pharmaceutical corporations—helping them navigate complex regulatory landscapes, optimize manufacturing processes, and establish robust quality systems. My approach combines deep technical knowledge with business acumen, ensuring that solutions are not only compliant but also commercially viable.
                </p>
                <p>
                  Throughout my career, I have successfully led numerous regulatory submissions, managed complex technology transfers, and implemented quality systems that have stood the test of time. I am passionate about mentoring teams and sharing knowledge to build internal capabilities within organizations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/35+">
        <Container>
          <SectionHeader
            title="Professional Journey"
            subtitle="Career Timeline"
            align="center"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </Container>
      </section>

      {/* Values / Philosophy */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Consulting Philosophy"
            subtitle="Our Values"
            description="The principles that guide every engagement and interaction."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
