"use client";

import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/lib/data";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

// Bento grid size classes — cycles through a pattern for variety
const bentoSizes = [
  "md:col-span-2 md:row-span-2", // featured
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  // "md:col-span-1 md:row-span-1",
  // "md:col-span-1 md:row-span-1",
];

const accentColors = [
  { glow: "rgba(125,211,252,0.18)", border: "rgba(125,211,252,0.25)", tag: "text-primary" },
  { glow: "rgba(123,241,200,0.14)", border: "rgba(123,241,200,0.22)", tag: "text-tertiary" },
  { glow: "rgba(156,197,255,0.14)", border: "rgba(156,197,255,0.22)", tag: "text-secondary" },
  { glow: "rgba(125,211,252,0.12)", border: "rgba(125,211,252,0.18)", tag: "text-primary" },
  { glow: "rgba(123,241,200,0.12)", border: "rgba(123,241,200,0.18)", tag: "text-tertiary" },
  { glow: "rgba(156,197,255,0.12)", border: "rgba(156,197,255,0.18)", tag: "text-secondary" },
];

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8"
        >
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">
              Selected <span className="text-primary">Works.</span>
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-xl">
              A collection of high-impact projects ranging from AI automation to enterprise infrastructure.
            </p>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-3 py-1.5 rounded-full glass-chip shrink-0"
          >
            {projects.length} Projects
          </motion.span>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4 md:gap-5">
          {projects.map((project, index) => {
            const accent = accentColors[index % accentColors.length];
            const sizeClass = bentoSizes[index] ?? "md:col-span-1 md:row-span-1";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                onClick={() => onSelectProject(project)}
                className={`${sizeClass} relative group cursor-pointer rounded-2xl overflow-hidden`}
                style={{
                  boxShadow: `0 0 0 1px ${accent.border}, 0 4px 40px ${accent.glow}`,
                }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040c18]/95 via-[#040c18]/50 to-[#040c18]/20" />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${accent.glow}, transparent 60%), linear-gradient(to top, rgba(4,12,24,0.98) 20%, transparent 100%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                  {/* Top row: year + arrow */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-label font-bold uppercase tracking-[0.22em] ${accent.tag}`}>
                      {project.year}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-2 group-hover:translate-x-0"
                      style={{ background: `rgba(255,255,255,0.12)`, backdropFilter: "blur(8px)", border: `1px solid ${accent.border}` }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="space-y-2">
                    {/* Tech chips — only show on featured or on hover */}
                    <div
                      className={`flex flex-wrap gap-1.5 transition-all duration-400 opacity-100 translate-y-0`}
                    >
                      {project.tech.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] uppercase font-bold text-on-surface-variant px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <h3
                        className={`font-headline font-bold text-white leading-tight text-xl md:text-2xl`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-on-surface-variant leading-relaxed font-body transition-all duration-400 text-xs md:text-sm line-clamp-2 opacity-100`}
                      >
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* CTA line */}
                    <div
                      className={`flex items-center gap-1.5 transition-all duration-300 opacity-70`}
                    >
                      <ExternalLink className="w-3 h-3 text-primary" />
                      <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary">
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shimmer border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${accent.border}`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
