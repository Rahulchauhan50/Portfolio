"use client";

import { useState } from "react";
import { Terminal, Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-zinc-950/40 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_4px_30px_rgba(0,111,240,0.04)]">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Terminal className="text-primary w-6 h-6" />
            {/* <span className="text-xl font-black tracking-tighter text-white uppercase font-headline">RAHUL.DEV</span> */}
            <Image src="/R_logo_bw_black_transparent.svg" alt="Logo" width={42} height={42} className="h-10 w-10 invert brightness-0" /> 
          </div>
          <nav className="hidden md:flex gap-8 items-center font-headline">
            <a className="text-primary font-bold hover:text-primary/80 transition-colors duration-300" href="#hero">Hero</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#about">About</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#skills">Skills</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#projects">Projects</a>
            <div className="h-4 w-px bg-outline-variant/30 mx-2"></div>
            <div className="flex gap-4 items-center">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/Rahulchauhan50" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/rahulchauhan50/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:rahulchauhan54230@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
              <button 
                onClick={onOpenContact}
                className="ml-2 btn-primary-gradient px-4 py-2 rounded-md font-bold text-on-primary-fixed text-xs uppercase tracking-widest hover:scale-[0.98] transition-transform"
              >
                Contact
              </button>
            </div>
          </nav>
          <button className="md:hidden text-on-surface-variant" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-60 bg-surface flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Terminal className="text-primary w-6 h-6" />
                <span className="text-xl font-black tracking-tighter text-white uppercase font-headline">RAHUL.DEV</span>
              </div>
              <button className="text-on-surface-variant" onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-3xl font-headline font-bold text-white mb-12">
              <a onClick={() => setIsMenuOpen(false)} href="#hero">Hero</a>
              <a onClick={() => setIsMenuOpen(false)} href="#about">About</a>
              <a onClick={() => setIsMenuOpen(false)} href="#skills">Skills</a>
              <a onClick={() => setIsMenuOpen(false)} href="#projects">Projects</a>
              <button 
                onClick={() => { setIsMenuOpen(false); onOpenContact(); }} 
                className="text-left text-primary"
              >
                Contact
              </button>
            </nav>
            <div className="mt-auto space-y-6">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Connect</p>
              <div className="flex gap-6">
                <a className="text-white hover:text-primary transition-colors" href="https://github.com/Rahulchauhan50" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8" />
                </a>
                <a className="text-white hover:text-primary transition-colors" href="https://www.linkedin.com/in/rahulchauhan50/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a className="text-white hover:text-primary transition-colors" href="mailto:rahulchauhan54230@gmail.com">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
