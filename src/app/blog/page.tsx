import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "sofa-care-guide",
    title: "The Ultimate Guide to Sofa Care: Keeping Velvets and Fabrics Fresh",
    excerpt: "Maintaining a luxury sofa requires more than just occasional vacuuming. Discover the secrets of professional furniture care to ensure your WOODNEST pieces last a lifetime.",
    date: "April 20, 2026",
    author: "Elena Reed",
    image: "/blog-cozy.png",
    category: "Care Guide",
  },
  {
    slug: "choosing-perfect-fabric",
    title: "Velvet vs. Leather: Choosing the Perfect Fabric for Your Living Space",
    excerpt: "Struggling to decide between the classic warmth of leather and the opulent touch of velvet? We break down the pros and cons to help you find your dream texture.",
    date: "April 18, 2026",
    author: "Elena Reed",
    image: "/product-navy.png",
    category: "Interior Design",
  },
  {
    slug: "maximizing-small-lounge",
    title: "Small Lounge, Big Style: 5 Tips to Maximize Your Living Area",
    excerpt: "Don't let a compact room limit your design ambitions. Learn how to use L-shaped sofas and smart lighting to create a sense of grandeur in small spaces.",
    date: "April 15, 2026",
    author: "Marcus Thorne",
    image: "/product-emerald.png",
    category: "Styling Tips",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-20 bg-white border-b border-primary/5">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs text-primary/40 font-inter">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-medium">Stories & Design</span>
          </div>
          <h1 className="text-5xl font-playfair font-bold text-primary">The Woodnest Journal</h1>
          <p className="text-sm text-primary/60 font-inter max-w-xl mx-auto leading-relaxed">
            Inspiration, expert advice, and interior design secrets from the heart of our craft studio.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Newsletter In-line */}
        <div className="mt-32 bg-primary rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-surface">Join the Journal</h2>
            <p className="text-secondary/60 font-inter text-sm leading-relaxed">
              Subscribe to our monthly newsletter for early access to collections and exclusive design tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white text-sm focus:outline-none focus:border-accent transition-all"
              />
              <button className="bg-accent text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
