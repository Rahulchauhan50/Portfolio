"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Bot, 
  Mail, 
  Zap, 
  Database, 
  LayoutDashboard, 
  BrainCircuit,
  ArrowRight,
  Activity,
  ShieldAlert
} from "lucide-react";

const techStack = [
  "Node.js Microservices", "OpenAI API", "LLMs", "Prisma", 
  "PostgreSQL", "React", "TypeScript", "Redis"
];

const workflowSteps = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    title: "1. Ingestion Microservice",
    description: "A dedicated Node.js worker constantly listens to corporate inboxes, securely fetching and normalizing raw email data using IMAP/Graph APIs."
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-tertiary" />,
    title: "2. LLM Processing Pipeline",
    description: "Email payloads are anonymized and sent to OpenAI's API. The LLM extracts intent, categorizes the department, summarizes the context, and assigns a priority score."
  },
  {
    icon: <Database className="w-5 h-5 text-secondary" />,
    title: "3. Persistent Storage",
    description: "Parsed metadata, summaries, and original payloads are strictly modeled and saved via Prisma, ensuring a robust, queryable history of all communications."
  },
  {
    icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
    title: "4. Triage & Override Dashboard",
    description: "Customer service and IT admins view a prioritized queue. High-priority alerts bypass queues via webhooks, while the dashboard allows for manual accuracy overrides."
  }
];

export default function EmailTriageCaseStudyPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      
      {/* 1. Split Hero Section */}
      <section className="px-6 md:px-24 pt-24 md:pt-32 pb-16 md:pb-24 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-tertiary border border-tertiary/30 px-3 py-1 rounded-full bg-tertiary/10">
                AI Automation
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded-full glass-chip">
                Microservices
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter text-white leading-tight">
              Intelligent <br />
              <span className="text-tertiary">Email Triage.</span>
            </h1>
            
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              An automated, LLM-powered pipeline that parses, categorizes, and prioritizes incoming corporate emails, ensuring critical communications are never missed.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#040c18] text-sm font-bold hover:bg-gray-200 transition-colors">
                View Source <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Abstract Hero Image / Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-3xl border border-outline-variant/20 bg-surface-container-high/50 shadow-[0_0_80px_rgba(123,241,200,0.05)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#040c18]/40 backdrop-blur-sm z-10 p-8 text-center space-y-4">
              <Bot className="w-12 h-12 text-tertiary animate-pulse" />
              <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">
                Placeholder: AI Data Node Graphic
              </p>
            </div>
            {/* Replace src with your actual image */}
            <img 
              src="/path-to-your-ai-image.jpg" 
              alt="AI Processing Nodes" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* 2. Impact Metrics Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-b border-outline-variant/10 bg-surface-container-high/30"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
            <div className="space-y-2 md:px-8 first:px-0">
              <Zap className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-4xl font-headline font-bold text-white">90%</h3>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Faster Routing</p>
            </div>
            <div className="space-y-2 md:px-8 pt-8 md:pt-0">
              <ShieldAlert className="w-6 h-6 text-tertiary mb-4" />
              <h3 className="text-4xl font-headline font-bold text-white">Zero</h3>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Critical Misses</p>
            </div>
            <div className="space-y-2 md:px-8 pt-8 md:pt-0">
              <Activity className="w-6 h-6 text-secondary mb-4" />
              <h3 className="text-4xl font-headline font-bold text-white">10k+</h3>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">Emails Processed Daily</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. The Architecture / Workflow (Vertical Timeline) */}
      <section className="px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6 sticky top-24 h-fit">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tight">
              The Data Pipeline.
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Replacing tedious manual triage required designing a reliable, fault-tolerant pipeline. The system is broken down into isolated microservices to ensure the LLM processing never blocks email ingestion.
            </p>
          </div>

          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-outline-variant/20 hidden md:block" />
            
            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-[15px] top-1 w-5 h-5 rounded-full bg-surface border-4 border-surface-container-high items-center justify-center ring-1 ring-outline-variant/30 z-10" />
                  
                  <div className="bg-surface-container-high/40 border border-outline-variant/20 rounded-2xl p-6 md:p-8 hover:bg-surface-container-high/60 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-headline font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bento Box Feature Grid */}
      <section className="px-6 md:px-24 py-24 bg-surface-container-high/10 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">System Capabilities</h2>
            <p className="text-on-surface-variant">Built for precision, scalability, and human-in-the-loop oversight.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
            {/* Large Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-3xl p-8 bg-surface-container-high border border-outline-variant/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <BrainCircuit className="w-8 h-8 text-tertiary mb-6" />
              <h3 className="text-2xl font-headline font-bold text-white mb-3">Contextual Categorization</h3>
              <p className="text-on-surface-variant max-w-md relative z-10">
                Unlike simple keyword matching, the LLM understands nuance, sarcasm, and urgency. It accurately routes technical support tickets away from general sales inquiries with a high degree of confidence.
              </p>
            </motion.div>

            {/* Small Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 rounded-3xl p-8 bg-surface-container-high border border-outline-variant/20 flex flex-col justify-between group"
            >
              <Bot className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-headline font-bold text-white mb-2">Smart Summaries</h3>
                <p className="text-on-surface-variant text-sm">Long email threads are condensed into 3-bullet summaries for rapid reading.</p>
              </div>
            </motion.div>

            {/* Small Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 rounded-3xl p-8 bg-surface-container-high border border-outline-variant/20 flex flex-col justify-between group"
            >
              <Database className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="text-xl font-headline font-bold text-white mb-2">Prisma ORM</h3>
                <p className="text-on-surface-variant text-sm">Type-safe database interactions ensuring relational integrity of email metadata.</p>
              </div>
            </motion.div>

            {/* Large Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 rounded-3xl p-8 bg-surface-container-high border border-outline-variant/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <LayoutDashboard className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-headline font-bold text-white mb-3">Triage & Override Dashboard</h3>
              <p className="text-on-surface-variant max-w-md relative z-10">
                A custom React interface that displays the AI's confidence score. Staff can manually override categorizations, which creates a feedback loop to refine future automated decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Typography Block */}
      <section className="px-6 md:px-24 py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-6">
              Engineering Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-5 py-2.5 rounded-full text-sm font-bold text-white border border-outline-variant/20 bg-surface-container-high hover:bg-white hover:text-[#040c18] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="px-6 md:px-24 py-16 bg-surface-container-high/40 text-center">
        <Link 
          href="/case-studies"
          className="inline-flex items-center gap-3 text-sm font-label font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Explore Other Case Studies
        </Link>
      </section>
      
    </main>
  );
}