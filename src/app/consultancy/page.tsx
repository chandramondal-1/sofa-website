"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageSquare, ShieldCheck, ArrowRight, User, Mail, Briefcase } from "lucide-react";
import { toast } from "sonner";

export default function ConsultancyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Consultation Request Received! Our designers will contact you within 24 hours.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full inline-block"
            >
              Exclusive Design Service
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-playfair font-bold text-primary leading-tight"
            >
              Tailored Comfort, <br />
              <span className="text-accent italic">Expertly</span> Crafted
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary/60 font-inter max-w-2xl mx-auto leading-relaxed"
            >
              Building your dream living space shouldn't be a guessing game. 
              Our expert design consultants are here to help you choose the perfect 
              materials, configurations, and aesthetics for your WOODNEST pieces.
            </motion.p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "1-on-1 Session",
                desc: "Personalized advice from our senior interior architects."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Material Samples",
                desc: "Get exclusive access to premium fabric and wood swatches."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "3D Visualization",
                desc: "Preview how our sofas fit into your actual room layout."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-primary/60 font-inter text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side: Info */}
              <div className="p-12 lg:p-20 text-white space-y-10">
                <h2 className="text-4xl font-playfair font-bold leading-tight">
                  Book Your Virtual <br />Consultation
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold font-inter mb-1">Flexible Scheduling</h4>
                      <p className="text-white/60 text-sm">Pick a time that works for your busy lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold font-inter mb-1">Professional Portfolio</h4>
                      <p className="text-white/60 text-sm">See high-density project examples in your session.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-12 lg:p-20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Full Name</label>
                      <div className="relative">
                        <input required type="text" placeholder="John Doe" className="w-full bg-surface border border-primary/10 rounded-xl py-3 px-10 focus:outline-none focus:border-accent/50 transition-all text-sm text-primary placeholder:text-primary/40" />
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Email Address</label>
                      <div className="relative">
                        <input required type="email" placeholder="john@example.com" className="w-full bg-surface border border-primary/10 rounded-xl py-3 px-10 focus:outline-none focus:border-accent/50 transition-all text-sm text-primary placeholder:text-primary/40" />
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Project Type</label>
                    <select className="w-full bg-surface border border-primary/10 rounded-xl py-3 px-4 focus:outline-none focus:border-accent/50 transition-all text-sm text-primary">
                      <option>Living Room Redesign</option>
                      <option>Full Home Furniture</option>
                      <option>Commercial / Office</option>
                      <option>Custom Sofa Configuration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Brief Message</label>
                    <textarea rows={4} placeholder="Tell us a bit about your space..." className="w-full bg-surface border border-primary/10 rounded-xl py-3 px-4 focus:outline-none focus:border-accent/50 transition-all text-sm text-primary placeholder:text-primary/40" />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/10 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Schedule Consultation"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
