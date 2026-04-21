"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "L-Shape", image: "/cat-l-shape.png", href: "/shop?type=l-shape" },
  { name: "Recliner", image: "/cat-recliner.png", href: "/shop?type=recliner" },
  { name: "Wooden", image: "/hero-sofa.png", href: "/shop?type=wooden" }, // Reuse hero as placeholder
  { name: "Sofa Bed", image: "/cat-l-shape.png", href: "/shop?type=bed-sofa" },
  { name: "2 Seater", image: "/cat-recliner.png", href: "/shop?type=2-seater" },
  { name: "3 Seater", image: "/hero-sofa.png", href: "/shop?type=3-seater" },
];

export default function CategoryScroller() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="container-fluid">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <h2 className="text-fluid-3xl font-playfair font-bold text-primary leading-tight">Shop by Category</h2>
            <p className="text-xs md:text-sm text-primary/60 font-inter uppercase tracking-[0.3em]">Curated Silhouettes</p>
          </div>
          <Link href="/shop" className="group hidden sm:flex items-center gap-3 text-xs font-bold text-accent uppercase tracking-widest hover:text-primary transition-colors">
            View All <span className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="flex gap-4 md:gap-10 overflow-x-auto pb-8 scrollbar-hide snap-x -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 snap-start"
            >
              <Link href={cat.href} className="group flex flex-col items-center gap-6 text-center">
                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/5 group-hover:border-accent transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
