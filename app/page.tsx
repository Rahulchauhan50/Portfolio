"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import ContactModal from "@/components/ContactModal";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/data";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="bg-surface min-h-screen text-on-surface selection:bg-primary/30 selection:text-white overflow-x-clip font-body">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Header onOpenContact={openContact} />

      <main>
        <Hero onOpenContact={openContact} />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={setSelectedProject} />
        <Education />
        {/* <Awards /> */}
        <Contact />
      </main>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
