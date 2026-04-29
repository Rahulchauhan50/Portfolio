"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const scaleWrapperRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const pointerXRef = useRef(520);
  const pointerInsideSectionRef = useRef(false);

  const designerImgRef = useRef<HTMLDivElement>(null);
  const coderImgRef = useRef<HTMLDivElement>(null);
  const designerBgRef = useRef<HTMLDivElement>(null);
  const coderBgRef = useRef<HTMLDivElement>(null);
  const designerDescRef = useRef<HTMLDivElement>(null);
  const coderDescRef = useRef<HTMLDivElement>(null);
  const designerPanelRef = useRef<HTMLDivElement>(null);
  const coderPanelRef = useRef<HTMLDivElement>(null);

  const introDoneRef = useRef(false);

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
    if (!introDoneRef.current) return;
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
    const isDesktop = window.innerWidth >= 1140;

    const designerImg = designerImgRef.current;
    const coderImg = coderImgRef.current;
    const designerBg = designerBgRef.current;
    const coderBg = coderBgRef.current;
    const designerPanel = designerPanelRef.current;
    const coderPanel = coderPanelRef.current;
    const imageContainer = imageContainerRef.current;

    if (!designerImg || !coderImg || !designerBg || !coderBg || !designerPanel || !coderPanel || !imageContainer) {
      return;
    }

    introDoneRef.current = false;

    let t1: number;
    let t2: number;
    let t3: number;
    let loop: number;

    if (isDesktop) {
      designerImg.style.left = "-500px";
      coderImg.style.right = "-500px";
      designerBg.style.left = "-500px";
      coderBg.style.right = "-500px";

      designerImg.style.opacity = "0";
      coderImg.style.opacity = "0";
      designerBg.style.opacity = "0";
      coderBg.style.opacity = "0";
      designerPanel.style.opacity = "0";
      coderPanel.style.opacity = "0";

      t1 = window.setTimeout(() => {
        designerImg.style.transition = "left 1000ms cubic-bezier(0.19, 1, 0.22, 1), opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1)";
        coderImg.style.transition = "right 1000ms cubic-bezier(0.19, 1, 0.22, 1), opacity 1000ms cubic-bezier(0.19, 1, 0.22, 1)";
        designerBg.style.transition = "left 1500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1500ms cubic-bezier(0.34, 1.56, 0.64, 1)";
        coderBg.style.transition = "right 1500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1500ms cubic-bezier(0.34, 1.56, 0.64, 1)";

        designerImg.style.left = "100px";
        coderImg.style.right = "100px";
        designerBg.style.left = "100px";
        coderBg.style.right = "100px";

        designerImg.style.opacity = "1";
        coderImg.style.opacity = "1";
        designerBg.style.opacity = "1";
        coderBg.style.opacity = "1";
      }, 30);

      t2 = window.setTimeout(() => {
        designerPanel.style.transition = "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)";
        coderPanel.style.transition = "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)";
        designerPanel.style.opacity = "1";
        coderPanel.style.opacity = "1";
      }, 750);

      t3 = window.setTimeout(() => {
        introDoneRef.current = true;
      }, 1200);
    } else {
      imageContainer.style.opacity = "0";
      designerImg.style.opacity = "0";
      coderImg.style.opacity = "0";
      designerBg.style.opacity = "0";
      coderBg.style.opacity = "0";
      designerPanel.style.opacity = "0";
      coderPanel.style.opacity = "0";

      t1 = window.setTimeout(() => {
        imageContainer.style.transition = "opacity 2000ms cubic-bezier(0.19, 1, 0.22, 1)";
        designerImg.style.transition = "opacity 2000ms cubic-bezier(0.19, 1, 0.22, 1)";
        coderImg.style.transition = "opacity 2000ms cubic-bezier(0.19, 1, 0.22, 1)";
        designerBg.style.transition = "opacity 2000ms cubic-bezier(0.19, 1, 0.22, 1)";
        coderBg.style.transition = "opacity 2000ms cubic-bezier(0.19, 1, 0.22, 1)";
        imageContainer.style.opacity = "1";
        designerImg.style.opacity = "1";
        coderImg.style.opacity = "1";
        designerBg.style.opacity = "1";
        coderBg.style.opacity = "1";
      }, 30);

      t2 = window.setTimeout(() => {
        designerPanel.style.transition = "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)";
        coderPanel.style.transition = "opacity 500ms cubic-bezier(0.19, 1, 0.22, 1)";
        designerPanel.style.opacity = "1";
        coderPanel.style.opacity = "1";
      }, 450);

      t3 = window.setTimeout(() => {
        introDoneRef.current = true;
      }, 1000);
    }

    const handlePointerMove = (event: PointerEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;

      pointerInsideSectionRef.current =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

      if (pointerInsideSectionRef.current) {
        pointerXRef.current = x - rect.left;
      }
    };

    const animate = () => {
      if (isDesktop && introDoneRef.current) {
        const section = sectionRef.current;
        const face = faceRef.current;

        if (section && face && pointerInsideSectionRef.current) {
          const sectionRect = section.getBoundingClientRect();
          const faceRect = face.getBoundingClientRect();
          const xp = Math.max(0, Math.min(faceRect.width, pointerXRef.current - (faceRect.left - sectionRect.left)));

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
        }
      }

      loop = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    loop = window.requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(loop);
    };
  }, []);

  return (
    <section className={styles.section} id="hero" ref={sectionRef}>
      <div className={styles.shell}>
        <div className={styles.face} id="face" ref={faceRef}>
          <div className={`${styles.panel} ${styles.designer}`} aria-label="Go to case studies" ref={designerPanelRef}>
            <div className={styles.description} id="designer-desc" ref={designerDescRef}>
              <h1>
                <span className={styles.chevronLeft}>&#123;</span>automation
                <span className={styles.chevronRight}>&#125;</span>
                </h1>
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

          <div className={`${styles.panel} ${styles.coder}`} aria-label="Go to about section" ref={coderPanelRef}>
            <div className={styles.description} id="coder-desc" ref={coderDescRef}>
              <h1>
                <span className={styles.chevronLeft}>&lt;</span>developer
                <span className={styles.chevronRight}>/&gt;</span>
              </h1>
              <p>Full-stack developer building automation systems and real-world web apps using React and Next.js.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
