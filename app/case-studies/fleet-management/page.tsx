"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Server, 
  ShieldCheck, 
  CarFront, 
  Map, 
  CreditCard,
  MountainSnow,
  Database,
  Monitor,
  Smartphone
} from "lucide-react";

const techStack = [
  "Node.js", "Express.js", "TypeScript", "MongoDB", 
  "Redis", "BullMQ", "Razorpay / Stripe", "S3 Storage"
];

const features = [
  {
    icon: <CarFront className="w-6 h-6 text-primary" />,
    title: "Scheduled Ride Inventory",
    description: "Designed for a scheduled marketplace rather than live dispatch, allowing drivers to publish routes and passengers to book in advance."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-tertiary" />,
    title: "Dual Role & Verification",
    description: "Seamless single-account architecture where a user starts as a passenger and can unlock verified driver capabilities via admin approval."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-secondary" />,
    title: "Seat-Hold & Payments",
    description: "Implemented Redis-backed transactional seat holds to prevent overselling, tied to post-acceptance payment and refund workflows."
  },
  {
    icon: <MountainSnow className="w-6 h-6 text-primary" />,
    title: "Char Dham & Special Packages",
    description: "Engineered a parallel domain specifically for fixed-itinerary tourism, easily handling multi-day trips like the Char Dham Yatra."
  },
  {
    icon: <Map className="w-6 h-6 text-tertiary" />,
    title: "Immutable Bookings",
    description: "Structured booking snapshots so that historical driver details, vehicle information, and pricing never change retroactively."
  },
  {
    icon: <Server className="w-6 h-6 text-secondary" />,
    title: "Phased Execution",
    description: "Broke the backend down into 31 isolated implementation phases to ensure step-by-step testing, delivery, and scaling."
  }
];

