"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const categories = [
  { name: "L Shape Sofa", href: "/shop?type=l-shape" },
  { name: "Recliner", href: "/shop?type=recliner" },
  { name: "Wooden Sofa", href: "/shop?type=wooden" },
  { name: "2 Seater", href: "/shop?type=2-seater" },
  { name: "3 Seater", href: "/shop?type=3-seater" },
  { name: "Bed Sofa", href: "/shop?type=bed-sofa" },
  { name: "Collections", href: "/collections" },
  { name: "Journal", href: "/blog" },
  { name: "Consultancy", href: "/consultancy" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-white/90 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] py-2 md:py-3 border-b border-primary/5" 
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group z-[60]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                width: isScrolled ? 36 : 48, 
                height: isScrolled ? 36 : 48 
              }}
              className="relative transition-all duration-500 overflow-hidden rounded-full border-2 border-accent/20 group-hover:border-accent shadow-lg"
            >
              <Image
                src="/logo.png"
                alt="WOODNEST Logo"
                fill
                className="object-cover"
              />
            </motion.div>
          </Link>

          {/* Desktop/Tablet Search bar - Optimized Expand */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:flex flex-grow max-w-xl relative group"
          >
            <input
              type="text"
              placeholder="Search luxury collections..."
              className="w-full bg-surface/50 backdrop-blur-md border border-primary/5 rounded-full py-2 px-10 md:px-12 focus:outline-none focus:ring-4 focus:ring-accent/5 focus:bg-white focus:border-accent/30 transition-all text-xs md:text-sm font-inter text-primary placeholder:text-primary/30 shadow-inner"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-primary/30 group-focus-within:text-accent transition-colors" />
          </motion.div>

          {/* User Icons - Bounce on interaction */}
          <div className="flex items-center gap-2 md:gap-5 text-primary z-[60]">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/wishlist" className="p-2 md:p-3 hover:bg-accent/10 rounded-full transition-colors relative group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {wishlistCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 min-w-[16px] h-[16px] md:min-w-[18px] md:h-[18px] bg-accent text-primary text-[8px] md:text-[10px] flex items-center justify-center rounded-full px-1 border border-white font-bold font-inter"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/cart" className="p-2 md:p-3 hover:bg-accent/10 rounded-full transition-colors relative group">
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 min-w-[16px] h-[16px] md:min-w-[18px] md:h-[18px] bg-primary text-white text-[8px] md:text-[10px] flex items-center justify-center rounded-full px-1 border border-white font-bold font-inter"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            <Link href="/account" className="hidden md:flex p-3 hover:bg-accent/10 rounded-full transition-colors group">
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 md:p-3 hover:bg-accent/10 rounded-full transition-colors relative"
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center gap-1.5"
              >
                <motion.span 
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 7 }
                  }}
                  className="w-full h-0.5 bg-primary block origin-center" 
                />
                <motion.span 
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-full h-0.5 bg-primary block" 
                />
                <motion.span 
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -7 }
                  }}
                  className="w-full h-0.5 bg-primary block origin-center" 
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 mt-4 pt-4 border-t border-primary/5">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
            >
              <Link
                href={category.href}
                className="text-[10px] xl:text-[11px] uppercase tracking-[0.3em] font-bold text-primary/40 hover:text-accent transition-all relative group py-2"
              >
                {category.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-accent transition-all duration-500 ease-out group-hover:w-full group-hover:left-0" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/deals"
              className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-accent hover:text-white hover:bg-accent transition-all flex items-center gap-2 bg-accent/5 px-6 py-2 rounded-full border border-accent/20"
            >
              Instant Deals <span className="animate-pulse">🔥</span>
            </Link>
          </motion.div>
        </nav>
      </div>

      {/* Mobile Slide-in Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[58]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[59] shadow-2xl p-8 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Sanctuary Menu</p>
                {categories.map((category, idx) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={category.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-playfair font-bold text-primary hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {category.name}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-accent" />
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-12 pt-12 border-t border-primary/5 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link 
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-surface p-4 rounded-2xl flex flex-col gap-3 group active:scale-95 transition-transform"
                    >
                      <User className="w-5 h-5 text-accent" />
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">Account</span>
                    </Link>
                    <Link 
                      href="/track"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-surface p-4 rounded-2xl flex flex-col gap-3 group active:scale-95 transition-transform"
                    >
                      <Search className="w-5 h-5 text-accent" />
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">Track</span>
                    </Link>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-3xl space-y-4">
                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Need help?</p>
                    <Link href="tel:+919832477151" className="block text-lg font-bold text-primary hover:text-accent transition-colors">+91 98324 77151</Link>
                    <p className="text-xs text-primary/60">Expert designer session available Mon-Sat, 9AM - 8PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
