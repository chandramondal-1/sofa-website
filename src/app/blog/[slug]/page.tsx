import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostClient from "@/components/blog/BlogPostClient";

export async function generateStaticParams() {
  return [{ slug: "sofa-care-guide" }];
}

const blogData = {
  slug: "sofa-care-guide",
  title: "The Ultimate Guide to Sofa Care: Keeping Velvets and Fabrics Fresh",
  date: "April 20, 2026",
  author: "Elena Reed",
  image: "/blog-cozy.png",
  category: "Care Guide",
  content: [
    {
      type: "paragraph",
      text: "Maintaining a luxury sofa requires more than just occasional vacuuming. Discover the secrets of professional furniture care to ensure your WOODNEST pieces last a lifetime. Whether you've chosen a plush velvet or a durable textured fabric, following a few simple steps will keep your furniture looking showroom-fresh for years.",
    },
    {
      type: "heading",
      text: "Understanding Your Fabric",
    },
    {
      type: "paragraph",
      text: "Before picking up a cleaning agent, it's crucial to understand the material. Velvet, for instance, has a 'pile' that can become flattened over time. This is a natural characteristic, but regular brushing with a soft-bristled clothes brush can maintain its luxurious sheen.",
    },
    {
      type: "paragraph",
      text: "Leather sofas, on the other hand, require a different approach. Avoid using water or harsh detergents, as these can strip natural oils. Instead, use a damp, soft cloth for dusting and a specialized leather conditioner every six months.",
    },
    {
      type: "heading",
      text: "Daily Maintenance Tips",
    },
    {
      type: "list",
      items: [
        "Plump the cushions daily to maintain their shape and loft.",
        "Vacuum weekly using an upholstery attachment on low suction.",
        "Rotate and flip cushions (when possible) to ensure even wear.",
        "Keep your furniture away from direct sunlight to prevent color fading.",
      ],
    },
  ],
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-20">
        <BlogPostClient blogData={blogData} />
      </main>
      <Footer />
    </div>
  );
}
