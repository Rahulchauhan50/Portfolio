"use client";

import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Mail, Loader2, Send } from "lucide-react";

export default function Contact() {
  const [loadingStates, setLoadingStates] = useState({ submitForm: false });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setLoadingStates({ submitForm: true });
    setFormStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");

      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 6000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 6000);
    } finally {
      setLoadingStates({ submitForm: false });
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-headline font-bold text-white tracking-tighter">Let's build <br/>the <span className="text-gradient">Future.</span></h2>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
              Have a complex project in mind? Reach out and let's discuss how we can engineer a solution.
            </p>
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20">
                  <Mail className="text-primary w-5 h-5 md:w-6 md:h-6" />
                </div>
                <a className="text-base md:text-lg font-medium text-white hover:text-primary transition-colors" href="mailto:rahulchauhan54230@gmail.com">rahulchauhan54230@gmail.com</a>
              </div>

            </div>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-6 glass-card p-6 md:p-10 rounded-2xl border border-outline-variant/20 relative">
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Full Name</label>
              <input name="name" required className="w-full relativeest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all outline-none text-sm md:text-base bg-transparent" placeholder="John Doe" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email Address</label>
              <input name="email" required className="w-full relativeest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all outline-none text-sm md:text-base bg-transparent" placeholder="john@example.com" type="email"/>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold">Message</label>
              <textarea name="message" required className="w-full relativeest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-3 md:p-4 transition-all resize-none outline-none text-sm md:text-base bg-transparent" placeholder="Describe your project..." rows={4}></textarea>
            </div>
            <button 
              disabled={loadingStates.submitForm}
              className="w-full btn-primary-gradient py-3 md:py-4 rounded-md font-bold text-on-primary-fixed uppercase tracking-widest hover:shadow-[0_0_20px_rgba(135,173,255,0.4)] transition-all flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed" 
              type="submit"
            >
              {loadingStates.submitForm
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                : <><Send className="w-4 h-4" /> Send Transmission</>}
            </button>

            {formStatus === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-0 right-0 text-center text-tertiary font-bold text-sm"
              >
                ✓ Transmission received! I'll get back to you soon.
              </motion.div>
            )}
            {formStatus === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-0 right-0 text-center text-red-400 font-bold text-sm"
              >
                ✕ Something went wrong. Please try again or email directly.
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
