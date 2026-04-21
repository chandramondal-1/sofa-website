"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ChevronRight, CreditCard, Truck, ShieldCheck, MapPin, Phone, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CheckoutInfoPage() {
  const router = useRouter();
  const { totalAmount, totalItems } = useCart();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/checkout");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-40 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-primary/40 font-inter mb-12 justify-center">
            <span className="text-accent font-bold uppercase tracking-widest">Cart</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold uppercase tracking-widest">Delivery Info</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary/20 font-bold uppercase tracking-widest">Confirmation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form Section */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-playfair font-bold text-primary">Delivery Details</h1>
                <p className="text-sm text-primary/60 font-inter">Where should we deliver your luxury piece?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-white border border-primary/10 rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm shadow-sm text-primary placeholder:text-primary/30" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                      <input 
                        required 
                        type="tel" 
                        className="w-full bg-white border border-primary/10 rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm shadow-sm text-primary placeholder:text-primary/30" 
                        placeholder="+91 98324 77151" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-4">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-white border border-primary/10 rounded-2xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm shadow-sm text-primary placeholder:text-primary/30" 
                      placeholder="woodnest@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-4">Shipping Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-12 w-4 h-4 text-accent" />
                    <textarea 
                      required 
                      rows={4} 
                      className="w-full bg-white border border-primary/10 rounded-3xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm shadow-sm text-primary placeholder:text-primary/30" 
                      placeholder="Enter full address with landmark..." 
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>Complete Selection & Pay <CreditCard className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Side summary info */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 border border-primary/5 shadow-xl shadow-primary/5 space-y-8">
                <h2 className="text-2xl font-playfair font-bold text-primary">Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/60 font-inter">Total Items</span>
                    <span className="text-primary font-bold">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-lg pt-4 border-t border-primary/5">
                    <span className="font-playfair font-bold text-primary">Amount Payable</span>
                    <span className="text-accent font-bold">₹{totalAmount.toLocaleString()}*</span>
                  </div>
                  <p className="text-[10px] text-primary/30 uppercase tracking-widest text-center pt-4">
                    *GST & Delivery calculated based on location
                  </p>
                </div>
              </div>

              <div className="space-y-4 px-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-primary/60 font-inter line-clamp-2">Free Expert Assembly & Placement in your living room.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-primary/60 font-inter line-clamp-2">Secure Transaction with 256-bit SSL Encryption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
