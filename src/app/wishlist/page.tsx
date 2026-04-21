"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Trash2, ArrowLeft, Star, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, wishlistCount } = useWishlist();
  const { addItem } = useCart();

  const handleMoveToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      color: item.color
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary">Your Sanctuary</h1>
              <p className="text-primary/60 font-inter">Items you&apos;ve curated for your dream home ({wishlistCount})</p>
            </div>
            <Link href="/shop" className="text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Keep Exploring
            </Link>
          </div>

          <AnimatePresence mode="popLayout">
            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {wishlistItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] bg-secondary/30 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full text-primary/40 hover:text-red-500 transition-colors shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <div className="absolute inset-x-6 bottom-6 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          onClick={() => handleMoveToCart(item)}
                          className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-primary transition-all shadow-xl"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          Move to Cart
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 px-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.color}</span>
                        {item.rating && (
                          <div className="flex items-center gap-1 text-xs text-primary/60">
                            <Star className="w-3 h-3 fill-accent text-accent" />
                            {item.rating}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">
                        <Link href={`/shop/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="text-2xl font-bold text-primary">₹{item.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-32 space-y-8"
              >
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-secondary/50 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-12 h-12 text-primary/10" />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-playfair font-bold text-primary">No Curations Yet</h2>
                  <p className="text-primary/40 font-inter max-w-sm mx-auto">Your sanctuary is waiting. Start exploring our premium collections to find pieces that resonate with your style.</p>
                </div>
                <Link 
                  href="/shop" 
                  className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10"
                >
                  Explore Collections
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
