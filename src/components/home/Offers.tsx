"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    desc: "Across all major Indian cities",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "10 Year Warranty",
    desc: "Quality guaranteed for a decade",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    desc: "Dedicated experts to help you",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Easy EMI",
    desc: "Start as low as ₹2,499/mo",
  },
];

export default function Offers() {
  return (
    <section className="py-20 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/10 border border-accent/20 rounded-3xl p-10 flex flex-col justify-center space-y-6 relative group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
            <span className="text-accent font-bold font-inter tracking-[0.2em] uppercase text-xs">Summer Sale Extravaganza</span>
            <h3 className="text-4xl font-playfair font-bold text-surface leading-tight">
              Get Up to <span className="text-accent italic">40% OFF</span> <br />
              on Premium Velvets
            </h3>
            <p className="text-secondary/60 max-w-sm font-inter">
              Redefine your living room with our most luxurious fabric collection. Limited time offer.
            </p>
            <button className="self-start px-8 py-3 bg-accent text-primary rounded-full font-bold hover:scale-105 transition-transform">
              Claim Discount
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/5 border border-surface/10 rounded-3xl p-10 flex flex-col justify-center space-y-6 relative overflow-hidden"
          >
            <span className="text-accent font-bold font-inter tracking-[0.2em] uppercase text-xs">Smart Financing</span>
            <h3 className="text-4xl font-playfair font-bold text-surface leading-tight">
              Furniture Now, <br />
              Pay <span className="text-accent italic">Later</span>
            </h3>
            <p className="text-secondary/60 max-w-sm font-inter">
              Zero down payment and No-Cost EMI for up to 12 months on all major bank cards.
            </p>
            <div className="flex gap-4 items-center">
              <span className="text-sm font-bold text-surface border-b border-accent pb-1 cursor-pointer hover:text-accent transition-colors">Check Eligibility</span>
              <span className="text-primary/10">|</span>
              <span className="text-xs text-secondary/40 font-inter">Terms & Conditions Apply*</span>
            </div>
          </motion.div>
        </div>

        {/* Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-surface/10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="text-accent flex justify-center">{f.icon}</div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-playfair text-surface">{f.title}</h4>
                <p className="text-xs text-secondary/50 font-inter">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
