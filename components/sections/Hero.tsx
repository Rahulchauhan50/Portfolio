"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  
  const designerImgRef = useRef<HTMLDivElement>(null);
  const coderImgRef = useRef<HTMLDivElement>(null);
  const designerBgRef = useRef<HTMLDivElement>(null);
  const coderBgRef = useRef<HTMLDivElement>(null);
  const designerDescRef = useRef<HTMLDivElement>(null);
  const coderDescRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate for large desktop browsers to match original logic
    if (window.innerWidth < 1140) return;

    const section = sectionRef.current;
    const face = faceRef.current;
    if (!section || !face) return;

    let mouseX = 0;
    let relMouseX = 520;
    let xp = 520;
    let loop: number;
    let isHovering = false;
    let targetXp = 520;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.pageX;
      const faceRect = face.getBoundingClientRect();
      const faceLeft = faceRect.left + window.scrollX;
      relMouseX = mouseX - faceLeft;
    };

    const animate = () => {
      // zeno's paradox dampens the movement
      xp += ((isHovering ? relMouseX : targetXp) - xp) / 12;

      if (designerImgRef.current) {
        designerImgRef.current.style.width = `${420 + (520 - xp) * 0.5}px`;
        designerImgRef.current.style.left = `${100 + (520 - xp) * 0.1}px`;
      }
      if (coderImgRef.current) {
        coderImgRef.current.style.width = `${420 + (xp - 520) * 0.5}px`;
        coderImgRef.current.style.right = `${100 - (520 - xp) * 0.1}px`;
      }
      if (designerBgRef.current) {
        designerBgRef.current.style.left = `${100 + (520 - xp) * 0.05}px`;
        designerBgRef.current.style.opacity = `${(1040 - xp) / 520}`;
      }
      if (coderBgRef.current) {
        coderBgRef.current.style.right = `${100 + (xp - 520) * 0.05}px`;
        coderBgRef.current.style.opacity = `${xp / 520}`;
      }
      if (designerDescRef.current) {
        designerDescRef.current.style.opacity = `${(1040 - xp) / 520}`;
      }
      if (coderDescRef.current) {
        coderDescRef.current.style.opacity = `${xp / 520}`;
      }

      loop = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetXp = 520; // reset target
    };

    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    
    loop = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(loop);
    };
  }, []);

  return (
    <section className={styles.section} id="hero" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className={styles.shell}
      >
        <div className={styles.face} id="face" ref={faceRef}>
          <div className={`${styles.panel} ${styles.designer}`} aria-label="Go to projects">
            <div className={styles.description} id="designer-desc" ref={designerDescRef}>
              <h1>automation</h1>
              <p>Creating automation and AI-driven workflows for real-world applications.</p>
            </div>
          </div>

          <div className={`${styles.panel} ${styles.coder}`} aria-label="Go to about section">
            <div className={styles.description} id="coder-desc" ref={coderDescRef}>
              <h1>
                <span className={styles.chevronLeft}>&lt;</span>developer
                <span className={styles.chevronRight}>/&gt;</span>
              </h1>
              <p>Full-stack developer building automation systems and real-world web apps using React and Next.js.</p>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/legacy/adham-dannaway-designer-coder.jpg"
              alt="Adham Dannaway UI designer"
              width={1040}
              height={600}
              priority
              className={styles.faceImage}
            />

            <div className={styles.designerImg} aria-hidden="true" ref={designerImgRef} />
            <div className={styles.coderImg} aria-hidden="true" ref={coderImgRef} />
            <div className={styles.designerBg} aria-hidden="true" ref={designerBgRef} />
            <div className={styles.coderBg} aria-hidden="true" ref={coderBgRef} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
