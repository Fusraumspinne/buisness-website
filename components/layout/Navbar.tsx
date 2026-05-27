"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        className="fixed top-2 md:top-4 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
      >
        <div className="container mx-auto">
           <div className="bg-background/60 backdrop-blur-md border border-border/50 shadow-sm rounded-full h-16 pointer-events-auto px-6 flex items-center justify-between uppercase text-xs md:text-sm tracking-widest font-medium">
             <Link href="/" className="font-bold tracking-tighter normal-case text-lg flex items-center gap-3 overflow-hidden group">
               <motion.span
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.3, ease }}
               >
                 Marvin.
               </motion.span>
             </Link>
             
             <div className="hidden lg:flex gap-8">
               {navItems.map((item, i) => (
                 <motion.div
                   key={item.label}
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease }}
                 >
                   <Link href={item.href} className="relative hover:text-accent transition-colors group">
                     {item.label}
                     <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                   </Link>
                 </motion.div>
               ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.7, ease }}
               className="flex items-center gap-4 relative"
             >
               <button 
                 onClick={() => setLang(lang === "de" ? "en" : "de")}
                 className="hover:text-accent transition-colors w-8"
               >
                 {lang.toUpperCase()}
               </button>
               
               <ThemeToggle />
               
               <a href="#contact" className="hidden lg:block py-2 px-6 rounded-full bg-foreground text-background hover:bg-accent hover:text-white transition-colors duration-300">
                 {t.nav.contact}
               </a>

               <button 
                 className="lg:hidden text-foreground ml-2"
                 onClick={() => setIsOpen(!isOpen)}
               >
                 {isOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
             </motion.div>

           </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center text-2xl tracking-widest uppercase font-medium">
              {navItems.map((item, i) => (
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 20 }}
                   transition={{ delay: i * 0.1 }}
                   key={item.label}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ delay: 0.3 }}
                 className="mt-6"
              >
                <a href="#contact" onClick={() => setIsOpen(false)} className="py-4 px-10 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                  {t.nav.contact}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
