"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-accent/30 bg-white">
                <Image
                  src="/logo.png"
                  alt="WOODNEST Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <h3 className="text-2xl font-playfair font-bold text-surface tracking-wide">WOODNEST</h3>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-xs font-inter">
              Crafting premium comfort for modern living. WOODNEST brings luxury sofas and designer home décor directly to your doorstep.
            </p>
            <div className="flex items-center gap-4 text-xs font-inter text-secondary/70">
              Follow us for more updates
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-bold text-accent uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4 font-inter">
              <li><Link href="/shop/l-shape" className="text-sm text-secondary/70 hover:text-accent transition-colors">L-Shape Sofas</Link></li>
              <li><Link href="/shop/recliners" className="text-sm text-secondary/70 hover:text-accent transition-colors">Premium Recliners</Link></li>
              <li><Link href="/shop/wooden" className="text-sm text-secondary/70 hover:text-accent transition-colors">Classic Wooden Sets</Link></li>
              <li><Link href="/shop/sofa-beds" className="text-sm text-secondary/70 hover:text-accent transition-colors">Sofa Cum Beds</Link></li>
              <li><Link href="/shop/accessories" className="text-sm text-secondary/70 hover:text-accent transition-colors">Cushions & Decor</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-bold text-accent uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 font-inter">
              <li><Link href="/track" className="text-sm text-secondary/70 hover:text-accent transition-colors">Track Your Order</Link></li>
              <li><Link href="/shipping" className="text-sm text-secondary/70 hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-sm text-secondary/70 hover:text-accent transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/emi" className="text-sm text-secondary/70 hover:text-accent transition-colors">EMI & Payment Plans</Link></li>
              <li><Link href="/faq" className="text-sm text-secondary/70 hover:text-accent transition-colors">Common FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-bold text-accent uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-secondary/70 font-inter">Subscribe to get exclusive offers and new collection alerts.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-accent/10 border border-accent/20 rounded-lg py-3 px-4 focus:outline-none focus:border-accent transition-all text-sm font-inter text-surface"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent text-primary p-1.5 rounded-md hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-secondary/70 text-sm">
                <Phone className="w-4 h-4 text-accent" /> +91 98324 77151
              </div>
              <div className="flex items-center gap-3 text-secondary/70 text-sm">
                <Mail className="w-4 h-4 text-accent" /> woodnestfurnitureslg@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-secondary/70 font-inter">
            © 2026 WOODNEST FURNITURE LLC. All rights reserved. Designed for Premium Comfort.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-xs text-secondary/70 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-secondary/70 hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-secondary/70 hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
