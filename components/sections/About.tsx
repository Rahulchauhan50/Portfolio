"use client";

import { motion } from "motion/react";
import { FileDown } from "lucide-react";
import { ComputersCanvas } from "../canvas";
import EarthCanvas from "../canvas/Earth";
import { slideIn } from "../utils/motion";
import { div } from "motion/react-m";

export default function About() {
  return (
    <section className="md:pt-32 px-6 md:px-32" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-xl"></div> */}
          <div className="relative aspect-square ">
            {/* <img 
              alt="Professional Profile Context" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5IwHiaoFWlVoobSc3cM5Y_zu1pd2jxItVthFTt5Hno_AbmlSxHFvu4k1hmjJvqDsqe46FLMC8ppEj_B4GKJaSW1a-U4Rg2l4eZ_vP1ATeHV3s3aHD4uHsOZtdb0LkifCx_IUpZdaVPiv6lX8RTMAcCu91pBdS3fo6m3J4FntihVvmd60Y5Es6mEM18beKvsWgKcCXAgjDbjMGmqG5Hf2EvRjhV_RsnJHUR4CXzKJnf4BgDHYlEJhuFCUkmpYK9cKg4hoR0NDtrNI"
              referrerPolicy="no-referrer"
            /> */}
            {/* <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            > */}
              {/* <EarthCanvas /> */}
            {/* </motion.div> */}

            
     
      
        <EarthCanvas />
       

          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">Crafting Robust <br /><span className="text-tertiary">Digital Experiences.</span></h2>
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
            <p>
              I specialize in the delicate balance between high-performance backends and pixel-perfect frontends. With a core focus on the Next.js ecosystem, I build applications that aren't just functional, but architecturally sound.
            </p>
            <p>
              My passion lies at the intersection of AI/ML integration and streamlined automation. Whether it's migrating legacy systems to modern stacks or engineering complex IT asset management platforms, I prioritize scalability and user-centric design.
            </p>
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="p-4 md:p-6 flex gap-3 rounded-lg bg-surface-container-highest/30 border border-outline-variant/10">
              <span className="text-2xl md:text-3xl font-headline font-bold text-primary">3+</span>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant mt-2">Years Experience</p>
            </div>
           <div className="">
            <a
              href="/resume.pdf"
              download="Rahul_Chauhan_Resume.pdf"
              className="inline-flex h-full items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-md border border-primary/30 font-bold text-primary hover:bg-primary/10 transition-all duration-300 group text-sm md:text-base"
            >
              <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>
          </div>
          

        </motion.div>
         <motion.div  >
         
        </motion.div>
        
      </div>
    </section>
  );
}
