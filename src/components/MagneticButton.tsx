"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  magneticStrength?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MagneticButton({
  children,
  magneticStrength = 40,
  className = "",
  style,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for X and Y shifts
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply spring physics for smooth return
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    
    // Get button dimensions and center
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center to mouse
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Set new values bounded by magneticStrength
    x.set(distanceX * (magneticStrength / 100));
    y.set(distanceY * (magneticStrength / 100));
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", ...style }}
      animate={{ x: 0, y: 0 }}
    >
      <motion.button
        style={{ x: springX, y: springY }}
        className={className}
        {...(props as any)}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
