"use client";

import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";
import { CreditCard, Wallet, Percent, ShieldCheck, Banknote, HelpCircle } from "lucide-react";

export default function EMIPage() {
  const bankPartners = [
    { name: "HDFC Bank", logo: "🏦", offer: "3, 6, 9, 12 Months @ 0% Interest" },
    { name: "ICICI Bank", logo: "🏦", offer: "Up to 24 Months Low-Cost EMI" },
    { name: "SBI Card", logo: "💳", offer: "Instant ₹5000 Cashback on 9+ Months" },
    { name: "Axis Bank", logo: "🏦", offer: "10% Instant Discount on EMI" },
  ];

  return (
    <PolicyLayout
      title="EMI & Payment Plans"
      subtitle="Luxury made affordable. Flexible payment options tailored to your convenience."
      icon={<CreditCard className="w-8 h-8" />}
    >
      <div className="space-y-16">
        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-primary">Prepaid Cards</h3>
            <p className="text-xs text-primary/60 font-inter leading-relaxed">
              We accept all major Credit and Debit cards from Visa, Mastercard, American Express, and RuPay.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-primary">UPI & Wallets</h3>
            <p className="text-xs text-primary/60 font-inter leading-relaxed">
              Scan and pay via GPay, PhonePe, Paytm, or any BHIM UPI app for instant confirmation.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
              <Banknote className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-primary">COD</h3>
            <p className="text-xs text-primary/60 font-inter leading-relaxed">
              Pay upon delivery for orders up to ₹25,000. For higher values, a 50% advance is required.
            </p>
          </div>
        </div>

        {/* No Cost EMI Section */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-primary/5 shadow-xl shadow-primary/5 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Most Popular Option
            </div>
            <h2 className="text-4xl font-playfair font-bold text-primary">No-Cost EMI</h2>
            <p className="text-primary/60 font-inter leading-relaxed">
              Why pay all at once when you can spread the cost? Our No-Cost EMI is available on all major bank credit cards for tenures up to 12 months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bankPartners.map((bank, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-surface/50 border border-primary/5 hover:border-accent/30 transition-all group">
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{bank.logo}</div>
                <div>
                  <h4 className="font-bold text-primary font-inter">{bank.name}</h4>
                  <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{bank.offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to avail EMI */}
        <div className="space-y-8">
          <h3 className="text-2xl font-playfair font-bold text-primary text-center">How to avail EMI?</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              "Add items to your cart & checkout.",
              "Select 'Credit/Debit Card EMI' at payment.",
              "Choose your bank & tenure duration.",
              "Complete payment & we start crafting!"
            ].map((step, idx) => (
              <div key={idx} className="flex-1 bg-white p-6 rounded-2xl border border-primary/5 text-center space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                  {idx + 1}
                </div>
                <p className="text-xs font-bold text-primary font-inter">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-primary text-white rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-accent">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-inter">Secure Transaction</h4>
              <p className="text-white/60 text-sm">Your payment information is encrypted and never stored on our servers.</p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Powered by Razorpay & Stripe</p>
        </div>
      </div>
    </PolicyLayout>
  );
}
