"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  el?: any;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
}

export default function RevealText({ 
  text, 
  el: Wrapper = "p", 
  className, 
  style,
  staggerDelay = 0.05 
}: RevealTextProps) {
  
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className} style={{ ...style, margin: 0 } as any}>
      {/* We use whileInView so it triggers when scrolled to */}
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: style?.textAlign === 'center' ? 'center' : 'flex-start' }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{ marginRight: "0.25em", display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
