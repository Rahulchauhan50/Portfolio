"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 border-t border-zinc-800/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-zinc-100 font-bold font-body text-sm tracking-widest uppercase">Â© 2024 RAHUL CHAUHAN. BUILT WITH PRECISION.</p>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Architecting Web Experiences</p>
        </div>
        <div className="flex gap-8 mt-8 md:mt-0 font-body text-sm tracking-widest uppercase">
          <a className="text-zinc-500 hover:text-primary transition-all hover:-translate-y-1 duration-300" href="https://github.com/Rahulchauhan50" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
          <a className="text-zinc-500 hover:text-primary transition-all hover:-translate-y-1 duration-300" href="https://www.linkedin.com/in/rahulchauhan50/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
          <a className="text-zinc-500 hover:text-primary transition-all hover:-translate-y-1 duration-300" href="mailto:rahulchauhan54230@gmail.com"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
