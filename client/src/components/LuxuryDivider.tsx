import { motion } from "framer-motion";

export function LuxuryDivider({ variant = "line" }: { variant?: "line" | "diamond" | "gold-bar" }) {
  if (variant === "gold-bar") {
    return (
      <div className="relative py-1 overflow-hidden">
        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.7432_0.1171_89.51)] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className="relative py-6 overflow-hidden">
        <motion.div
          className="luxury-divider-diamond"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    );
  }

  return (
    <div className="relative py-4 overflow-hidden">
      <motion.div
        className="luxury-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
