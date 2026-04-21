"use client";

import React, { useState } from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { Package, Search, Truck, CheckCircle2, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <PolicyLayout
      title="Track Your Order"
      subtitle="Follow the journey of your artisanal furniture from our workshop to your living room."
      icon={<Package className="w-8 h-8" />}
    >
      <div className="space-y-12">
        {/* Search Bar */}
        <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-xl shadow-primary/5">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
              <input
                required
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your Order ID (e.g. WN-77151)"
                className="w-full bg-surface/50 border border-primary/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-accent text-primary font-inter"
              />
            </div>
            <button
              disabled={isSearching}
              className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-accent hover:text-primary transition-all disabled:opacity-50"
            >
              {isSearching ? "Searching..." : "Track Order"}
            </button>
          </form>
          <p className="mt-4 text-[10px] text-primary/30 uppercase tracking-[0.2em] text-center">
            You can find your Order ID in the confirmation email sent to you.
          </p>
        </div>

        {/* Results */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-accent/5 rounded-3xl p-8 border border-accent/10">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Currently At</p>
                  <h3 className="text-2xl font-playfair font-bold text-primary flex items-center gap-2">
                    <Truck className="w-6 h-6" /> In Transit
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Estimated Arrival</p>
                  <p className="text-lg font-bold text-primary font-inter">April 28, 2026</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-3xl p-10 border border-primary/5 shadow-sm space-y-12">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/5" />
                  <div className="absolute left-4 top-0 h-[60%] w-0.5 bg-accent" />

                  <div className="space-y-12 relative">
                    <div className="flex gap-8 items-start">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary z-10 shadow-lg shadow-accent/20">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary font-inter">Order Confirmed</h4>
                        <p className="text-sm text-primary/60">April 21, 2026 • 11:42 AM</p>
                        <p className="text-xs text-primary/40 leading-relaxed max-w-sm">
                          Payment successful and artisanal workshop notified.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8 items-start">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary z-10 shadow-lg shadow-accent/20">
                        <Package className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary font-inter">Crafting Complete</h4>
                        <p className="text-sm text-primary/60">April 24, 2026 • 09:15 AM</p>
                        <p className="text-xs text-primary/40 leading-relaxed max-w-sm">
                          Quality check passed. Item packed in eco-friendly protective layering.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8 items-start">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center text-accent z-10">
                        <Truck className="w-4 h-4 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary font-inter">Shifting to Local Hub</h4>
                        <p className="text-sm text-accent font-bold">In Progress</p>
                        <p className="text-xs text-primary/40 leading-relaxed max-w-sm">
                          Your sofa is currently being moved via our premium logistics partner.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8 items-start opacity-30">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary/30 z-10">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary font-inter">Out for Delivery</h4>
                        <p className="text-sm font-medium">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PolicyLayout>
  );
}
