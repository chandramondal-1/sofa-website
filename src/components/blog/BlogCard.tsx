"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  image,
  category,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-primary/5 hover:border-accent/30 transition-all shadow-sm hover:shadow-xl"
    >
      <Link href={`/blog/${slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </Link>

      <div className="p-8 space-y-4">
        <div className="flex items-center gap-6 text-[10px] font-bold text-primary/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-accent" />
            {date}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-3 h-3 text-accent" />
            {author}
          </div>
        </div>

        <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-sm text-primary/60 font-inter leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <div className="pt-4">
          <Link
            href={`/blog/${slug}`}
            className="text-xs font-bold text-primary border-b-2 border-accent pb-1 hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            Read More <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
