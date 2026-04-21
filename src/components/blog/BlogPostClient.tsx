"use client";

import React from "react";
import { ChevronRight, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPostClientProps {
  blogData: any;
}

export default function BlogPostClient({ blogData }: BlogPostClientProps) {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-primary/40 font-inter mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/blog" className="hover:text-accent transition-colors">Stories</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary font-medium">{blogData.category}</span>
      </div>

      <article className="space-y-12">
        {/* Header */}
        <div className="space-y-6 text-center">
          <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            {blogData.category}
          </span>
          <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-primary leading-tight">
            {blogData.title}
          </h1>
          <div className="flex items-center justify-center gap-8 text-xs font-bold text-primary/40 uppercase tracking-widest pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              {blogData.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              By {blogData.author}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/5"
        >
          <Image src={blogData.image} alt={blogData.title} fill className="object-cover" />
        </motion.div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none font-inter text-primary/80 leading-relaxed space-y-8 pt-8">
          {blogData.content.map((item: any, idx: number) => {
            if (item.type === "paragraph") return <p key={idx}>{item.text}</p>;
            if (item.type === "heading") return <h2 key={idx} className="text-3xl font-playfair font-bold text-primary pt-6">{item.text}</h2>;
            if (item.type === "list") {
              return (
                <ul key={idx} className="list-disc pl-6 space-y-3">
                  {item.items?.map((li: string, i: number) => <li key={i}>{li}</li>)}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Post Footer / Share */}
        <div className="pt-16 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Share this Story:</span>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <Link href="/blog" className="text-xs font-bold text-accent uppercase tracking-widest border-b border-accent pb-1">
            Back to Journal
          </Link>
        </div>
      </article>

      {/* Related Articles Strip */}
      <div className="mt-32 space-y-12">
        <h3 className="text-3xl font-playfair font-bold text-primary">More from the Journal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/5">
              <Image src="/product-navy.png" alt="Related" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">
              Choosing the Perfect Fabric for Your Living Space
            </h4>
          </div>
          <div className="group space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/5">
              <Image src="/product-emerald.png" alt="Related" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">
              Small Lounge, Big Style: 5 Tips to Maximize Area
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
