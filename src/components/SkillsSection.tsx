import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillLinks: Record<string, string> = {
  TypeScript: "https://www.typescriptlang.org/docs/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Python: "https://www.python.org/doc/",
  Java: "https://docs.oracle.com/en/java/",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/docs",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  "Framer Motion": "https://www.framer.com/motion/",
  "Node.js": "https://nodejs.org/docs/latest/api/",
  Express: "https://expressjs.com/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  MongoDB: "https://www.mongodb.com/docs/",
  Docker: "https://docs.docker.com/",
  AWS: "https://docs.aws.amazon.com/",
  "CI/CD": "https://en.wikipedia.org/wiki/CI/CD",
  Linux: "https://www.kernel.org/doc/html/latest/",
  Git: "https://git-scm.com/doc",
  Github: "https://github.com/",
  "VS Code": "https://code.visualstudio.com/docs",
};

const skillCategories = [
  { category: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java"] },
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Linux"] },
  { category: "Tools", skills: ["Git", "Github", "VS Code"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// skills</h2>
          <h3 className="text-3xl font-bold">What I use</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-4 rounded-xl bg-card border border-border text-center"
            >
              <h4 className="font-['Geist'] text-xs text-primary mb-2 uppercase tracking-wider">
                {cat.category}
              </h4>
              <div className="flex flex-wrap justify-center gap-1.5">
                {cat.skills.map((skill) => (
                  <a
                    key={skill}
                    href={skillLinks[skill]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-sm font-mono rounded bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-pointer"
                    aria-label={`Open ${skill} documentation`}
                  >
                    {skill}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
