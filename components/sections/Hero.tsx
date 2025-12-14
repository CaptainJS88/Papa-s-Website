"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
}

interface Slide {
  id: number;
  image: string;
  headline?: string;
  subheadline?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
    headline: "35+ Years of Pharmaceutical Excellence",
    subheadline: "Delivering strategic guidance and regulatory solutions for pharmaceutical companies worldwide.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
    headline: "Strategic Guidance for Global Operations",
    subheadline: "Expert consulting services to optimize your manufacturing processes and quality systems.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80",
    headline: "Navigating Complex Regulatory Challenges",
    subheadline: "Comprehensive regulatory affairs expertise to ensure compliance and accelerate approvals.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
    headline: "Trusted Expertise You Can Rely On",
    subheadline: "Partner with a consultant who understands your industry and delivers results.",
  },
];

export function Hero({ 
  headline, 
  subheadline, 
  ctaText = "Get Started",
  ctaLink = "/contact"
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="relative h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
              style={{
                backgroundImage: `url(${slide.image})`,
                animationDelay: `${index * 6}s`,
              }}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            {/* Additional emerald accent overlay */}
            <div className="absolute inset-0 bg-secondary/5" />
          </div>
        ))}
      </div>

      {/* Content */}
      <Container className="relative z-20 h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Dynamic headline from current slide or static */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="block mb-4">{slides[currentSlide].headline || headline}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].subheadline || subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              asChild 
              size="lg" 
              className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 hover:scale-105"
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground/30 hover:border-secondary bg-background/20 backdrop-blur-sm text-foreground hover:text-secondary px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 hover:bg-secondary/20 hover:border-secondary text-foreground hover:text-secondary transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 hover:bg-secondary/20 hover:border-secondary text-foreground hover:text-secondary transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "w-8 bg-secondary shadow-lg shadow-secondary/50"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-foreground/60">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-secondary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
