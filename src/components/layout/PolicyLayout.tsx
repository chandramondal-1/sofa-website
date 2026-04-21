"use client";

import React, { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

export default function PolicyLayout({ children, title, subtitle, icon }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-primary/5">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              {icon && (
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent mb-4">
                  {icon}
                </div>
              )}
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary leading-tight">
                {title}
              </h1>
              <p className="text-lg text-primary/60 font-inter max-w-2xl mx-auto">
                {subtitle}
              </p>
              <div className="w-24 h-1 bg-accent mx-auto mt-8 opacity-30" />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
