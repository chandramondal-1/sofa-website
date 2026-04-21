"use client";

import React from "react";
import { Star, CheckCircle2, User, ThumbsUp, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    user: "Aditya S.",
    rating: 5,
    date: "2 days ago",
    content: "The quality of the velvet is extraordinary. It feels much more premium than what I saw in local luxury showrooms. The delivery team was professional and installed it carefully.",
    verified: true,
    likes: 12,
  },
  {
    id: 2,
    user: "Priya M.",
    rating: 4,
    date: "1 week ago",
    content: "Beautiful design! It perfectly fits my living room aesthetic. Minor delay in delivery, but the support team kept me updated throughout. Highly recommend Woodnest.",
    verified: true,
    likes: 8,
  },
  {
    id: 3,
    user: "Vikram R.",
    rating: 5,
    date: "3 weeks ago",
    content: "Solid teak wood structure. You can feel the weight and the quality. The lumbar support is actually great for long movie nights. Worth every penny.",
    verified: true,
    likes: 15,
  }
];

export default function ReviewSection() {
  return (
    <section className="mt-32 pt-24 border-t border-primary/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-accent">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-xl font-bold font-inter">4.9 / 5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">Customer Sanctuary</h2>
          <p className="text-sm text-primary/40 font-inter uppercase tracking-[0.3em] font-bold">Tested & Loved by 2,400+ Homes</p>
        </div>

        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-primary transition-all shadow-xl">
          Write a Review <Star className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm space-y-6 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-3 h-3", i < review.rating ? "fill-current" : "opacity-30")} />
                ))}
              </div>
              <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{review.date}</span>
            </div>

            <p className="text-sm text-primary/70 font-inter leading-relaxed italic">
              "{review.content}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary/40">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary flex items-center gap-1">
                    {review.user}
                    {review.verified && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                  </p>
                  <p className="text-[9px] text-primary/30 uppercase tracking-widest">Verified Buyer</p>
                </div>
              </div>

              <button className="flex items-center gap-1.5 text-[10px] font-bold text-primary/40 hover:text-accent transition-colors">
                <ThumbsUp className="w-3 h-3" /> {review.likes}
              </button>
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Visual Trust Indicator */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
           <Camera className="w-4 h-4" /> 500+ Real Customer Photos
        </div>
        <div className="hidden sm:block w-[1px] h-4 bg-primary" />
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
           <CheckCircle2 className="w-4 h-4" /> Quality Tested Certified
        </div>
      </div>
    </section>
  );
}
