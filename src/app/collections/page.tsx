"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { sofaCatalog } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-primary leading-tight">
              Explore Our <br />
              <span className="text-accent italic">Sovereign Catalog</span>
            </h1>
            <p className="text-lg text-primary/60 font-inter max-w-2xl mx-auto">
              From modular sectionals to vintage velvet silhouettes, discover the 
              perfect piece tailored to your space, style, and spirit.
            </p>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="container mx-auto px-4 mb-20 overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4 justify-center">
            {["By Type", "By Material", "By Style", "By Room Use", "By Features"].map((section) => (
              <a 
                key={section}
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-6 py-2 rounded-full border border-primary/10 text-xs font-bold text-primary/60 hover:border-accent hover:text-accent transition-all uppercase tracking-widest"
              >
                {section}
              </a>
            ))}
          </div>
        </section>

        <div className="space-y-32">
          {Object.entries(sofaCatalog).map(([key, categories]) => {
            const sectionTitle = key === "types" ? "By Type" : 
                               key === "materials" ? "By Material" :
                               key === "styles" ? "By Style" :
                               key === "rooms" ? "By Room Use" : "By Features";
            
            return (
              <section key={key} id={sectionTitle.toLowerCase().replace(/\s+/g, "-")} className="container mx-auto px-4 scroll-mt-32">
                <div className="flex items-end justify-between mb-12 pb-4 border-b border-primary/5">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-playfair font-bold text-primary">{sectionTitle}</h2>
                    <p className="text-sm text-accent font-bold uppercase tracking-[0.3em]">Curated Collections</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {categories.map((cat, idx) => (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx % 5) * 0.05 }}
                      className="group"
                    >
                      <Link href={`/shop?${key.slice(0, -1)}=${cat.id}`} className="block space-y-4">
                        <div className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-white border border-primary/5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                          <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 20vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                              Explore <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-wider">
                            {cat.name}
                          </h3>
                          <p className="text-[10px] text-primary/40 font-inter line-clamp-1 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
