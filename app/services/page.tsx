import type { Metadata } from "next";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive pharmaceutical consulting services including regulatory affairs, manufacturing, technology transfer, and quality systems.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive consulting solutions tailored to your pharmaceutical needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="Expert Consulting Services"
            subtitle="What We Offer"
            description="From regulatory strategy to manufacturing optimization, we provide end-to-end support for your pharmaceutical operations."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your pharmaceutical goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

