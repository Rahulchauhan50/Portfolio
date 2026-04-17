"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  disabled?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 12,
  disabled = false,
}: TiltCardProps) {
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawTranslateY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22 });
  const translateY = useSpring(rawTranslateY, { stiffness: 180, damping: 20 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    rawRotateY.set(x * intensity);
    rawRotateX.set(y * -intensity);
    rawTranslateY.set(-6);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawTranslateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      style={{ rotateX, rotateY, y: translateY, transformStyle: "preserve-3d" }}
      className={`group relative ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_35%,transparent_65%,rgba(255,255,255,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full [transform:translateZ(24px)] [transform-style:preserve-3d]">
        {children}
      </div>
    </motion.div>
  );
}
