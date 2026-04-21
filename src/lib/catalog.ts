export interface CatalogCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Catalog {
  types: CatalogCategory[];
  materials: CatalogCategory[];
  styles: CatalogCategory[];
  rooms: CatalogCategory[];
  features: CatalogCategory[];
}

export const sofaCatalog: Catalog = {
  types: [
    { id: "sectional", name: "Sectional Sofa", description: "Expansive seating for the whole family.", image: "/catalog/sectional.png" },
    { id: "l-shape", name: "L-Shape Sofa", description: "Perfect for corner optimization.", image: "/catalog/l-shape.png" },
    { id: "u-shape", name: "U-Shape Sofa", description: "The ultimate conversational arrangement.", image: "/catalog/u-shape.png" },
    { id: "3-seater", name: "3-Seater Sofa", description: "Classic mid-sized luxury.", image: "/catalog/3-seater.png" },
    { id: "2-seater", name: "2-Seater Sofa", description: "Cozy comfort for smaller spaces.", image: "/catalog/2-seater.png" },
    { id: "1-seater", name: "1-Seater Sofa", description: "Personal luxury in an armchair.", image: "/catalog/1-seater.png" },
    { id: "loveseat", name: "Loveseat Sofa", description: "Intimate seating for two.", image: "/catalog/loveseat.png" },
    { id: "sleeper", name: "Sleeper Sofa", description: "Elegant seating that transforms for guests.", image: "/catalog/sleeper.png" },
    { id: "sofa-cum-bed", name: "Sofa Cum Bed", description: "Practical versatility without compromise.", image: "/catalog/sofa-cum-bed.png" },
    { id: "futon", name: "Futon Sofa", description: "Minimalist multi-functional design.", image: "/catalog/futon.png" }
  ],
  materials: [
    { id: "leather", name: "Leather Sofa", description: "Timeless elegance in genuine grain.", image: "/catalog/leather.png" },
    { id: "faux-leather", name: "Faux Leather Sofa", description: "Ethical luxury with easy maintenance.", image: "/catalog/faux-leather.png" },
    { id: "fabric", name: "Fabric Sofa", description: "Soft, breathable, and versatile textures.", image: "/catalog/fabric.png" },
    { id: "velvet", name: "Velvet Sofa", description: "Plush, opulent, and showroom-ready.", image: "/catalog/velvet.png" },
    { id: "linen", name: "Linen Sofa", description: "Natural, airy, and effortlessly chic.", image: "/catalog/linen.png" },
    { id: "wooden", name: "Wooden Sofa", description: "Sturdy handcrafted teak and oak frames.", image: "/catalog/wooden.png" },
    { id: "metal-frame", name: "Metal Frame Sofa", description: "Industrial strength with modern lines.", image: "/catalog/metal-frame.png" },
    { id: "rattan", name: "Rattan Sofa", description: "Bohemian charm and organic textures.", image: "/catalog/rattan.png" },
    { id: "suede", name: "Suede Sofa", description: "Unmatched softness and premium feel.", image: "/catalog/suede.png" },
    { id: "microfiber", name: "Microfiber Sofa", description: "Durable, stain-resistant, and family-friendly.", image: "/catalog/microfiber.png" }
  ],
  styles: [
    { id: "modern", name: "Modern Sofa", description: "Clean lines and contemporary silhouettes.", image: "/catalog/modern.png" },
    { id: "minimalist", name: "Minimalist Sofa", description: "Essential form for clutter-free living.", image: "/catalog/minimalist.png" },
    { id: "luxury", name: "Luxury Sofa", description: "Premium materials and elite craftsmanship.", image: "/catalog/luxury.png" },
    { id: "chesterfield", name: "Chesterfield Sofa", description: "Iconic deep button tufting and rolled arms.", image: "/catalog/chesterfield.png" },
    { id: "scandinavian", name: "Scandinavian Sofa", description: "Light woods and functional simplicity.", image: "/catalog/scandinavian.png" },
    { id: "mid-century", name: "Mid-Century Sofa", description: "Retro-inspired tapered legs and bold shapes.", image: "/catalog/mid-century.png" },
    { id: "traditional", name: "Traditional Sofa", description: "Classic patterns and ornate detailing.", image: "/catalog/traditional.png" },
    { id: "contemporary", name: "Contemporary Sofa", description: "Cutting-edge design for today's homes.", image: "/catalog/contemporary.png" },
    { id: "vintage", name: "Vintage Sofa", description: "Timeless character and antique charm.", image: "/catalog/vintage.png" },
    { id: "industrial", name: "Industrial Sofa", description: "Raw materials and bold structural elements.", image: "/catalog/industrial.png" }
  ],
  rooms: [
    { id: "living-room", name: "Living Room Sofa", description: "The heart of your family home.", image: "/catalog/living-room.png" },
    { id: "bedroom", name: "Bedroom Sofa", description: "Quiet comfort for your personal sanctuary.", image: "/catalog/bedroom.png" },
    { id: "office", name: "Office Sofa", description: "Professional style for productive spaces.", image: "/catalog/office.png" },
    { id: "reception", name: "Reception Sofa", description: "Make a lasting first impression.", image: "/catalog/reception.png" },
    { id: "guest-room", name: "Guest Room Sofa", description: "Welcoming comfort for your visitors.", image: "/catalog/guest-room.png" },
    { id: "lounge", name: "Lounge Sofa", description: "Relaxed vibes for entertainment areas.", image: "/catalog/lounge.png" },
    { id: "balcony", name: "Balcony Sofa", description: "Weather-resistant style for cozy nooks.", image: "/catalog/balcony.png" },
    { id: "outdoor", name: "Outdoor Sofa", description: "Al fresco luxury for patios and gardens.", image: "/catalog/outdoor.png" },
    { id: "cafe", name: "Café Sofa", description: "Chic seating for social environments.", image: "/catalog/cafe.png" },
    { id: "hotel-lobby", name: "Hotel Lobby Sofa", description: "Grand silhouettes for commercial spaces.", image: "/catalog/hotel-lobby.png" }
  ],
  features: [
    { id: "recliner", name: "Recliner Sofa", description: "Ultimate relaxation at the push of a button.", image: "/catalog/recliner.png" },
    { id: "massage", name: "Massage Sofa", description: "Therapeutic comfort built into your seat.", image: "/catalog/massage.png" },
    { id: "storage", name: "Storage Sofa", description: "Smart spaces to hide your essentials.", image: "/catalog/storage.png" },
    { id: "adjustable", name: "Adjustable Sofa", description: "Customize your headrest and arm positions.", image: "/catalog/adjustable.png" },
    { id: "foldable", name: "Foldable Sofa", description: "Compact design for maximum flexibility.", image: "/catalog/foldable.png" },
    { id: "modular", name: "Modular Sofa", description: "Build your own configuration with ease.", image: "/catalog/modular.png" },
    { id: "usb-charging", name: "USB Charging Sofa", description: "Stay connected while you sit and relax.", image: "/catalog/usb-charging.png" },
    { id: "smart", name: "Smart Sofa", description: "Integrated technology for modern living.", image: "/catalog/smart.png" },
    { id: "pet-friendly", name: "Pet-Friendly Sofa", description: "Durable fabrics that resist claws and stains.", image: "/catalog/pet-friendly.png" },
    { id: "washable-cover", name: "Washable Cover Sofa", description: "Cleanliness made simple with removable slips.", image: "/catalog/washable-cover.png" }
  ]
};
