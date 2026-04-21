"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { allProducts } from "@/lib/data";

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filter products by same type but exclude current one
  const related = allProducts
    .filter(p => (p.type === category || p.room === category) && p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-24 pt-24 border-t border-primary/5">
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h2 className="text-3xl font-playfair font-bold text-primary">Cinematic Companions</h2>
        <p className="text-[10px] text-primary/40 font-bold uppercase tracking-[0.4em] leading-none">Curated Pairings for your Space</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {related.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProductCard {...product} reviews={product.reviewsCount} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
