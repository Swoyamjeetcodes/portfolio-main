import {
  BadgeCheck,
  Code2,
  FolderKanban,
  GitPullRequest,
  Github,
  Home,
  Linkedin,
  Mail,
  MessageSquare,
  Moon,
  Sun,
  UserRound,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Open Source", href: "#open-source", icon: GitPullRequest },
  { label: "Certifications", href: "#certifications", icon: BadgeCheck },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Connect", href: "#contact", icon: MessageSquare },
];

const socialItems = [
  { label: "GitHub", href: "https://github.com/Swoyamjeetcodes", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/swoyamjeetsahu/", icon: Linkedin },
  { label: "X", href: "https://x.com/SahuSwoyamjeet", icon: Twitter },
  { label: "Email", href: "mailto:work.swoyamjeetsahu@gmail.com", icon: Mail },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Always start in light mode for first render.
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const handleSectionScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-3">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-fit max-w-[95vw]"
        aria-label="Primary navigation"
      >
        <div className="rounded-full border border-border/80 bg-background/90 px-2 py-2 shadow-lg backdrop-blur-xl">
          <ul className="flex items-center gap-0.5 md:gap-1 overflow-hidden whitespace-nowrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex-shrink-0">
                  <a
                    href={item.href}
                    onClick={(event) => handleSectionScroll(event, item.href)}
                    className="inline-flex size-8 md:size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              );
            })}
            <li className="mx-1 hidden h-6 w-px bg-border/80 md:block" aria-hidden="true" />
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="hidden flex-shrink-0 md:block">
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              );
            })}
            <li className="mx-1 h-6 w-px bg-border/80" aria-hidden="true" />
            <li className="flex-shrink-0">
              <button
                onClick={toggleTheme}
                className="inline-flex size-8 md:size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                aria-label="Toggle theme"
                title="Toggle theme"
                type="button"
              >
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                <span className="sr-only">Toggle theme</span>
              </button>
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
