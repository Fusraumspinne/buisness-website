"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/landing/AboutSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { FaqSection } from "@/components/landing/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}