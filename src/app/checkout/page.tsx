"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-32 md:pt-40 pb-20">
        <div className="container-fluid">
          <CheckoutClient />
        </div>
      </main>

      <Footer />
    </div>
  );
}
