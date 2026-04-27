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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20400%20400%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noise%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20result=%22noise%22/%3E%3C/filter%3E%3Crect%20width=%22400%22%20height=%22400%22%20fill=%22%23ffffff%22%20filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Header onOpenContact={openContact} />

      {children}

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}