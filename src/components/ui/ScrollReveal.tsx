"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  width = "100%", 
  direction = "up", 
  delay = 0.2,
  duration = 0.8,
  distance = 50,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          ...directions[direction],
          filter: "blur(10px)"
        }}
        animate={isInView ? { 
          opacity: 1, 
          x: 0, 
          y: 0,
          filter: "blur(0px)"
        } : {}}
        transition={{ 
          duration, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
