"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Asterisk } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative flex flex-col justify-center container mx-auto px-6 border-b border-border overflow-hidden bg-background">
      
      {/* Background Animated Typography (Fills the empty space) */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none -z-10 select-none"
      >
        <h1 className="text-[20vw] font-black text-foreground/[0.02] leading-none whitespace-nowrap">
          SOFTWARE
        </h1>
      </motion.div>

      <motion.div style={{ y: yText, opacity }} className="relative z-10 grid md:grid-cols-12 gap-8 items-center mt-20">
        <div className="md:col-span-8">
          <div className="overflow-hidden mb-8">
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="uppercase tracking-widest text-sm font-semibold flex items-center gap-4 text-accent"
            >
              <motion.span 
                 initial={{ width: 0 }}
                 animate={{ width: 32 }}
                 transition={{ duration: 1, delay: 0.6, ease }}
                 className="h-px bg-accent block" 
              />
              Independent Studio
            </motion.div>
          </div>
          
          <h1 className="text-[clamp(4.5rem,10vw,11rem)] font-bold leading-[0.85] tracking-tighter">
            <div className="overflow-hidden">
              <motion.span 
                 initial={{ y: "120%", rotate: 2 }} 
                 animate={{ y: 0, rotate: 0 }} 
                 transition={{ duration: 1.2, delay: 0.1, ease }}
                 className="block origin-bottom-left"
              >
                We build
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                 initial={{ y: "120%", rotate: 2 }} 
                 animate={{ y: 0, rotate: 0 }} 
                 transition={{ duration: 1.2, delay: 0.25, ease }}
                 className="block origin-bottom-left flex items-center gap-4"
              >
                <span className="text-accent italic font-serif tracking-normal">sharp</span> 
                software.
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="hidden md:block text-foreground/20 ml-4"
                >
                  <Asterisk size={clamp(40, "6vw", 80)} strokeWidth={1} />
                </motion.span>
              </motion.span>
            </div>
          </h1>
        </div>

        <div className="md:col-span-4 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed border-l border-border pl-6 relative"
          >
            {/* Animated line drawing down */}
            <motion.div 
               initial={{ height: 0 }}
               animate={{ height: "100%" }}
               transition={{ duration: 1.5, delay: 0.8, ease }}
               className="absolute left-[-1px] top-0 w-px bg-accent"
            />
            
            Spezialisiert auf High-End Web-Applikationen und exzellente User Interfaces. Kein Bullshit. Keine Templates.
            <div className="mt-10">
              <motion.a 
                whileHover={{ gap: "24px", paddingRight: "40px" }}
                transition={{ duration: 0.4, ease }}
                href="#contact" 
                className="inline-flex items-center gap-4 py-4 px-8 bg-foreground text-background font-medium hover:bg-accent hover:text-accent-fg transition-colors group"
              >
                Start a dialog 
                <motion.span
                   animate={{ y: [0, 4, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={18} className="-rotate-90 group-hover:rotate-0 transition-transform duration-500" />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>

      </motion.div>

      {/* Viewport markers for subtle, continuous editorial animation without being superfluous */}
      <motion.div 
         animate={{ opacity: [0.1, 0.4, 0.1] }}
         transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
         className="absolute top-[10%] right-[5%] flex items-center justify-center pointer-events-none select-none hidden md:flex"
      >
         <div className="w-px h-6 bg-foreground/30 absolute" />
         <div className="h-px w-6 bg-foreground/30 absolute" />
      </motion.div>
      <motion.div 
         animate={{ opacity: [0.1, 0.4, 0.1] }}
         transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 2 }}
         className="absolute bottom-[20%] left-[5%] flex items-center justify-center pointer-events-none select-none hidden md:flex"
      >
         <div className="w-px h-6 bg-foreground/30 absolute" />
         <div className="h-px w-6 bg-foreground/30 absolute" />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 text-foreground/40 font-mono text-sm uppercase tracking-widest flex items-center gap-4"
      >
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], y: ["0%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-foreground/40 hidden md:block"
        />
        <div className="-rotate-90 md:rotate-0 tracking-[0.2em]">Scroll</div>
      </motion.div>
    </section>
  );
}
// Helper for tailwind clamp rendering in react
function clamp(min: number, val: string, max: number) {
   return `clamp(${min}px, ${val}, ${max}px)` as any;
}
