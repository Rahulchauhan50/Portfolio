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
  Database
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