import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MMSpace",
    description:
      "A comprehensive platform for managing mentor-mentee relationships, facilitating communication, tracking attendance, and managing leave requests.",
    tech: ["React", "Tailwind CSS", "Socket.IO Client", "React Router", "Node.js", "MongoDB"],
    liveUrl: "https://www.mmspace.me/login",
    sourceUrl: "https://github.com/Swoyamjeetcodes/MMSpace",
    status: "Completed",
    previewImage: "/images/preview/MMSpace.png",
  },
  {
    title: "Arsenal AI",
    description:
      "A comprehensive suite of AI-powered tools built with React and Google's Generative AI.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Google Generative AI"],
    liveUrl: "https://arsenalai.vercel.app/",
    sourceUrl: "https://github.com/Swoyamjeetcodes/ArsenalAI",
    status: "Completed",
    previewImage: "/images/preview/ARSENALAI.png",
  },
  {
    title: "COptimize",
    description:
      "A web-based tool that analyzes C code and suggests the best compiler optimization flag using machine learning. It predicts the most suitable flag (-O0, -O1, -O2, -O3, -Ofast) to reduce execution time.",
    tech: [
      "Flask",
      "scikit-learn (Random Forest Classifier)",
      "HTML",
      "CSS",
      "JavaScript",
      "Render.com",
    ],
    liveUrl: "https://coptimize.onrender.com/",
    sourceUrl: "https://github.com/Swoyamjeetcodes/coptimize",
    status: "Completed",
    previewImage: "/images/preview/COptimize.png",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [preview, setPreview] = useState({
    src: "",
    alt: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const updatePreviewPosition = (clientX: number, clientY: number) => {
    const previewWidth = 260;
    const previewHeight = 180;
    const gap = 20;
    const edge = 24;

    let x = clientX + gap;
    let y = clientY + gap;

    if (x + previewWidth > window.innerWidth - edge) x = clientX - previewWidth - gap;
    if (y + previewHeight > window.innerHeight - edge) y = clientY - previewHeight - gap;

    return { x, y };
  };

  const showPreview = (src: string, alt: string, clientX: number, clientY: number) => {
    const { x, y } = updatePreviewPosition(clientX, clientY);
    setPreview({ src, alt, x, y, visible: true });
  };

  const movePreview = (clientX: number, clientY: number) => {
    setPreview((prev) => {
      if (!prev.visible) return prev;
      const { x, y } = updatePreviewPosition(clientX, clientY);
      return { ...prev, x, y };
    });
  };

  return (
    <section id="projects" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// projects</h2>
          <h3 className="text-3xl font-bold">What I've built</h3>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-300"
              role="link"
              tabIndex={0}
              onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                }
              }}
              onMouseEnter={(e) =>
                showPreview(project.previewImage, `${project.title} preview`, e.clientX, e.clientY)
              }
              onMouseMove={(e) => movePreview(e.clientX, e.clientY)}
              onMouseLeave={() => setPreview((prev) => ({ ...prev, visible: false }))}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-['Geist'] font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span
                    className={`px-1.5 py-0.5 text-[10px] font-mono rounded-full border ${project.status === "Completed"
                      ? "border-primary/30 text-primary"
                      : "border-yellow-500/30 text-yellow-500"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors" aria-label="Source code">
                      <Github size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live preview">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-base text-secondary-foreground leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div
          className={`pointer-events-none fixed z-[70] hidden overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-opacity duration-150 lg:block ${preview.visible ? "opacity-100" : "opacity-0"}`}
          style={{ left: preview.x, top: preview.y }}
          aria-hidden="true"
        >
          {preview.src ? (
            <img src={preview.src} alt={preview.alt} className="block h-40 w-[260px] object-cover" />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
