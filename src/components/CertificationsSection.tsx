import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    url: "https://www.credly.com/badges/15d855b4-cc69-4634-9fe2-fd037445ee79/public_url",
    previewImage: "/images/preview/Cloud%20Foundations.png",
  },
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    url: "https://www.credly.com/badges/1e1c903d-78bb-4d79-9379-15ef6fe0595c/public_url",
    previewImage: "/images/preview/Cloud%20Architect.png",
  },
];

const CertificationsSection = () => {
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
    <section id="certifications" className="py-11 px-6">
      <div className="max-w-[38rem] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-2">// certifications</h2>
          <h3 className="text-3xl font-bold">Credentials</h3>
        </motion.div>

        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex items-start justify-between gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-300"
              aria-label={`View certification: ${cert.title}`}
              onMouseEnter={(e) =>
                showPreview(cert.previewImage, `${cert.title} preview`, e.clientX, e.clientY)
              }
              onMouseMove={(e) => movePreview(e.clientX, e.clientY)}
              onMouseLeave={() => setPreview((prev) => ({ ...prev, visible: false }))}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <Award size={16} />
                </span>
                <div>
                  <h4 className="font-['Geist'] font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-base text-secondary-foreground">{cert.issuer}</p>
                </div>
              </div>
              <ExternalLink
                size={16}
                className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              />
            </motion.a>
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

export default CertificationsSection;
