import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";

const socialLinks = [
  {
    label: "GitHub",
    handle: "@Swoyamjeetcodes",
    href: "https://github.com/Swoyamjeetcodes",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "/in/swoyamjeetsahu",
    href: "https://www.linkedin.com/in/swoyamjeetsahu/",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    handle: "@SahuSwoyamjeet",
    href: "https://x.com/SahuSwoyamjeet",
    icon: Twitter,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// contact</h2>
          <h3 className="text-3xl font-bold mb-2">Let's connect</h3>
          <p className="text-base text-secondary-foreground max-w-md mx-auto mb-5">
            If you've read this far, you might be interested in what I do.
          </p>

          <div className="w-full rounded-xl border border-border bg-card p-6">
            <div className="mx-auto w-full max-w-sm mb-4">
              <a
                href="https://cal.id/swoyamjeetsahu/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-left transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
                aria-label="Book a free call"
              >
                <img
                  src="https://github.com/Swoyamjeetcodes.png"
                  alt="Swoyamjeet avatar"
                  className="size-8 rounded-full border border-border"
                  loading="lazy"
                />
                <span className="text-muted-foreground">+</span>
                <span className="rounded-full border border-border px-2 py-0.5 text-sm text-muted-foreground">
                  You
                </span>
                <span className="font-['Geist'] text-xl font-semibold text-gray-shift">
                  Book a Free Call
                </span>
              </a>
            </div>

            <div className="grid gap-3 text-left md:grid-cols-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
                    aria-label={`Open ${item.label}`}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <Icon size={15} className="text-muted-foreground group-hover:text-primary" />
                      <span className="font-['Geist'] text-xl font-semibold text-foreground group-hover:text-primary">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.handle}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
