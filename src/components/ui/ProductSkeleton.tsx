"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProductSkeleton() {
  return (
    <div className="space-y-6">
      {/* Image Area */}
      <div className="relative aspect-[4/5] bg-primary/5 rounded-[2.5rem] overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Info Area */}
      <div className="space-y-3 px-1">
        <div className="flex justify-between">
          <div className="h-2 w-16 bg-primary/5 rounded-full" />
          <div className="h-2 w-12 bg-primary/5 rounded-full" />
        </div>
        <div className="h-4 w-3/4 bg-primary/5 rounded-full" />
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-primary/5 rounded-full" />
          <div className="h-4 w-12 bg-primary/5 rounded-full self-end" />
        </div>
      </div>
    </div>
  );
}
