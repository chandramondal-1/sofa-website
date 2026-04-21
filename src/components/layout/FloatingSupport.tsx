"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FloatingSupport() {
  const whatsappNumber = "919832477151";
  const message = encodeURIComponent("Hello 👋 I visited your website and I'm interested in your services. Please share more details. Thank you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  
  return (
    <div className="fixed left-6 bottom-32 md:left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.5)] transition-all duration-500 overflow-hidden"
        >
          <motion.div
            animate={{ 
              y: [0, -3, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
          
          {/* Glassmorphism Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* Tooltip */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl border border-primary/5 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">Chat on WhatsApp</p>
        </div>
      </motion.div>

      {/* Call Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        <a
          href="tel:+919832477151"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white text-primary rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 border border-primary/5"
        >
          <motion.div
             animate={{ 
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7" />
          </motion.div>
          
          {/* Subtle Accent Glow */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* Tooltip */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl border border-primary/5 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">Call Support</p>
        </div>
      </motion.div>

      {/* Pulse Effect Background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl"
      />
    </div>
  );
}
