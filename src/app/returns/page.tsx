"use client";

import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { RotateCcw, AlertTriangle, CheckCircle2, ShieldOff, Search, HelpCircle } from "lucide-react";

export default function ReturnsPage() {
  const steps = [
    {
      title: "Initiate Request",
      desc: "Contact us via email or phone within 7 days of delivery with your Order ID.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "Inspection",
      desc: "Our team will schedule a quick virtual or physical inspection of the item.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      title: "Pickup",
      desc: "Once specialized, we'll arrange a free white-glove pickup from your location.",
      icon: <RotateCcw className="w-5 h-5" />,
    },
    {
      title: "Full Refund",
      desc: "After the item reaches our workshop, the refund is processed within 5-7 days.",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  return (
    <PolicyLayout
      title="Returns & Refunds"
      subtitle="Ensuring your complete peace of mind. If it's not perfect for your home, we'll make it right."
      icon={<RotateCcw className="w-8 h-8" />}
    >
      <div className="space-y-16">
        {/* Returns Process */}
        <div className="space-y-8">
          <h2 className="text-3xl font-playfair font-bold text-primary text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-primary/5 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto">
                  {step.icon}
                </div>
                <h4 className="font-bold text-primary font-inter">{step.title}</h4>
                <p className="text-xs text-primary/60 leading-relaxed font-inter">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories of Returns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="bg-white rounded-[2.5rem] p-10 border border-primary/5 shadow-sm space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-primary flex items-center gap-3">
               <AlertTriangle className="w-6 h-6 text-accent" /> Damages
            </h3>
            <p className="text-sm text-primary/60 leading-relaxed font-inter">
              If your furniture arrives with transit damage or manufacturing defects, we offer a **100% free replacement or full refund**. No questions asked. Please report this at the time of delivery for immediate processing.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-primary/5 shadow-sm space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-primary flex items-center gap-3">
               <RotateCcw className="w-6 h-6 text-accent" /> Change of Mind
            </h3>
            <p className="text-sm text-primary/60 leading-relaxed font-inter">
              Ordered something that doesn't fit your aesthetic? We offer a **7-day return window** for standard products. A small restocking fee may apply to cover the logistics and artisanal inspection of the returned piece.
            </p>
          </div>
        </div>

        {/* Non-returnable Items */}
        <div className="bg-primary/5 rounded-[2.5rem] p-10 md:p-16 border border-primary/5">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-playfair font-bold text-primary leading-tight">Exceptions to Policy</h3>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <ShieldOff className="w-4 h-4 text-accent" /> Custom Orders
                </div>
                <p className="text-xs text-primary/60 font-inter">Furniture customized in size, material, or color cannot be returned unless defective.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <ShieldOff className="w-4 h-4 text-accent" /> Clearance Items
                </div>
                <p className="text-xs text-primary/60 font-inter">Items bought during 'Flash Sales' or from the 'Outlet' section are final sale.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h4 className="text-xl font-playfair font-bold text-primary">Refund Timelines</h4>
          <p className="text-sm text-primary/60 font-inter leading-relaxed px-12">
            Refunds are credited to the original payment method. For Cash on Delivery (COD) orders, our team will request your bank details for a direct bank transfer. Processing takes **5-7 business days** after the returned item passes quality inspection at our workshop.
          </p>
        </div>
      </div>
    </PolicyLayout>
  );
}
