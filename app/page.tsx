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
    { value: "35+", label: "Years Experience", icon: <Award className="h-8 w-8 text-foreground" /> },
    { value: "Global", label: "Regulatory Expertise", icon: <Globe className="h-8 w-8 text-foreground" /> },
    { value: "100+", label: "Projects Completed", icon: <TrendingUp className="h-8 w-8 text-foreground" /> },
    { value: "50+", label: "Clients Served", icon: <Users className="h-8 w-8 text-foreground" /> },
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
      <section className="py-24 md:py-32 bg-background border-t border-b border-border">
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
      <section className="py-24 md:py-32 border-t border-b border-border">
        <Container>
          <SectionHeader
            title="Comprehensive Consulting Services"
            subtitle="What We Offer"
            description="End-to-end support for your pharmaceutical operations, from regulatory strategy to manufacturing optimization."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
          <div className="text-center mt-16">
            <a
              href="/services"
              className="text-foreground hover:text-foreground/80 font-semibold text-lg inline-flex items-center group transition-colors"
            >
              View All Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-24 md:py-32 bg-background border-t border-b border-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            title="Trusted By Industry Leaders"
            subtitle="Partners"
            description="Working with pharmaceutical companies, biotech firms, and CROs worldwide."
            align="center"
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 bg-muted rounded-lg flex items-center justify-center border border-border hover:border-foreground transition-colors"
              >
                <span className="text-muted-foreground text-sm font-medium">Client Logo {i}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
