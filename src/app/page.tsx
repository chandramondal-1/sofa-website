import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryScroller from "@/components/home/CategoryScroller";
import BestSellers from "@/components/home/BestSellers";
import Offers from "@/components/home/Offers";
import ConsultancySection from "@/components/home/ConsultancySection";
import CollectionExplorer from "@/components/home/CollectionExplorer";
import RecentlyViewed from "@/components/product/RecentlyViewed";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryScroller />
      <CollectionExplorer />
      <Offers />
      <BestSellers />
      <RecentlyViewed />
      <ConsultancySection />
      <Footer />
    </main>
  );
}
