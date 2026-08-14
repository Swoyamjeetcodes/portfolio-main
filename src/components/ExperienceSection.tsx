import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "EPAM Systems",
    companyUrl: "https://www.epam.com",
    logo: "/images/epam.jpg",
    location: "India",
    period: "Jun 2025 — Present",
    description:
      "Working as a Junior Software Engineer, contributing to enterprise-level software development projects. Collaborating with cross-functional teams to deliver high-quality solutions for clients.",
    tech: ["JavaScript", "React", "MongoDB", "Express", "AWS"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// experience</h2>
          <h3 className="text-3xl font-bold">Where I've worked</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line - positioned on the left */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 -translate-x-1/2 top-0 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

              {/* Content */}
              <div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  {/* Header with logo and company */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-white p-1 flex-shrink-0 flex items-center justify-center border border-border overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Geist'] font-semibold text-lg text-foreground leading-tight">
                        {exp.role}
                      </h4>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {exp.company}
                      </a>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-secondary-foreground leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
