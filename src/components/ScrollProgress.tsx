"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "var(--accent)",
        backgroundOrigin: "border-box",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: 100, // Highest index to float above absolute/fixed headers
      }}
    />
  );
}
