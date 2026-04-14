"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(209, 176, 107, 0)", // transparent center
      border: "1.5px solid rgba(209, 176, 107, 0.5)", // accent border
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.8,
      backgroundColor: "rgba(209, 176, 107, 0.1)", // filled slightly
      border: "1.5px solid rgba(209, 176, 107, 0.2)",
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* Trailing Ring */}
      <motion.div
        className="cursor-ring"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference"
        }}
      />
      
      {/* Solid Center Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--accent)", // gold core
          pointerEvents: "none",
          zIndex: 10000,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </>
  );
}
