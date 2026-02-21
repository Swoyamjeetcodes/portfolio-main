import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// about me</h2>
          <h3 className="text-3xl font-bold mb-5">Who I am</h3>

          <div className="space-y-3 text-secondary-foreground leading-relaxed text-base">
            <p>
              I'm a passionate full-stack developer who loves transforming complex
              problems into simple, elegant solutions. With a focus on building
              performant web applications, I bring ideas to life through clean code
              and thoughtful design.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or writing about software engineering.
            </p>
          </div>

          {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Built" },
              { number: "5+", label: "Happy Clients" },
              { number: "1K+", label: "Contributions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-lg bg-card border border-border"
              >
                <div className="text-2xl font-bold text-primary font-mono">{stat.number}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
