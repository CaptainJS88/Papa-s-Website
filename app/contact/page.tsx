import type { Metadata } from "next";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our pharmaceutical consulting team. We're here to help with your regulatory, manufacturing, and quality challenges.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to discuss your pharmaceutical consulting needs? We're here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:consultant@pharmaconsult.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    consultant@pharmaconsult.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    Available upon request
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Global consulting services
                  </p>
                </CardContent>
              </Card>
            </div>

            <SectionHeader
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you within 24 hours."
              align="center"
            />

            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


