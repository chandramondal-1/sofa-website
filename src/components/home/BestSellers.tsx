import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Royal Velvet 3-Seater",
    price: "₹45,999",
    originalPrice: "₹59,999",
    discount: "23% OFF",
    rating: 4.8,
    reviews: 124,
    image: "/product-navy.png",
    color: "Navy Blue",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Emerald Modern Classic",
    price: "₹38,500",
    originalPrice: "₹45,000",
    discount: "14% OFF",
    rating: 4.9,
    reviews: 89,
    image: "/product-emerald.png",
    color: "Green",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Toscana L-Shape Sofa",
    price: "₹82,000",
    originalPrice: "₹99,000",
    discount: "17% OFF",
    rating: 4.7,
    reviews: 56,
    image: "/hero-sofa.png",
    color: "Cream",
    badge: null,
  },
  {
    id: 4,
    name: "Chesterfield Leather",
    price: "₹1,15,000",
    originalPrice: "₹1,40,000",
    discount: "18% OFF",
    rating: 5.0,
    reviews: 42,
    image: "/cat-recliner.png",
    color: "Brown",
    badge: "Premium",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-playfair font-bold text-primary">Best Sellers</h2>
          <p className="text-sm text-primary/60 font-inter uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            Explored and loved by thousands. Our most popular designs that define modern luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/shop" 
            className="inline-block border-2 border-primary/10 text-primary hover:bg-primary hover:text-white px-12 py-4 rounded-full font-bold transition-all duration-300"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
