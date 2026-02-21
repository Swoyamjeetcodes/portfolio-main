import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Company Name",
    companyUrl: "#",
    period: "Jan 2024 — Present",
    description:
      "Built scalable APIs and microservices. Improved system performance by 40% through caching optimizations. Led migration to cloud-native architecture.",
    tech: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "Previous Co.",
    companyUrl: "#",
    period: "Jun 2022 — Dec 2023",
    description:
      "Developed interactive web platforms using modern frameworks. Improved cross-device UX with responsive design and led UI/UX upgrades across the platform.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup Inc.",
    companyUrl: "#",
    period: "Jan 2022 — May 2022",
    description:
      "Built reusable component library and implemented pixel-perfect designs. Reduced bundle size by 30% through code-splitting and lazy loading.",
    tech: ["React", "JavaScript", "SCSS", "Firebase"],
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

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                <div className="text-center md:text-left">
                  <h4 className="font-['Geist'] font-semibold text-lg text-foreground">{exp.role}</h4>
                  <a href={exp.companyUrl} className="text-sm text-primary hover:underline">
                    {exp.company}
                  </a>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-base text-secondary-foreground leading-relaxed mb-3 text-center md:text-left">
                {exp.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
