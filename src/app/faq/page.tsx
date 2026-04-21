"use client";

import React, { useState } from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { HelpCircle, ChevronDown, Search, MessageCircle, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Ordering",
    q: "How can I customize a sofa in a different fabric or color?",
    a: "Every product detail page has color and material selectors. If you need a custom fabric not listed, you can book a free Design Consultancy session, and our experts will help you choose from our physical swatch catalog of 500+ premium fabrics."
  },
  {
    category: "Ordering",
    q: "Do you offer physical swatches before I buy?",
    a: "Yes! You can order a Swatch Kit for ₹499 (fully refundable on your first sofa purchase). The kit includes our top 10 best-selling fabrics in your chosen color palette."
  },
  {
    category: "Shipping",
    q: "What is White-Glove delivery?",
    a: "It's our premium delivery service where our professionals handle the heavy lifting, assembly, and placement of your furniture. We also remove all packaging material, leaving your home clean and your sofa ready for use."
  },
  {
    category: "Shipping",
    q: "Do you deliver to high-rise apartments?",
    a: "Absolutely. Our teams are experienced in navigating elevators and staircases. For very large pieces (like 4-seater sectionals), please check your elevator dimensions. We also offer specialized balcony-lifting services in select cities."
  },
  {
    category: "Returns",
    q: "What if the sofa doesn't fit through my door?",
    a: "Our sofas are designed with 'Modular Entry' in mind—legs and often backs can be detached. If it still doesn't fit, we offer a no-questions-asked return at the time of delivery, provided the item hasn't been unboxed."
  },
  {
    category: "Warranty",
    q: "What does the 10-year warranty cover?",
    a: "Our 'Foundation Warranty' covers manufacturing defects in the solid wood frame, spring systems, and structural foam. It does not cover normal wear and tear of fabric or accidental spills."
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PolicyLayout
      title="Common FAQs"
      subtitle="Everything you need to know about WOODNEST craftsmanship, delivery, and support."
      icon={<HelpCircle className="w-8 h-8" />}
    >
      <div className="space-y-12">
        {/* Search Bar */}
        <div className="relative group max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
          <input
            type="text"
            placeholder="Search for answers (e.g. 'warranty', 'delivery')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-primary/10 rounded-2xl py-4 px-12 focus:outline-none focus:border-accent shadow-sm font-inter text-sm"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "bg-white rounded-3xl border transition-all overflow-hidden",
                openIdx === idx ? "shadow-xl shadow-primary/5 border-accent/20" : "border-primary/5 hover:border-primary/10"
              )}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{faq.category}</span>
                  <h3 className="text-lg font-playfair font-bold text-primary group-hover:text-accent transition-colors">
                    {faq.q}
                  </h3>
                </div>
                <div className={cn(
                  "p-2 rounded-full bg-primary/5 text-primary transition-transform duration-300",
                  openIdx === idx && "rotate-180 bg-accent/20 text-accent"
                )}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-primary/60 font-inter text-sm leading-relaxed border-t border-primary/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-primary/5">
              <p className="text-primary/40 font-inter">No results found for "{searchQuery}". Try a broader term.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Email Us</p>
              <p className="text-[10px] text-primary/40">woodnest@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Call Us</p>
              <p className="text-[10px] text-primary/40">+91 98324 77151</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Live Chat</p>
              <p className="text-[10px] text-primary/40">Available 9am - 9pm</p>
            </div>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
