"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, ShoppingBag, Play } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-20">
      {/* Cinematic Background Image - GPU Optimized */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/hero-sofa.png"
          alt="Luxury Sofa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center translate-z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        
        {/* Breathing Light Overlay */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.05),transparent_70%)]"
        />
      </motion.div>

      <div className="container-fluid relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 md:space-y-10"
        >
          <div className="space-y-4">
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="w-8 md:w-12 h-[1px] bg-accent" />
              <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.4em]">Premium Living 2026</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-fluid-hero font-playfair font-bold text-primary leading-[1.1] tracking-tight"
            >
              Artisanal <br />
              <span className="text-accent italic font-normal">Sanctuary</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-primary/60 max-w-lg font-inter leading-relaxed"
            >
              Where master craftsmanship meets cinematic comfort. Explore our curated range of 50+ luxury sofa categories designed for the sophisticated modern home.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-8"
          >
            <Link 
              href="/shop" 
              className="w-full sm:w-auto text-center group relative overflow-hidden bg-primary text-secondary px-8 md:px-12 py-4 md:py-5 rounded-full font-bold transition-all hover:pr-14 shadow-2xl"
            >
              <span className="relative z-10">Explore Catalog</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5 z-10" />
            </Link>
            
            <Link 
              href="/consultancy" 
              className="flex items-center gap-3 text-sm font-bold text-primary group py-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              Book Experience
            </Link>
          </motion.div>

          {/* Quick Trust Badges - Staggered */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 md:gap-10 pt-8 border-t border-primary/5"
          >
            {[
              { icon: Heart, text: "Handcrafted" },
              { icon: Star, text: "10y Warranty" },
              { icon: ShoppingBag, text: "White Glove Team" }
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary/40">
                <badge.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                {badge.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator - Subtle Pulse */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-30"
      >
        <div className="w-[1px] h-10 md:h-14 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold rotate-90 origin-left">Explore</span>
      </motion.div>
    </section>
  );
}
