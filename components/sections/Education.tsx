"use client";

import { motion } from "motion/react";
import { GraduationCap, Scroll, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24 relative" id="education">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 md:gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter lg:sticky lg:top-32">Academic <br /><span className="text-primary">Foundations.</span></h2>
        </div>
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* BCA */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-xl glass-card hover:border-primary/30 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">Bachelor of Computer Application (BCA)</h4>
                  <p className="text-primary font-medium text-sm md:text-base">IGNOU (Indira Gandhi National Open University)</p>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-xl">
                    Graduated with a Bachelor of Computer Applications (BCA), securing a 6.7 CGPA. Degree that laid the groundwork for my transition into engineering complex, full-stack systems.
                  </p>
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant glass px-3 py-1 rounded-full h-fit w-fit whitespace-nowrap">June 2021 - June 2024</span>
            </div>
          </motion.div>

          {/* Diploma */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-xl glass-card hover:border-tertiary/30 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-tertiary/10 flex items-center justify-center shrink-0">
                  <Scroll className="text-tertiary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-tertiary transition-colors">Diploma in Web and Software Development</h4>
                  <p className="text-tertiary font-medium text-sm md:text-base">DSDC (Delhi Skill Development Centre)</p>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-xl">
                    Comprehensive diploma program covering modern web technologies and software engineering principles.
                  </p>
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant glass px-3 py-1 rounded-full h-fit w-fit whitespace-nowrap">Dec 2021 - Dec 2023</span>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl glass-card hover:border-secondary/30 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors">12th Standard (Commerce with Maths)</h4>
                  <p className="text-secondary font-medium text-sm md:text-base">GBSSS No. 2 Badarpur, New Delhi</p>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-xl">
                    Successfully completed 12th grade with a score of 75%. Focused on Commerce and Mathematics, building a strong analytical foundation.
                  </p>
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant glass px-3 py-1 rounded-full h-fit w-fit whitespace-nowrap">Apr 2020 - Mar 2021</span>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 md:p-8 rounded-xl glass-card hover:border-outline/30 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-outline/10 flex items-center justify-center shrink-0">
                  <BookOpen className="text-outline w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-outline transition-colors">10th Standard</h4>
                  <p className="text-outline font-medium text-sm md:text-base">GBSSS No. 2 Badarpur, New Delhi</p>
                  <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed max-w-xl">
                    Completed 10th grade with a score of 70%, establishing core academic competencies.
                  </p>
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant glass px-3 py-1 rounded-full h-fit w-fit whitespace-nowrap">Apr 2018 - Mar 2019</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
