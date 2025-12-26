import Link from "next/link";
import { Container } from "./Container";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">PharmaConsult</h3>
            <p className="text-sm text-foreground">
              35 years of pharmaceutical consulting expertise. Delivering results that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li>Regulatory Affairs</li>
              <li>Manufacturing Consulting</li>
              <li>Technology Transfer</li>
              <li>QA/QC Systems</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:consultant@pharmaconsult.com"
                className="flex items-center space-x-2 text-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>consultant@pharmaconsult.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-foreground">
          <p>&copy; {currentYear} PharmaConsult. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
