"use client";

import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "स्वागत है",
  "Bonjour",
  "Hola",
  "你好",
  "مرحبا",
  "নমস্কার",
  "Olá",
  "안녕하세요"
];

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // We have 5 greetings. 1800ms / 5 = 360ms. Use 350ms per greeting.
    const greetingInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(greetingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    // Start fade out at 2000ms (2 seconds loader)
    const fadeOutTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Fully unmount at 2500ms
    const unmountTimeout = setTimeout(() => {
      setIsUnmounted(true);
      document.body.style.overflow = "auto";
      window.dispatchEvent(new Event("portfolio-preloader-complete"));
      onComplete?.();
    }, 2500);

    return () => {
      document.body.style.overflow = "auto";
      clearInterval(greetingInterval);
      clearTimeout(fadeOutTimeout);
      clearTimeout(unmountTimeout);
    };
  }, [onComplete]);

  if (isUnmounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-surface text-on-surface transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex items-center space-x-3">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
        <h1 className="text-3xl md:text-4xl font-normal tracking-tight transition-all duration-300">
          {greetings[index]}
        </h1>
      </div>
    </div>
  );
}
