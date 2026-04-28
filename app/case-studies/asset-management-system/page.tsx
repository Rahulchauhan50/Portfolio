"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Server, 
  ShieldCheck, 
  Users, 
  Wrench, 
  BarChart3, 
  MonitorSmartphone,
  Database
} from "lucide-react";

const techStack = [
  "Next.js", "React", "Tailwind CSS", "TanStack Query", 
  "Node.js", "Express.js", "MongoDB", "JWT Auth"
];

const features = [
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
    title: "Asset Inventory",
    description: "Centralized tracking of hardware, software licenses, and room equipment with automated tag generation."
  },
  {
    icon: <Users className="w-6 h-6 text-tertiary" />,
    title: "Employee Assignment",
    description: "Complete lifecycle tracking from assignment to return, preventing double-bookings and lost equipment."
  },
  {
    icon: <Wrench className="w-6 h-6 text-secondary" />,
    title: "Maintenance Tracking",
    description: "Built-in workflows for logging repairs, extending warranties, and preventing assignment of broken assets."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Role-Based Access",
    description: "Strict permission models separating Super Admins from IT Supervisors, with comprehensive audit logging."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-tertiary" />,
    title: "Reports & Analytics",
    description: "Real-time dashboard metrics and exportable reports covering asset status, depreciation, and locations."
  },
  {
    icon: <Server className="w-6 h-6 text-secondary" />,
    title: "Modular Monolith",
    description: "Backend divided into 42 independent phases for isolated testing, seamless deployment, and easy scaling."
  }
];

export default function AMSCaseStudyPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface pb-24 md:pb-32">
      {/* Hero Section */}
      <section className="px-6 md:px-24 pt-24 md:pt-32 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/10">
                Enterprise App
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded-full glass-chip">
                Full-Stack
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter text-white max-w-4xl leading-tight">
              Asset Management <span className="text-primary">System.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              A secure, scalable web platform replacing manual spreadsheets with automated IT asset tracking, maintenance workflows, and robust reporting.
            </p>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-video md:aspect-21/9 mt-12 rounded-2xl border border-outline-variant/20 bg-surface-container-high shadow-[0_20px_80px_rgba(2,8,23,0.28)] overflow-hidden relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[#040c18]/50 backdrop-blur-sm z-10">
              <p className="text-on-surface-variant font-label uppercase tracking-widest flex items-center gap-2">
                <MonitorSmartphone className="w-5 h-5" /> 
                Placeholder: Dashboard / App Screenshot
              </p>
            </div>
            {/* Replace src with your actual image */}
            <img 
              src="/path-to-your-hero-image.jpg" 
              alt="AMS Dashboard" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Quick Stats / Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-outline-variant/20"
          >
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Role</p>
              <p className="text-white font-medium">Full-Stack Architect</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Domain</p>
              <p className="text-white font-medium">IT Operations</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Phases</p>
              <p className="text-white font-medium">84 Implementation Sprints</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Live Link</p>
              <a href="/case-studies" className="text-primary font-medium flex items-center gap-1 hover:underline">
                View Case Study <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 md:px-24 py-24 bg-surface-container-high/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-headline font-bold text-white">The Problem</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Organizations often manage IT equipment using Excel sheets or informal manual processes. As the number of assets, employees, and maintenance activities grows, this approach breaks down.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Asset information was scattered, leading to duplicate records and missing data.</li>
                <li>IT teams had limited visibility into asset ownership and return history.</li>
                <li>Maintenance and warranty tracking required manual reminders, causing missed deadlines.</li>
                <li>Security risks due to lack of centralized permissions and audit logs.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-headline font-bold text-white">The Solution</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                I architected a robust, modular platform that gives IT administrators a reliable way to manage the full asset lifecycle from purchase to assignment, maintenance, and disposal.
              </p>
              <p>
                By breaking the system into 42 backend and 42 frontend phases, I ensured each feature module (assets, users, reporting, maintenance) could be built, tested, and shipped independently, mitigating the risks of a large "big bang" deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Block 2 */}
      <section className="px-6 md:px-24 py-12">
         <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-video rounded-2xl border border-outline-variant/20 bg-surface-container-high overflow-hidden relative flex items-center justify-center"
            >
              <div className="text-center space-y-2 relative z-10">
                <Database className="w-8 h-8 text-on-surface-variant mx-auto mb-2" />
                <p className="text-on-surface-variant font-label uppercase tracking-widest">
                  Placeholder: Architecture or Database Schema
                </p>
              </div>
              <img 
                src="/path-to-secondary-image.jpg" 
                alt="Architecture" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </motion.div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white">Core Features</h2>
            <p className="text-on-surface-variant">
              Engineered with a focus on accountability, automation, and enterprise security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-outline-variant/20 bg-surface-container-high/40 hover:bg-surface-container-high transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-headline font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Outcomes */}
      <section className="px-6 md:px-24 py-24 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-3xl font-headline font-bold text-white">Technology Stack</h2>
            <p className="text-on-surface-variant">
              Built on a modern JavaScript ecosystem ensuring type safety, rapid UI development, and scalable backend performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="pt-8 space-y-4">
              <h3 className="text-lg font-bold text-white">Testing Strategy</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Utilized Jest for unit testing, Supertest for backend APIs, Cypress for End-to-End simulation, and OWASP ZAP for security hardening.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">Business Impact</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">Reduced Asset Loss:</strong> Replaced scattered spreadsheets with a single source of truth, drastically lowering the risk of duplicate records or "ghost" assets.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">Accountability & Security:</strong> Implemented comprehensive audit logs that track every action (who, what, when, IP), ensuring IT compliance and resolving ownership disputes.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">Operational Efficiency:</strong> Automated warranty expiration alerts and maintenance tracking directly translated into less administrative overhead and extended equipment lifespans.
                </p>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Next Project Nav / CTA */}
      <section className="px-6 md:px-24 py-12 text-center border-t border-outline-variant/10">
        <Link 
          href="/case-studies"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#040c18] font-bold hover:bg-gray-200 transition-colors"
        >
          View All Case Studies
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}