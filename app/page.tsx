import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { MetricCard } from "@/components/cards/MetricCard";
import { services } from "@/lib/data/services";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Expert pharmaceutical consulting with 35+ years of experience in regulatory affairs, manufacturing, and quality systems.",
};

export default function HomePage() {
  const metrics = [
    { value: "35++", label: "Years Experience", icon: <Award className="h-8 w-8 text-secondary" /> },
    { value: "Global", label: "Regulatory Expertise", icon: <Globe className="h-8 w-8 text-secondary" /> },
    { value: "100+", label: "Projects Completed", icon: <TrendingUp className="h-8 w-8 text-secondary" /> },
    { value: "50+", label: "Clients Served", icon: <Users className="h-8 w-8 text-secondary" /> },
  ];

  return (
    <>
      <Hero
        headline="Pharmaceutical Consulting Excellence"
        subheadline="35+ years of expertise delivering strategic guidance, regulatory solutions, and operational excellence for pharmaceutical companies worldwide."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />

      {/* Bio Section */}
      <section className="py-20 bg-muted/35+">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Trusted Expertise in Pharmaceutical Consulting"
              description="With three decades of hands-on experience across the pharmaceutical industry, I bring deep knowledge of regulatory affairs, manufacturing processes, quality systems, and technology transfer. My approach combines strategic thinking with practical execution, helping companies navigate complex challenges and achieve their goals."
            />
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Comprehensive Consulting Services"
            subtitle="What We Offer"
            description="End-to-end support for your pharmaceutical operations, from regulatory strategy to manufacturing optimization."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features.slice(0, 3)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
            >
              View All Services
              <span className="ml-2">→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-muted/35+">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                value={metric.value}
                label={metric.label}
                icon={metric.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Logos Section */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Trusted By Industry Leaders"
            subtitle="Partners"
            description="Working with pharmaceutical companies, biotech firms, and CROs worldwide."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Client Logo {i}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
