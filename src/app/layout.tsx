import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import FloatingSupport from "@/components/layout/FloatingSupport";
import OptimizedAtmosphere from "@/components/layout/OptimizedAtmosphere";

const poppins = Poppins({
// ... rest of imports and font configs remain same ...
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOODNEST | Premium Sofa & Home Decor",
  description: "Experience the ultimate comfort with WOODNEST. Buy luxury sofas online, customize your style, and transform your living space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <CartProvider>
          <WishlistProvider>
            <Toaster position="top-center" expand={true} richColors />
            <OptimizedAtmosphere />
            <FloatingSupport />
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
