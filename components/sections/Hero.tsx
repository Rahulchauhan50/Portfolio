"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const scaleWrapperRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  const designerImgRef = useRef<HTMLDivElement>(null);
  const coderImgRef = useRef<HTMLDivElement>(null);
  const designerBgRef = useRef<HTMLDivElement>(null);
  const coderBgRef = useRef<HTMLDivElement>(null);
  const designerDescRef = useRef<HTMLDivElement>(null);
  const coderDescRef = useRef<HTMLDivElement>(null);

  // Responsive scaling to fit mobile DOM wrapper exactly, with 600px zoom
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1140 && scaleWrapperRef.current && imageContainerRef.current) {
        // We divide by 600 instead of 1040 to make the scale mathematically 1.7x larger.
        // This zooms into the central part of the sprite, making faces massive and bold on mobile.
        const scale = scaleWrapperRef.current.clientWidth / 600;
        imageContainerRef.current.style.transform = `scale(${scale})`;
      } else if (imageContainerRef.current) {
        imageContainerRef.current.style.transform = 'none';
      }
    };
    handleResize(); // Init on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Framer Motion scroll hook (absolute pixels are often more dependable)
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.innerWidth >= 1140) return; // Desktop uses requestAnimationFrame hover logic

    // Convert pixel scroll to a normalized 0-1 progress span, completing around 350px down
    const progress = Math.min(1, Math.max(0, latest / 350));
    
    // Start xp precisely in the middle (520) so the initial image split is exactly 50/50
    const xp = 520 + progress * 320; 

    // Apply exact same mathematics as desktop scaling width
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
    
    // Animate text descriptions
    if (designerDescRef.current) {
      designerDescRef.current.style.opacity = `${(1040 - xp) / 520}`;
      designerDescRef.current.style.transform = `translateY(${progress * 20}px)`;
    }
    if (coderDescRef.current) {
      coderDescRef.current.style.opacity = `${xp / 520}`;
      coderDescRef.current.style.transform = `translateY(${-20 + progress * 20}px)`;
    }
  });

  useEffect(() => {
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

    const handleMouseEnter = () => isHovering = true;
    const handleMouseLeave = () => { isHovering = false; targetXp = 520; };

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

          <div className={styles.imageScaleWrapper} ref={scaleWrapperRef}>
            <div className={styles.imageContainer} ref={imageContainerRef}>
              <div className={styles.designerImg} aria-hidden="true" ref={designerImgRef} />
              <div className={styles.coderImg} aria-hidden="true" ref={coderImgRef} />
              <div className={styles.designerBg} aria-hidden="true" ref={designerBgRef} />
              <div className={styles.coderBg} aria-hidden="true" ref={coderBgRef} />
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
        </div>
      </motion.div>
    </section>
  );
}
