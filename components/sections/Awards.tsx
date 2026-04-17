"use client";

import { motion } from "motion/react";
import { Award, Trophy } from "lucide-react";

export default function Awards() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24" id="awards">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">Recognitions & <span className="text-tertiary">Awards.</span></h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* Award 1 */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden glass-card p-4 md:p-6 border border-outline-variant/20 shadow-2xl"
            >
              <img 
                src="/awards/best_student.png" 
                alt="Student of the Month Award" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-6 md:space-y-8 bg-surface-container-high p-8 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden"
            >
              <Trophy className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12" />
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-primary font-bold font-label">Excellence Award</span>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">"Student of the Month"</h3>
              </div>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
                I received the award for "Student of the Month" for exceptional performance in web and software development, as well as overall excellence. I won this award by solving complex problems.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white shrink-0">
                  <img 
                    src="https://media.licdn.com/dms/image/C5103AQFXEu4schLQ6w/profile-displayphoto-shrink_800_800/0/1581133129980?e=2147483647&v=beta&t=IL1MkHydusDW8nlzhJTIVi9uUReXORB4dIVxflb4A10" 
                    alt="DSDC Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">DSDC</p>
                  <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Delhi Skill Development Centre</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Award 2 */}
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center flex-col-reverse lg:flex-row">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-6 md:space-y-8 bg-surface-container-high p-8 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden order-2 lg:order-1"
            >
              <Award className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12" />
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-secondary font-bold font-label">Mentorship Recognition</span>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">NGO Child Mentorship</h3>
              </div>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
                I was honored with an award by <span className="font-bold text-white">Netaji Subhas University of Technology</span> for my role as a mentor for the children of Jansharnam NGO during Kirti 2022, an event organized by NSUT. This recognition was a result of my dedication and guidance to the children, showcasing my commitment to their growth and development.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Netaji_Subhas_University_of_Technology.svg/220px-Netaji_Subhas_University_of_Technology.svg.png" 
                    alt="NSUT Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-bold">Kirti 2022, NSUT</p>
                  <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Netaji Subhas University</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden glass-card p-4 md:p-6 border border-outline-variant/20 shadow-2xl order-1 lg:order-2"
            >
              <img 
                src="/awards/nsut_award.png" 
                alt="NSUT Award" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
