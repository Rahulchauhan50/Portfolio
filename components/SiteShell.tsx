"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="bg-surface min-h-screen text-on-surface selection:bg-primary/30 selection:text-white overflow-x-clip font-body">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-tertiary/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Header onOpenContact={openContact} />

      {children}

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}