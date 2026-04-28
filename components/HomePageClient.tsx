"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePageClient() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const preloaderSeen = sessionStorage.getItem("portfolio-preloader-seen") === "1";
    if (preloaderSeen) {
      setIsPageReady(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("portfolio-preloader-seen", "1");
    setIsPageReady(true);
  };

  return (
    <>
      {!isPageReady && <Preloader onComplete={handlePreloaderComplete} />}

      {isPageReady && (
        <main>
          <h1 className="sr-only">Rahul Chauhan Full-Stack Developer Portfolio</h1>
          <Hero />
          <div className="relative z-0">
            <About />
          </div>
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      )}
    </>
  );
}
