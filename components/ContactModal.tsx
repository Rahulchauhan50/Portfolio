"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [loadingStates, setLoadingStates] = useState({ submitForm: false });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    setLoadingStates({ submitForm: true });
    console.log("Form Data Submitted:", data);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setFormStatus("idle");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Error: ${error instanceof Error ? error.message : "Failed to send message"}`);
    } finally {
      setLoadingStates({ submitForm: false });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 hover:bg-primary/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tighter">Initiate <span className="text-primary">Contact.</span></h2>
                <p className="text-on-surface-variant font-body">Fill out the form below to start a conversation.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
                  <input name="name" required className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all outline-none text-sm md:text-base" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
                  <input name="email" required className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all outline-none text-sm md:text-base" placeholder="john@example.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Message</label>
                  <textarea name="message" required className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all resize-none outline-none text-sm md:text-base" placeholder="Describe your project..." rows={4}></textarea>
                </div>
                <button 
                  disabled={loadingStates.submitForm}
                  className="w-full btn-primary-gradient py-3 md:py-4 rounded-md font-bold text-on-primary-fixed uppercase tracking-widest hover:shadow-[0_0_20px_rgba(135,173,255,0.4)] transition-all flex items-center justify-center gap-2 text-sm md:text-base" 
                  type="submit"
                >
                  {loadingStates.submitForm ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Transmission"}
                </button>

                {formStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-0 right-0 text-center text-tertiary font-bold text-sm"
                  >
                    Transmission received! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
