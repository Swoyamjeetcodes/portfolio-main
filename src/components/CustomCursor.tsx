import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const ringTargetRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;

    const updateDot = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      setDotPosition(next);
      ringTargetRef.current = next;
      setIsVisible(true);
    };

    const hide = () => setIsVisible(false);

    const animateRing = () => {
      setRingPosition((prev) => {
        const ease = 0.16;
        const nextX = prev.x + (ringTargetRef.current.x - prev.x) * ease;
        const nextY = prev.y + (ringTargetRef.current.y - prev.y) * ease;
        return { x: nextX, y: nextY };
      });
      animationFrameRef.current = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", updateDot);
    window.addEventListener("mouseenter", updateDot);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    animationFrameRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", updateDot);
      window.removeEventListener("mouseenter", updateDot);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[120] hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-150`}
      aria-hidden="true"
    >
      <span
        className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/85"
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
      <span
        className="absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/70"
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