export default function FleetBackendCaseStudyPage() {
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
                Backend Architecture
              </span>
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded-full glass-chip">
                System Design
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold tracking-tighter text-white max-w-4xl leading-tight">
              Fleet & Shared Ride <span className="text-primary">Platform.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              A scalable Node.js backend architected for Parvatiya Vahan to manage scheduled local tourist travel and specialized pilgrimage packages.
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
                <Server className="w-5 h-5" /> 
                Placeholder: API / Architecture Dashboard
              </p>
            </div>
            {/* Replace src with your actual image */}
            <img 
              src="/path-to-your-hero-image.jpg" 
              alt="Fleet Backend Architecture" 
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
              <p className="text-white font-medium">Backend System Designer</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Client</p>
              <p className="text-white font-medium">Parvatiya Vahan</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Execution</p>
              <p className="text-white font-medium">31 Phased Deliverables</p>
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
            <h2 className="text-3xl font-headline font-bold text-white">The Challenge</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Parvatiya Vahan needed a unified digital platform to manage a diverse set of mobility services. They needed to support daily scheduled local transport alongside specialized, high-value tourist packages like the Char Dham Yatra.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Creating a system where users could easily transition from regular passengers to verified fleet drivers.</li>
                <li>Moving away from an Uber-style "live dispatch" model to a scheduled inventory marketplace.</li>
                <li>Preventing seat double-bookings in a high-concurrency environment.</li>
                <li>Designing separate but connected data models for standard point-to-point rides and multi-day, fixed-itinerary tours.</li>
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
            <h2 className="text-3xl font-headline font-bold text-white">The Architecture</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                I designed a modular monolith backend using Node.js and MongoDB, enhanced with Redis and BullMQ for time-sensitive background tasks like seat holds and OTP expiry. 
              </p>
              <p>
                To ensure a risk-free rollout, I broke the product requirements down into a 31-phase implementation blueprint. This guaranteed that core modules like OTP auth, document verification, booking requests, and finally payments were built, tested, and tagged sequentially without massive "big bang" integration issues.
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
                  Placeholder: MongoDB Schema / Phase Strategy
                </p>
              </div>
              <img 
                src="/path-to-secondary-image.jpg" 
                alt="System Architecture Diagram" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
            </motion.div>
         </div>
      </section>

      {/* Platform Snapshots */}
      <section className="px-6 md:px-24 py-12 md:py-16 min-h-[100svh] flex items-center justify-center relative overflow-hidden">
        {/* Background glow for aesthetics */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full" />
        </div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col md:gap-12 gap-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto shrink-0">
            <span className="inline-block text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary border border-primary/30 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm">
              Platform Interface
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white tracking-tight leading-tight">
              A look into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">system.</span>
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg">
              Showcasing the passenger experience and the robust administrative dashboard built to manage scheduled fleets and dynamic pricing.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto pb-12 md:pb-20 flex justify-center shrink-0">
            
            {/* Desktop Mockup (Background) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[90%] md:w-[85%] rounded-xl md:rounded-2xl border border-white/10 bg-surface-container shadow-[0_20px_80px_rgba(0,0,0,0.5)] relative z-10 md:mr-auto overflow-hidden group"
            >
              {/* Browser Header */}
              <div className="h-8 md:h-10 bg-white/5 border-b border-white/10 flex items-center px-3 md:px-4 gap-4 backdrop-blur-md">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
                </div>
                <div className="mx-auto w-full max-w-[250px] bg-black/20 border border-white/5 rounded-md px-4 py-1 text-[9px] md:text-xs text-on-surface-variant/70 flex items-center justify-center gap-2 shadow-inner">
                  <Monitor className="w-3 h-3 opacity-50" />
                  admin.parvatiyavahan.com
                </div>
              </div>
              {/* Image Area */}
              <div className="aspect-[16/10] bg-surface-container-high relative flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#040c18] to-surface-container-high z-0" />
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                 
                 <div className="z-10 text-center space-y-2 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                    <Database className="w-8 h-8 md:w-10 md:h-10 mx-auto text-primary" />
                    <p className="text-xs md:text-sm font-label uppercase tracking-widest text-on-surface-variant">Admin Dashboard</p>
                 </div>
                 <img 
                   src="/path-to-desktop-screenshot.jpg" 
                   alt="Admin Dashboard" 
                   className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-700"
                 />
              </div>
            </motion.div>

            {/* Mobile Mockup (Foreground) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute right-0 md:right-4 bottom-0 w-[120px] md:w-[220px] aspect-[9/19] rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-surface-container-highest bg-[#020617] shadow-[0_30px_100px_rgba(0,0,0,0.8)] z-20 overflow-hidden group"
            >
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-4 md:h-5 bg-surface-container-highest rounded-b-xl w-1/2 mx-auto z-20 flex justify-center items-end pb-1 md:pb-1.5">
                <div className="w-8 h-1 md:w-10 md:h-1 rounded-full bg-white/10" />
              </div>
              
              {/* Image Area */}
              <div className="w-full h-full relative flex items-center justify-center pt-6">
                 <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-[#020617] z-0" />
                 <div className="z-10 text-center space-y-1.5 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                    <Smartphone className="w-5 h-5 md:w-7 md:h-7 mx-auto text-secondary" />
                    <p className="text-[8px] md:text-[10px] font-label uppercase tracking-widest text-on-surface-variant">App View</p>
                 </div>
                 <img 
                   src="/path-to-mobile-screenshot.jpg" 
                   alt="Passenger App" 
                   className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-80 transition-opacity duration-700"
                 />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white">System Design Highlights</h2>
            <p className="text-on-surface-variant">
              Engineered for transactional safety, distinct user workflows, and long-term scalability.
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
              A robust backend foundation built heavily on enterprise Node.js standards.
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
              <h3 className="text-lg font-bold text-white">Testing & Delivery</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Utilized Postman/Bruno for API contracts, Jest + Supertest for automated backend flows, and MongoDB shell verification. Every phase followed a strict `1 phase = 1 branch = 1 tag` Git methodology.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">Product Translation</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">From Idea to Architecture:</strong> Successfully translated raw UI flows and business needs into precise data models, separating regular ride offers from complex Char Dham package tours.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">Transaction Safety:</strong> Engineered a state machine where booking requests are strictly decoupled from confirmed bookings, relying on webhooks and Redis expirations to handle payment timeouts safely.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-on-surface-variant">
                  <strong className="text-white font-medium">Operational Readiness:</strong> Built immutable snapshots for historical bookings. If a driver changes their vehicle or price a month later, past passenger receipts and admin histories remain completely intact.
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