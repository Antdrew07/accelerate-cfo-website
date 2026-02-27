import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -40 };
      case "right": return { opacity: 0, x: 40 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 30 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "left":
      case "right": return { opacity: 1, x: 0 };
      case "none": return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitial()}
        animate={isInView ? getAnimate() : getInitial()}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
