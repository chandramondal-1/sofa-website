import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { allProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const currentProduct = allProducts.find((p) => p.id === productId);

  if (!currentProduct) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-20">
        <ProductDetailClient currentProduct={currentProduct} />
      </main>
      <Footer />
    </div>
  );
}
