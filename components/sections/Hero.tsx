"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { FileDown, Github, Linkedin, Mail, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
// import profile from '../../assets/profile.png'

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [loading, setLoading] = useState(false);

  const handleViewWork = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const element = document.querySelector("#projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 md:py-32 relative overflow-hidden" id="hero">
      {/* Decorative Blur Blob */}
      {/* <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div> */}

      {/* Hero Profile Image Background */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[15%] right-[-10%] md:right-[5%] w-[400px] md:w-[600px] z-10 opacity-40 md:opacity-60 pointer-events-none"
      >
        {/* <Image 
          src={profile} 
          alt="Hero Background" 
          width={600} 
          height={600} 
          className="w-full h-auto object-contain [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]" 
        /> */}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-6 md:space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary">Available for new opportunities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] text-white">
          Rahul Chauhan <br/>
          <span className="text-gradient">Full-Stack developer</span>
        </h1>
        <p className="text-lg md:text-2xl text-on-surface-variant font-body max-w-2xl leading-relaxed">
          Frontend-focused developer with 2.5+ years of production experience building server-rendered web apps, internal systems, and automation-driven platforms.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
          <button 
            onClick={handleViewWork}
            disabled={loading}
            className="btn-primary-gradient px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-on-primary-fixed hover:scale-[0.98] transition-transform flex items-center gap-2 min-w-[160px] md:min-w-[180px] justify-center text-sm md:text-base"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>View My Work <ArrowRight className="w-5 h-5" /></>}
          </button>
          <a 
            href="/resume.pdf" 
            download="Rahul_Chauhan_Resume.pdf"
            className="px-6 md:px-8 py-3 md:py-4 rounded-md bg-surface-container-highest border border-outline-variant/20 font-bold hover:bg-primary/10 hover:border-primary/50 transition-all flex items-center gap-2 text-sm md:text-base text-white"
          >
            <FileDown className="w-5 h-5" /> Download Resume
          </a>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 pt-4 text-sm md:text-base">
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="https://github.com/Rahulchauhan50" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/rahulchauhan50/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" href="mailto:rahulchauhan54230@gmail.com">
            <Mail className="w-5 h-5" /> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
