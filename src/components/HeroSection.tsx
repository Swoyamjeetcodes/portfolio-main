import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/IMG_20260202_212216.jpg",
    alt: "Portrait",
    className: "md:col-start-1 md:row-start-1 md:row-span-2",
  },
  {
    src: "/images/IMG_20250214_210749.jpg",
    alt: "Award photo",
    className: "md:col-start-1 md:row-start-3 md:row-span-2",
  },
  {
    src: "/images/IMG_20250221_132857.jpg",
    alt: "Group photo",
    className: "md:col-start-2 md:row-start-1",
  },
  {
    src: "/images/20250501_181607.jpg",
    alt: "Cafe portrait",
    className: "md:col-start-2 md:row-start-2 md:row-span-3",
  },
  {
    src: "/images/IMG_20240809_122212.jpg",
    alt: "Event portrait",
    className: "md:col-start-3 md:row-start-1 md:row-span-2",
  },
  {
    src: "/images/IMG_20260122_170937.jpg",
    alt: "Outdoor portrait",
    className: "md:col-start-3 md:row-start-3 md:row-span-2",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="px-6 pt-12 pb-10">
      <div className="max-w-[38rem] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-sm text-primary dark:text-emerald-300/90 mb-3"
        >
          // intro
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4"
        >
          Hi, I&apos;m Jeet
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden mb-8"
        >
          <div className="flex items-start gap-3">
            <p className="font-['Source_Sans_3'] text-xl leading-relaxed text-secondary-foreground flex-1">
              I am a full-stack developer and software engineering student, building useful
              products while learning in public and collaborating on real-world projects.
            </p>
            <figure className="w-44 shrink-0 overflow-hidden rounded-xl border border-border bg-card">
              <img
                src="/images/20250501_181607.jpg"
                alt="Cafe portrait"
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:block font-['Source_Sans_3'] text-lg md:text-2xl leading-relaxed text-secondary-foreground max-w-[38rem] mb-8"
        >
          I am a full-stack developer and software engineering student, building useful products
          while learning in public and collaborating on real-world projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:grid md:grid-cols-3 gap-3 md:auto-rows-[110px]"
        >
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className={`group overflow-hidden rounded-xl border border-border bg-card ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover object-center scale-[1] transform-gpu transition-transform duration-500 ease-out will-change-transform motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-[1.7]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
