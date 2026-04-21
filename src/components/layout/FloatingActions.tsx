"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/919832477151?text=Hello%20👋%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20your%20services.%20Please%20share%20more%20details.%20Thank%20you.";

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <div className="group relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              duration: 0.2 
            }}
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/30 backdrop-blur-md border border-white/20 relative"
          >
            <MessageCircle className="w-7 h-7" />
            
            {/* Pulsing effect */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
            />
          </motion.a>
        </motion.div>
        
        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 pointer-events-none group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </div>
      </div>

      {/* Call Button */}
      <div className="group relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
        >
          <motion.a
            href="tel:+919832477151"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
              duration: 0.2 
            }}
            className="flex items-center justify-center w-14 h-14 bg-white text-primary rounded-full shadow-2xl shadow-primary/10 backdrop-blur-md border border-primary/5 relative"
          >
            <Phone className="w-6 h-6 text-accent" />
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.a>
        </motion.div>

        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full opacity-0 pointer-events-none group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl">
          Call Now
        </div>
      </div>
    </div>
  );
}
