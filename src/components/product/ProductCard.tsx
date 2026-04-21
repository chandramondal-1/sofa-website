"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  color: string;
  badge?: string | null;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  color,
  badge,
}: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative aspect-[4/5] bg-secondary/30 rounded-3xl overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-700 will-change-transform">
        <motion.div 
          className="w-full h-full transform-gpu"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover"
          />
        </motion.div>
        
        {badge && (
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-6 left-6 bg-accent/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg z-10"
          >
            {badge}
          </motion.div>
        )}
        
        <motion.button 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist({ id, name, price: parseInt(price.replace(/[^0-9]/g, "")), image, color, rating, reviews });
          }}
          className={cn(
            "absolute top-6 right-6 p-2.5 backdrop-blur-md rounded-full transition-all shadow-lg z-20",
            isFavorited ? "bg-accent text-primary" : "bg-white/60 text-primary/40 hover:text-red-500"
          )}
        >
          <motion.div
            animate={isFavorited ? { scale: [1, 1.4, 1] } : { scale: [1, 1.2, 1] }}
            transition={{ repeat: isFavorited ? 0 : Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart className={cn("w-5 h-5", isFavorited && "fill-current")} />
          </motion.div>
        </motion.button>

        <div className="absolute inset-x-6 bottom-6 translate-y-16 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              addItem({
                id,
                name,
                price: parseInt(price.replace(/[^0-9]/g, "")),
                image,
                quantity: 1,
                color
              });
            }}
            className="w-full bg-primary/95 backdrop-blur-xl text-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-primary transition-all shadow-2xl overflow-hidden group/btn"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </motion.button>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="space-y-3 px-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold text-accent uppercase tracking-[0.2em]">{color}</span>
          <div className="flex items-center gap-1.5 text-xs text-primary/60 font-bold">
            <Star className="w-3.5 h-3.5 fill-accent text-accent animate-pulse" />
            {rating} <span className="opacity-40 ml-1">({reviews})</span>
          </div>
        </div>
        <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors duration-300">
          <Link href={`/shop/${id}`}>{name}</Link>
        </h3>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-primary tracking-tight">{price}</span>
          {originalPrice && (
            <span className="text-sm text-primary/20 line-through decoration-accent/30">{originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
