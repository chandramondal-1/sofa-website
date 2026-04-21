"use client";

import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { Truck, ShieldCheck, Clock, MapPin, Globe, Sparkles } from "lucide-react";

export default function ShippingPolicyPage() {
  const policies = [
    {
      title: "White-Glove Delivery",
      description: "We don't just drop boxes at your door. Our premium delivery partners will carry your furniture to your room of choice, unpack it, and handle complete assembly and placement.",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      title: "Delivery Timeline",
      description: "Since every WOODNEST piece is artisanal, typical delivery ranges from 7-14 business days depending on your location and the complexity of the piece.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "Secure Packaging",
      description: "Our proprietary 5-layer eco-friendly packaging ensures your furniture remains dust-free and protected from any impact during transit.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Installation & Setup",
      description: "Free professional installation is included with every purchase. Our experts will ensure your sofa is level and correctly placed before they leave.",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <PolicyLayout
      title="Shipping & Delivery"
      subtitle="Exquisite logistics for exquisite furniture. We ensure every piece arrives in pristine condition."
      icon={<Truck className="w-8 h-8" />}
    >
      <div className="space-y-16">
        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((p, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-primary/5 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                {p.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold text-primary">{p.title}</h3>
              <p className="text-sm text-primary/60 font-inter leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 bg-white rounded-[2.5rem] p-10 md:p-16 border border-primary/5 shadow-sm">
          <section className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <Globe className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-playfair font-bold text-primary">Pan-India Availability</h2>
            </div>
            <p className="text-primary/60 font-inter leading-relaxed">
              We currently ship to over 15,000 pincodes across India. This includes all Tier-1 and Tier-2 cities. For remote locations, an additional delivery surcharge and timeline may apply. Our team will contact you within 24 hours of ordering if a location-based surcharge is required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold text-primary">Pre-Delivery Inspection</h2>
            <p className="text-primary/60 font-inter leading-relaxed">
              Before your furniture leaves our hub, it undergoes a rigorous 14-point quality inspection. We check for upholstery consistency, frame stability, and cushioning resilience. A quality certificate is signed and placed inside the packaging.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-playfair font-bold text-primary">Damages & Discrepancies</h2>
            <p className="text-primary/60 font-inter leading-relaxed bg-accent/5 p-6 rounded-2xl border border-accent/10 italic">
              "We encourage customers to inspect the furniture at the time of delivery. In the rare event of transit damage, please notify our delivery partners immediately and record it on the delivery note. We will replace the piece at no extra cost."
            </p>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-primary/40 text-xs font-bold uppercase tracking-widest font-inter">Still have questions?</p>
          <div className="flex justify-center gap-6 text-sm font-bold text-primary">
            <p>Email: <span className="text-accent">woodnestfurnitureslg@gmail.com</span></p>
            <p>Phone: <span className="text-accent">+91 98324 77151</span></p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
