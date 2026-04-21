"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { allProducts } from "@/lib/data";

export default function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recently_viewed");
    if (stored) {
      try {
        const ids = JSON.parse(stored) as number[];
        const products = ids
          .map(id => allProducts.find(p => p.id === id))
          .filter(p => p !== undefined);
        setRecentProducts(products);
      } catch (e) {
        console.error("Error parsing recently viewed", e);
      }
    }
  }, []);

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-24 border-t border-primary/5">
      <div className="container-fluid">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-playfair font-bold text-primary">Recently Rediscovered</h2>
          <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest leading-none">Your Curated History</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {recentProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
