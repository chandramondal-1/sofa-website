"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const mainCollections = [
  {
    title: "Browse by Type",
    description: "From Sectionals to Sleepers",
    image: "/catalog/sectional.png",
    link: "/collections#by-type",
    color: "bg-sage/10"
  },
  {
    title: "Curated Styles",
    description: "Modern, Vintage & Industrial",
    image: "/catalog/modern.png",
    link: "/collections#by-style",
    color: "bg-accent/5"
  },
  {
    title: "Premium Materials",
    description: "Leather, Velvet & Solid Wood",
    image: "/catalog/leather.png",
    link: "/collections#by-material",
    color: "bg-primary/5"
  }
];

export default function CollectionExplorer() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-primary leading-[1.1]">
              A Sovereign for <br />Every <span className="text-accent italic font-normal">Sanctuary</span>
            </h2>
            <p className="text-primary/60 font-inter text-lg max-w-lg leading-relaxed">
              Explore our comprehensive 50-category catalog, meticulously organized to help 
              you find the perfect centerpiece for your artistic living space.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/collections" 
              className="group flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-[0.3em] hover:text-accent transition-colors"
            >
              Explore All 50 Collections 
              <span className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all shadow-lg">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mainCollections.map((collection, idx) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link href={collection.link} className="block space-y-8">
                <div className={`aspect-[4/5] rounded-[3rem] overflow-hidden relative ${collection.color} shadow-sm group-hover:shadow-2xl transition-all duration-700`}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Subtle Floating Label */}
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-bold text-white bg-primary px-4 py-2 rounded-full shadow-xl">View Catalog</span>
                  </div>
                </div>
                <div className="space-y-3 px-4">
                  <h3 className="text-3xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">{collection.title}</h3>
                  <p className="text-sm text-primary/40 font-inter tracking-wide">{collection.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
