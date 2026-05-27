"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white transition-colors duration-500 overflow-clip">
      
      {/* Background grain texture for premium feel */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-difference" style={{ backgroundImage: 'url("/Platzhalter.png")' }}></div>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />

      {/* Modern, animated Contact CTA replacing the old ContactSection */}
      <section id="contact" className="py-40 bg-background relative border-t border-border overflow-hidden">
        
        {/* Subtle continuous vertical layout line */}
        <motion.div 
           animate={{ opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col justify-center items-center">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-20%" }}
             transition={{ duration: 1, ease }}
             className="mb-8"
          >
             <span className="text-accent uppercase tracking-[0.3em] text-xs font-mono font-bold block mb-4">Start the process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="text-[clamp(3rem,8vw,8rem)] font-bold tracking-tighter leading-[0.9] max-w-5xl mx-auto mb-16"
          >
            Let's build something <span className="text-foreground/30 italic font-serif">unreasonable.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <Link href="mailto:hello@marvin.software" className="group relative inline-flex items-center justify-center p-8 bg-foreground text-background font-medium hover:bg-accent hover:text-accent-fg transition-colors duration-500 rounded-full overflow-hidden">
              <span className="relative z-10 flex items-center gap-4 text-2xl">
                Get in touch 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
