"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/product/FilterSidebar";
import RecentlyViewed from "@/components/product/RecentlyViewed";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { allProducts } from "@/lib/data";

function ProductGrid() {
  const searchParams = useSearchParams();
  
  // Filtering logic
  const filteredProducts = allProducts.filter(product => {
    const type = searchParams.get("type");
    const material = searchParams.get("material");
    const style = searchParams.get("style");
    const room = searchParams.get("room");
    const feature = searchParams.get("feature");

    if (type && product.type !== type) return false;
    if (material && product.material !== material) return false;
    if (style && product.style !== style) return false;
    if (room && product.room !== room) return false;
    if (feature && product.feature !== feature) return false;

    return true;
  });

  const displayProducts = filteredProducts.map(p => ({
    ...p,
    price: `₹${p.price.toLocaleString()}`,
    originalPrice: p.originalPrice ? `₹${p.originalPrice.toLocaleString()}` : undefined
  }));

  return (
    <div className="flex-grow space-y-8">
      <div className="flex items-center justify-between pb-6 border-b border-primary/5">
        <button className="flex items-center gap-2 lg:hidden text-primary font-bold text-sm">
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
        <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-primary/40 uppercase tracking-widest">
          <span>View:</span>
          <button className="text-primary underline">Grid</button>
          <button className="hover:text-primary">List</button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-primary/40 uppercase tracking-widest whitespace-nowrap">Sort By:</span>
          <select className="bg-transparent text-sm font-bold text-primary focus:outline-none cursor-pointer">
            <option>Popularity</option>
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {displayProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} {...product} reviews={product.reviewsCount} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4">
          <p className="text-xl font-playfair font-bold text-primary">No products found</p>
          <p className="text-sm text-primary/40">Try adjusting your filters or browse all collections.</p>
          <Link href="/shop" className="inline-block text-accent font-bold border-b border-accent pb-1">
            Clear All Filters
          </Link>
        </div>
      )}

      {/* Pagination Placeholder */}
      {displayProducts.length > 0 && (
        <div className="flex justify-center pt-12">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">1</button>
            <button className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">2</button>
            <span className="text-primary/40">...</span>
            <button className="px-6 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm font-bold">Next Page</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      
      {/* Header / Breadcrumbs */}
      <div className="pt-32 pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-primary/40 font-inter mb-4">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-medium">All Sofas</span>
          </div>
          <h1 className="text-4xl font-playfair font-bold text-primary mb-2">Our Collection</h1>
          <p className="text-sm text-primary/60 font-inter">Premium Handcrafted Furnitures</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <Suspense fallback={<div className="w-64 h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
            <FilterSidebar />
          </Suspense>

          {/* Main Content with Suspense for SearchParams */}
          <Suspense fallback={<div className="flex-grow h-96 bg-gray-100 animate-pulse rounded-3xl" />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>

      <RecentlyViewed />

      <Footer />
    </div>
  );
}
