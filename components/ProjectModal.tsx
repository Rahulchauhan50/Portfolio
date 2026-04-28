"use client";

import { motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/lib/data";
import Link from "next/link";


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="project-modal-scrollbar relative w-full max-w-7xl bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-white hover:bg-primary hover:text-on-primary transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="aspect-video md:aspect-auto bg-surface-container-lowest">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full md:w-auto h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-label text-primary font-bold uppercase tracking-widest">{project.year}</span>
              <h2 className="text-4xl font-headline font-bold text-white">{project.title}</h2>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Overview</h4>
              <p className="text-on-surface-variant leading-relaxed font-body">
                {project.longDesc}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-surface-container-highest text-sm font-medium text-on-surface border border-outline-variant/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <Link href={project.sluggedUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary-gradient px-8 py-4 rounded-md font-bold text-on-primary-fixed hover:scale-[0.98] transition-transform flex items-center gap-2">
                View Live Project 
                <ExternalLink className="w-5 h-5" />
              </button>
              </Link>

              {/* <Link href={project.sluggedUrl} target="_blank" className="flex items-center gap-2">
                View Live Project 
                </Link> */}
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
