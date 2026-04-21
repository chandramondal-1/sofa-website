"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/ui/CustomCursor";
import DustParticles from "@/components/ui/DustParticles";
import { usePathname } from "next/navigation";

export default function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
