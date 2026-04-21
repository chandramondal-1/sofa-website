"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalAmount, totalItems } = useCart();

  const gst = Math.round(totalAmount * 0.18);
  const delivery = totalAmount > 50000 ? 0 : 1500;
  const finalTotal = totalAmount + gst + delivery;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main className="pt-40 pb-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto space-y-8"
          >
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/20">
              <ShoppingBag className="w-12 h-12" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-playfair font-bold text-primary">Your cart is empty</h1>
              <p className="text-primary/60 font-inter">
                Looks like you haven't added any luxury pieces to your collection yet.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10"
            >
              Start Shopping <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-40 pb-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-grow space-y-8">
            <div className="flex items-baseline justify-between border-b border-primary/5 pb-6">
              <h1 className="text-4xl font-playfair font-bold text-primary">Shopping Cart</h1>
              <span className="text-sm font-bold text-accent uppercase tracking-widest">{totalItems} Items</span>
            </div>

            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-3xl p-6 border border-primary/5 shadow-sm flex gap-6 group"
                  >
                    <div className="relative w-32 h-32 bg-secondary rounded-2xl overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-colors">
                            <Link href={`/shop/${item.id}`}>{item.name}</Link>
                          </h3>
                          <div className="flex gap-4 mt-1">
                            {item.color && (
                              <span className="text-[10px] uppercase font-bold text-primary/40 flex items-center gap-1">
                                Color: <span className="text-primary/60">{item.color}</span>
                              </span>
                            )}
                            {item.size && (
                              <span className="text-[10px] uppercase font-bold text-primary/40 flex items-center gap-1">
                                Size: <span className="text-primary/60">{item.size}</span>
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-primary/10 rounded-full px-3 py-1 gap-4">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-primary/40 hover:text-accent transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-bold font-inter min-w-[20px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-primary/40 hover:text-accent transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-primary/20 hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-[400px] space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 border border-primary/5 shadow-xl shadow-primary/5 space-y-8 sticky top-32">
              <h2 className="text-2xl font-playfair font-bold text-primary">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 font-inter text-xs uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-primary font-bold">₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 font-inter text-xs uppercase tracking-widest font-bold">GST (18%)</span>
                  <span className="text-primary font-bold">₹{gst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary/60 font-inter text-xs uppercase tracking-widest font-bold">Delivery & Setup</span>
                  <span className={cn("font-bold", delivery === 0 ? "text-green-600 uppercase text-[10px] tracking-widest" : "text-primary")}>
                    {delivery === 0 ? "Free" : `₹${delivery.toLocaleString()}`}
                  </span>
                </div>
                <div className="pt-6 border-t border-primary/5 flex justify-between items-baseline">
                  <span className="text-xl font-playfair font-bold text-primary">Total Amount</span>
                  <span className="text-3xl font-bold text-primary">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/checkout/info"
                  className="w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-3 justify-center text-[10px] text-primary/40 uppercase tracking-widest font-bold">
                  <ShieldCheck className="w-4 h-4 text-accent" /> Secure Checkout Guaranteed
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
