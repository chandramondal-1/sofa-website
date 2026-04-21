"use client";

import React from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import DustParticles from "@/components/ui/DustParticles";

export default function OptimizedAtmosphere() {
  return (
    <>
      <CustomCursor />
      <DustParticles />
      
      {/* Premium Light Leak Overlays - GPU Optimized */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 blur-[150px] animate-pulse will-change-[opacity]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/3 blur-[150px] animate-pulse will-change-[opacity]" style={{ animationDelay: "3s" }} />
      </div>
    </>
  );
}
