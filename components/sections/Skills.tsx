"use client";

import { motion } from "motion/react";
import { Globe, Settings, Database, Network, Repeat, Code2 } from "lucide-react";

const SkillBadge: React.FC<{ name: string }> = ({ name }) => {
  const getIcon = (skill: string) => {
    const slugMap: Record<string, string> = {
      "React.js": "react",
      "TypeScript": "typescript",
      "Next.js": "nextdotjs",
      "Redux Toolkit": "redux",
      "Tailwind CSS": "tailwindcss",
      "Framer Motion": "framer",
      "Framermotion": "framer",
      "Node.js": "nodedotjs",
      "Express": "express",
      "MongoDB": "mongodb",
      "PostgreSQL": "postgresql",
      "MySQL": "mysql",
      "Prisma": "prisma",
      "Git": "git",
      "n8n": "n8n",
      "Zoho": "zoho",
    };

    if (slugMap[skill]) {
      return (
        <img 
          src={`https://cdn.simpleicons.org/${slugMap[skill]}`} 
          alt={skill} 
          className="w-4 h-4 md:w-5 md:h-5 object-contain brightness-90 group-hover:brightness-100 transition-all"
          referrerPolicy="no-referrer"
        />
      );
    }

    if (skill === "REST APIs") return <Network className="w-4 h-4 md:w-5 md:h-5 text-secondary" />;
    if (skill === "CI/CD") return <Repeat className="w-4 h-4 md:w-5 md:h-5 text-tertiary" />;
    
    return <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />;
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="group flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-xl glass hover:border-primary/30 transition-all cursor-pointer"
    >
      {getIcon(name)}
      <span className="text-xs md:text-sm font-medium text-on-surface group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24" id="skills">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">Technical <span className="text-primary">Stack</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 space-y-6 md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="text-primary w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">Frontend Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {["React.js", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framermotion"].map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
          {/* DevOps */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="text-tertiary w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">DevOps & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {["Git", "n8n", "Zoho", "CI/CD"].map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
          {/* Backend */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 md:p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 space-y-6 md:col-span-3"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Database className="text-secondary w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-white">Backend & Infrastructure</h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "REST APIs"].map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
