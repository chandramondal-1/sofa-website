"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultancySection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-24" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-accent"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Complementary Decor Advice</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-playfair font-bold leading-tight"
            >
              Consult with Our <br />Interior Architects
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-inter text-lg leading-relaxed max-w-xl"
            >
              Unsure about which configuration of the 'L-Modular' fits your studio? 
              Our designers offer a free 15-minute virtual consultation to ensure your 
              space is as functional as it is beautiful.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Link
                href="/consultancy"
                className="bg-accent text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform w-fit"
              >
                Book Your Free Session <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/5 space-y-4">
                <h4 className="font-playfair font-bold text-xl">Material Selection</h4>
                <p className="text-white/60 text-sm font-inter">Explore our obsidian velvets and terracotta weaves.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/5 space-y-4">
                <h4 className="font-playfair font-bold text-xl">Space Planning</h4>
                <p className="text-white/60 text-sm font-inter">Custom configurations for any room dimension.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-accent rounded-3xl p-8 text-primary space-y-4">
                <h4 className="font-playfair font-bold text-xl">Color Palette</h4>
                <p className="text-primary/80 text-sm font-inter">Harmonizing yours sofas with your existing decor.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/5 space-y-4">
                <h4 className="font-playfair font-bold text-xl">Live Demo</h4>
                <p className="text-white/60 text-sm font-inter">See the build quality via high-def video stream.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
