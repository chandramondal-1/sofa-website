"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  MapPin, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronRight, 
  ArrowLeft,
  Smartphone,
  Wallet,
  Package,
  Home
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

type Step = "shipping" | "payment" | "success";

export default function CheckoutClient() {
  const { cart, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");

  if (cart.length === 0 && step !== "success") {
    return (
      <div className="text-center py-24 space-y-6">
        <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto text-primary/20">
          <Package className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-playfair font-bold text-primary">Your cart is empty</h2>
        <Link href="/shop" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold">
          Start Shopping
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setStep("success");
    clearCart();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Checkout Sidebar / Step Content */}
      <div className="lg:col-span-7 space-y-8">
        {/* Step Indicators */}
        <div className="flex items-center gap-4 mb-12">
          {["shipping", "payment", "success"].map((s, idx) => (
            <React.Fragment key={s}>
              <div className={cn(
                "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
                step === s ? "text-accent" : "text-primary/20"
              )}>
                <span className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  step === s ? "border-accent bg-accent text-primary" : "border-primary/10"
                )}>{idx + 1}</span>
                <span className="hidden sm:inline">{s}</span>
              </div>
              {idx < 2 && <div className="w-8 h-[1px] bg-primary/10" />}
            </React.Fragment>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === "shipping" && (
            <motion.div
              key="shipping"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair font-bold text-primary">Shipping Sanctuary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white border border-primary/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Phone Number</label>
                    <input type="tel" placeholder="+91 98324 77151" className="w-full bg-white border border-primary/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all shadow-sm" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Detailed Address</label>
                    <textarea rows={3} placeholder="Street name, building, floor, landmark..." className="w-full bg-white border border-primary/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all shadow-sm resize-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Pincode</label>
                    <input type="text" placeholder="734001" className="w-full bg-white border border-primary/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40">City</label>
                    <input type="text" placeholder="Siliguri" className="w-full bg-white border border-primary/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setStep("payment")}
                className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-accent hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Proceed to Payment <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setStep("shipping")} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5 text-primary" />
                  </button>
                  <h2 className="text-3xl font-playfair font-bold text-primary">Payment Selection</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { id: "upi", name: "UPI / PhonePe / Google Pay", icon: Smartphone, desc: "Instant & Secure via UPI 2.0" },
                    { id: "cod", name: "Cash on Delivery", icon: Truck, desc: "Pay only when your sofa arrives" },
                    { id: "emi", name: "Easy EMI (Cardless)", icon: CreditCard, desc: "Starting at ₹2,499/mo" },
                    { id: "card", name: "Credit / Debit Card", icon: Wallet, desc: "128-bit Encrypted Transaction" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={cn(
                        "w-full p-6 rounded-[2rem] border-2 flex items-center justify-between group transition-all",
                        paymentMethod === method.id ? "border-accent bg-accent/5" : "border-primary/5 hover:border-primary/20 bg-white"
                      )}
                    >
                      <div className="flex items-center gap-6">
                        <div className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                          paymentMethod === method.id ? "bg-accent text-primary" : "bg-surface text-primary/40"
                        )}>
                          <method.icon className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold text-primary">{method.name}</p>
                          <p className="text-[10px] text-primary/40 font-inter uppercase tracking-widest">{method.desc}</p>
                        </div>
                      </div>
                      <div className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                        paymentMethod === method.id ? "border-accent bg-accent" : "border-primary/10"
                      )}>
                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-green-50/50 rounded-3xl border border-green-500/10 flex items-start gap-4">
                 <ShieldCheck className="w-6 h-6 text-green-600 mt-1" />
                 <div className="space-y-1">
                   <p className="text-xs font-bold text-green-800 uppercase tracking-widest">Secure Handshake</p>
                   <p className="text-xs text-green-700/80 font-inter leading-relaxed">Your transaction is protected by industry-leading 128-bit encryption and Woodnest's artisanal guarantee.</p>
                 </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-accent hover:text-primary transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Place Order <CheckCircle2 className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white rounded-[4rem] border border-primary/5 shadow-2xl space-y-8"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-xl shadow-green-100 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-4 px-8">
                <h1 className="text-4xl font-playfair font-bold text-primary">Order #WN-77151 Placed!</h1>
                <p className="text-primary/60 font-inter leading-relaxed max-w-md mx-auto">
                  Your artisanal journey begins. We'll send you a tracking link as soon as our master craftsmen complete your piece.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-8">
                <Link
                  href="/shop"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2"
                >
                  Keep Exploring
                </Link>
                <Link
                  href="/"
                  className="bg-surface border-2 border-primary/5 text-primary px-10 py-4 rounded-full font-bold"
                >
                  <Home className="w-4 h-4 mr-2 inline" /> Back Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Order Summary Sticky Sidebar */}
      {step !== "success" && (
        <div className="lg:col-span-5">
          <div className="sticky top-40 bg-white rounded-[3rem] border border-primary/5 p-8 md:p-10 shadow-2xl space-y-8 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full blur-3xl" />
            
            <div className="space-y-6 relative z-10">
              <h3 className="text-xl font-playfair font-bold text-primary flex items-center gap-3">
                <Package className="w-5 h-5 text-accent" /> Order Summary
              </h3>
              
              <div className="space-y-4 max-h-[40vh] overflow-y-auto scrollbar-hide pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-surface shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow space-y-1">
                      <p className="text-sm font-bold text-primary leading-tight">{item.name}</p>
                      <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest">{item.color} • {item.quantity} Unit</p>
                      <p className="text-xs font-bold text-accent">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/5 space-y-3">
                <div className="flex justify-between text-sm">
                   <span className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                   <span className="text-primary font-bold">₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-primary/40 font-bold uppercase tracking-widest text-[10px]">Delivery & Assembly</span>
                   <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-xl pt-6 border-t border-primary/5">
                   <span className="font-playfair font-bold text-primary uppercase text-sm tracking-widest">Total Sovereign</span>
                   <span className="text-accent font-bold">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Coupon Engine - NEW FEATURE */}
              <div className="pt-4">
                <div className="relative">
                  <input type="text" placeholder="GIFT CODE" className="w-full bg-surface/50 border-2 border-primary/5 rounded-xl py-3 px-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-accent transition-all" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-accent uppercase">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
