"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface px-6 md:px-24 py-24 md:py-32">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter text-white">
              All <span className="text-primary">Projects.</span>
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl">
              A complete list of selected works, including enterprise systems, automation tools, and product builds.
            </p>
          </div>
          <div className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-3 py-1.5 rounded-full glass-chip shrink-0 self-start md:self-auto">
            {projects.length} Projects Listed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-high shadow-[0_20px_80px_rgba(2,8,23,0.28)]"
            >
              <div className="aspect-16/11 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#040c18]/92 via-[#040c18]/45 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end gap-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    {project.year}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface border border-white/10 bg-white/8 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
