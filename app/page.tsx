"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/data";

export default function App() {
  const [isPageReady, setIsPageReady] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("portfolio-preloader-seen") === "1";
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("portfolio-preloader-seen", "1");
    setIsPageReady(true);
  };

  return (
    <>
      {!isPageReady && <Preloader onComplete={handlePreloaderComplete} />}

      {isPageReady && (
        <main>
          <Hero />
          <div className='relative z-0'>
            <About />
          </div>
          <Skills />
          <Experience />
          <Projects onSelectProject={setSelectedProject} />
          <Education />
          {/* <Awards /> */}
          <Contact />
        </main>
      )}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
