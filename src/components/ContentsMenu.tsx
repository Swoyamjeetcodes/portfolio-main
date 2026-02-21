import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Intro" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const ContentsMenu = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const getSectionNodes = () =>
      sections
        .map(({ id }) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node));

    const updateActiveSection = () => {
      const sectionNodes = getSectionNodes();
      if (!sectionNodes.length) return;

      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const documentBottom = document.documentElement.scrollHeight - 2;

      // Ensure the final section can still become active near page end.
      if (viewportBottom >= documentBottom) {
        setActiveSection(sectionNodes[sectionNodes.length - 1].id);
        return;
      }

      // Track section by a shallow top offset so click-jumps don't instantly
      // advance to the next short section.
      const anchorY = scrollY + 120;
      let currentId = sectionNodes[0].id;

      for (const node of sectionNodes) {
        if (node.offsetTop <= anchorY) {
          currentId = node.id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <aside className="fixed left-[calc((50vw-19rem)/2)] top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 xl:block">
      <nav
        aria-label="Contents menu"
        className="rounded-xl border border-border/70 bg-background/80 px-3 py-3 shadow-sm backdrop-blur dark:border-emerald-500/30"
      >
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    const target = document.getElementById(section.id);
                    if (!target) return;
                    setActiveSection(section.id);
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${section.id}`);
                  }}
                  className={`group flex items-center gap-2 text-sm transition-colors ${
                    isActive
                      ? "text-primary dark:text-emerald-300"
                      : "text-muted-foreground hover:text-foreground dark:text-emerald-200/70 dark:hover:text-emerald-300"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full border border-border transition-all ${
                      isActive
                        ? "bg-primary border-primary scale-110 dark:bg-emerald-400 dark:border-emerald-400"
                        : "bg-transparent dark:border-emerald-500/45"
                    }`}
                  />
                  <span className="font-['Geist']">{section.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default ContentsMenu;
