"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between uppercase text-sm tracking-widest font-medium">
        
        <Link href="/" className="font-bold tracking-tighter normal-case text-xl flex items-center gap-3 overflow-hidden group">
          <motion.span 
            initial={{ scale: 0, rotate: -45 }} 
            animate={{ scale: 1, rotate: 0 }} 
            transition={{ duration: 0.8, delay: 0.5, ease }} 
            className="w-4 h-4 bg-foreground block rounded-sm group-hover:rotate-45 transition-transform duration-500"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            Marvin
          </motion.span>
        </Link>
        
        <div className="hidden md:flex gap-10">
          {["about", "services", "projects"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease }}
            >
              <Link href={`#${item}`} className="relative hover:text-accent transition-colors group">
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="flex items-center gap-6 relative"
        >
          <ThemeToggle />
          <a href="#contact" className="hidden md:block py-2 px-4 border border-foreground hover:bg-foreground hover:text-background transition-colors">
            Contact
          </a>
        </motion.div>

      </div>
    </motion.nav>
  );
}
