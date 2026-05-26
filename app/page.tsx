import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500">
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      
      {/* Contact CTA Section */}
      <section id="contact" className="py-40 bg-background border-t border-border transition-colors duration-500">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-black tracking-tighter mb-8 max-w-5xl mx-auto">
              Ready to <br/><span className="text-accent italic font-serif">elevate</span> your digital product?
            </h2>
            <div className="mt-16">
              <a 
                href="mailto:hello@marvinsoftware.de" 
                className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background font-bold text-xl hover:bg-accent hover:text-accent-fg transition-all"
              >
                Start a Dialogue
              </a>
            </div>
        </div>
      </section>
    </main>
  );
}
