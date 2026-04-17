export default function Experience() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-24 bg-surface-container-low" id="experience">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter">Experience <span className="text-tertiary">Timeline.</span></h2>
        <div className="space-y-10 md:space-y-12">
          {/* Job 1 */}
          <div className="relative pl-8 md:pl-12 border-l border-outline-variant/30 pb-10 md:pb-12 group">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-125 transition-transform"></div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-white">Full Stack Developer</h3>
                  <div className="flex items-center gap-2 text-primary font-label text-xs md:text-sm uppercase tracking-widest">
                    <span>Internet Doctors</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                    <span>Gurugram, Haryana</span>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full h-fit whitespace-nowrap">March 2026 - Present</span>
              </div>
              <ul className="space-y-2 text-on-surface-variant text-sm md:text-base leading-relaxed font-body list-disc pl-4">
                <li>Working on backend of taxi booking app</li>
                <li>Working on architect design and develop an online exam conduct platform</li>
              </ul>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative pl-8 md:pl-12 border-l border-outline-variant/30 pb-10 md:pb-12 group">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-tertiary ring-4 ring-tertiary/20 group-hover:scale-125 transition-transform"></div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-white">Full Stack Developer</h3>
                  <div className="flex items-center gap-2 text-tertiary font-label text-xs md:text-sm uppercase tracking-widest">
                    <span>Infinity Advertising Network</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                    <span>New Delhi</span>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full h-fit whitespace-nowrap">Feb 2024 - March 2026</span>
              </div>
              <ul className="space-y-2 text-on-surface-variant text-sm md:text-base leading-relaxed font-body list-disc pl-4">
                <li>Designed and developed an internal IT Asset Management System (MERN) to track company assets with role-based access, reporting, and secure authentication.</li>
                <li>Built and maintained client-facing websites and applications using React.js, Next.js, and WordPress, ensuring responsive UI and optimized performance.</li>
                <li>Developed and managed Next.js-based in-house platforms including contentfoundry.in and infinityadvt.com, handling deployment and server configuration.</li>
                <li>Built automation-driven internal systems using Zoho Creator, Deluge scripting, and AI-assisted workflows, including an IT support desk and sales tracking system.</li>
              </ul>
            </div>
          </div>

          {/* Job 3 */}
          <div className="relative pl-8 md:pl-12 border-l border-outline-variant/30 group">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20 group-hover:scale-125 transition-transform"></div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-white">ReactJs Developer Intern</h3>
                  <div className="flex items-center gap-2 text-secondary font-label text-xs md:text-sm uppercase tracking-widest">
                    <span>Infinity Advertising Services</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                    <span>New Delhi</span>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full h-fit whitespace-nowrap">Sept 2023 - Feb 2024</span>
              </div>
              <ul className="space-y-2 text-on-surface-variant text-sm md:text-base leading-relaxed font-body list-disc pl-4">
                <li>Migrated and modernized legacy websites using React.js, improving performance, maintainability, and responsive behavior.</li>
                <li>Gained hands-on experience in deployment pipelines, hosting environments, and domain management, supporting real-world production releases.</li>
                <li>Developed and deployed WordPress-based and custom web solutions for client projects, delivering polished, mobile-friendly interfaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
