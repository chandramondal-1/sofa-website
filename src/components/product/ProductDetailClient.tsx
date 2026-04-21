"use client";

import React, { useState } from "react";
import { Star, ShoppingCart, Heart, ShieldCheck, Truck, Clock, Ruler, RotateCcw, ChevronRight, Sparkles } from "lucide-react";
import ReviewSection from "./ReviewSection";
import RelatedProducts from "./RelatedProducts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductDetailClientProps {
  currentProduct: any;
}

export default function ProductDetailClient({ currentProduct }: ProductDetailClientProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  React.useEffect(() => {
    const stored = localStorage.getItem("recently_viewed");
    let ids: number[] = [];
    if (stored) {
      try {
        ids = JSON.parse(stored);
      } catch (e) {
        ids = [];
      }
    }
    // Remove if already exists and add to front
    ids = [currentProduct.id, ...ids.filter(id => id !== currentProduct.id)].slice(0, 5);
    localStorage.setItem("recently_viewed", JSON.stringify(ids));
  }, [currentProduct.id]);

  const [pincode, setPincode] = useState("");
  const [isCheckingPincode, setIsCheckingPincode] = useState(false);
  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCheckPincode = () => {
    if (pincode.length !== 6) {
      toast.error("Please enter a valid 6-digit pincode");
      return;
    }
    setIsCheckingPincode(true);
    setTimeout(() => {
      setIsCheckingPincode(false);
      setPincodeStatus("success");
      toast.success("Delivery available in 3-5 days!");
    }, 1200);
  };

  const emiAmount = Math.round(currentProduct.price / 12);

  return (
    <div className="container-fluid">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/40 font-inter mb-8">
        <Link href="/" className="hover:text-accent transition-colors font-bold">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/shop" className="hover:text-accent transition-colors font-bold">Collections</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary font-bold">{currentProduct.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
        {/* Image Gallery */}
        <div className="space-y-6 md:space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] md:aspect-square bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5 group/gallery"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentProduct.images[activeImage]}
                  alt={currentProduct.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Premium Zoom Overlay */}
            <motion.div 
              className="absolute inset-0 z-10 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500 cursor-zoom-in overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) {
                  img.style.transformOrigin = `${x}% ${y}%`;
                  img.style.transform = "scale(2)";
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
               <Image
                  src={currentProduct.images[activeImage]}
                  alt={currentProduct.name}
                  fill
                  className="object-cover transition-transform duration-200"
                />
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleWishlist({
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price,
                image: currentProduct.images[0],
                color: selectedColor.name,
                rating: currentProduct.rating,
                reviews: currentProduct.reviewsCount
              })}
              className={cn(
                "absolute top-6 right-6 md:top-8 md:right-8 p-3 md:p-4 backdrop-blur-xl rounded-full transition-all shadow-2xl z-20",
                isInWishlist(currentProduct.id) ? "bg-accent text-primary" : "bg-white/60 text-primary/40 hover:text-red-500"
              )}
            >
              <Heart className={cn("w-5 h-5 md:w-6 md:h-6", isInWishlist(currentProduct.id) && "fill-current")} />
            </motion.button>

            {badge && (
              <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full z-20 animate-pulse">
                {badge}
              </div>
            )}
          </motion.div>
          
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {currentProduct.images.map((img: string, idx: number) => (
              <motion.button
                key={idx}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "relative min-w-[80px] w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all shadow-md shrink-0",
                  activeImage === idx ? "border-accent ring-4 ring-accent/10" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image src={img} alt={`${currentProduct.name} ${idx}`} fill className="object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-3.5 h-3.5", i < Math.floor(currentProduct.rating) ? "fill-current" : "opacity-30")} />
                ))}
              </div>
              <span className="text-[10px] font-bold font-inter text-primary/40 uppercase tracking-widest">{currentProduct.reviewsCount} Verified Reviews</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-primary leading-tight">{currentProduct.name}</h1>
            
            <div className="flex items-baseline gap-4">
              <span className="text-3xl md:text-4xl font-bold text-primary">₹{currentProduct.price.toLocaleString()}</span>
              <span className="text-lg md:text-xl text-primary/20 line-through">₹{currentProduct.originalPrice.toLocaleString()}</span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{currentProduct.discount}</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Delivery Checker - TOP 10 FEATURE */}
            <div className="bg-white rounded-3xl p-6 border border-primary/5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent" /> Check Delivery Eligibility
                </span>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <input 
                    type="text" 
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit Pincode" 
                    className={cn(
                      "w-full bg-surface/50 border-2 rounded-xl py-3 px-4 text-sm font-bold focus:outline-none transition-all",
                      pincodeStatus === "success" ? "border-green-500/20 bg-green-50/50" : "border-primary/5 focus:border-accent"
                    )}
                  />
                  {pincodeStatus === "success" && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-bold text-xs">✓ Available</div>}
                </div>
                <button 
                  onClick={handleCheckPincode}
                  disabled={isCheckingPincode}
                  className="bg-primary text-white px-8 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all disabled:opacity-50"
                >
                  {isCheckingPincode ? "Checking..." : "Verify"}
                </button>
              </div>
              {pincodeStatus === "success" && (
                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-green-700 font-bold uppercase tracking-widest">
                   🚀 Fast delivery to your area: Estimate {currentProduct.specs.deliveryTime}
                </motion.p>
              )}
            </div>

            {/* Selection Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-primary/5">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 font-inter leading-none">Color: {selectedColor.name}</label>
                <div className="flex gap-3">
                  {currentProduct.colors.map((color: any) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-all p-1",
                        selectedColor.name === color.name ? "border-accent scale-110" : "border-transparent hover:scale-105"
                      )}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/40 font-inter">Select Configuration</label>
                <div className="relative">
                   <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-surface border-2 border-primary/5 rounded-xl py-2 px-4 text-xs font-bold text-primary focus:outline-none focus:border-accent appearance-none cursor-pointer"
                   >
                     {currentProduct.sizes.map((size: string) => (
                       <option key={size} value={size}>{size}</option>
                     ))}
                   </select>
                   <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent rotate-90 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Suite - TOP 10 FEATURES */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-primary/10 rounded-2xl px-4 py-3 gap-6 bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-bold text-primary hover:text-accent transition-colors">-</button>
                <span className="text-sm font-bold font-inter min-w-[20px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-bold text-primary hover:text-accent transition-colors">+</button>
              </div>
              <button 
                onClick={() => {
                  addItem({
                    id: currentProduct.id,
                    name: currentProduct.name,
                    price: currentProduct.price,
                    image: currentProduct.images[0],
                    quantity,
                    color: selectedColor.name,
                    size: selectedSize
                  });
                }}
                className="flex-grow bg-white border-2 border-primary text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all duration-500 group shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Add to Cart
              </button>
            </div>

            <button 
              onClick={() => {
                addItem({
                  id: currentProduct.id,
                  name: currentProduct.name,
                  price: currentProduct.price,
                  image: currentProduct.images[0],
                  quantity,
                  color: selectedColor.name,
                  size: selectedSize
                });
                router.push("/checkout");
              }}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-accent hover:text-primary transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              Buy It Now - Instant Checkout
            </button>
          </div>

          {/* EMI & Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-2xl space-y-1">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Premium Financing</p>
              <p className="text-sm font-bold text-primary leading-none">Starting ₹{emiAmount.toLocaleString()}/mo</p>
              <p className="text-[9px] text-primary/40 font-inter">Available on all major credit cards</p>
            </div>
            <div className="flex items-center gap-4 p-4 border border-primary/5 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{currentProduct.specs.warranty}</p>
                <p className="text-[9px] text-primary/40 font-inter">Verified Artisanal Craftsmanship</p>
              </div>
            </div>
          </div>

          {/* Technical Specs - NEW FEATURE */}
          <div className="pt-8 space-y-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-3">
              <Ruler className="w-4 h-4 text-accent" /> Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {[
                { label: "Dimensions", value: currentProduct.specs.dimensions },
                { label: "Material", value: selectedMaterial || currentProduct.materials[0] },
                { label: "Structure", value: "Solid Grade-A Teak Wood" },
                { label: "Weight", value: currentProduct.specs.weight },
                { label: "Installation", value: currentProduct.specs.assembly },
                { label: "Origin", value: "Rajasthan, India" }
              ].map((spec) => (
                <div key={spec.label} className="space-y-1 border-b border-primary/5 pb-2">
                  <p className="text-[9px] font-bold text-primary/40 uppercase tracking-widest">{spec.label}</p>
                  <p className="text-xs font-bold text-primary font-inter">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Triptych */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Sparkles, title: "Artisanal Finish", desc: "Every seam is hand-stitched by masters with 20+ years of experience in luxury upholstery." },
          { icon: ShieldCheck, title: "Sovereign Warranty", desc: "Our 10-year frame warranty is a testament to the structural integrity of our solid wood cores." },
          { icon: RotateCcw, title: "Hassle-Free Returns", desc: "Not the perfect match? We offer a no-questions-asked 7-day return policy for ultimate peace of mind." }
        ].map((feat) => (
          <div key={feat.title} className="p-10 rounded-[2.5rem] bg-white border border-primary/5 text-center space-y-6 hover:shadow-2xl transition-all duration-700">
            <div className="mx-auto w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent">
              <feat.icon className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-playfair font-bold text-primary">{feat.title}</h4>
              <p className="text-sm text-primary/60 font-inter leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <RelatedProducts currentProductId={currentProduct.id} category={currentProduct.type} />

      <ReviewSection />
    </div>
  );
}
