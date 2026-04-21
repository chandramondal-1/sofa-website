"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { sofaCatalog } from "@/lib/catalog";
import { useSearchParams, useRouter } from "next/navigation";

export default function FilterSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get(key);
    
    if (current === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const sections = [
    { id: "type", title: "By Type", options: sofaCatalog.types },
    { id: "material", title: "By Material", options: sofaCatalog.materials },
    { id: "style", title: "By Style", options: sofaCatalog.styles },
    { id: "room", title: "By Room", options: sofaCatalog.rooms },
    { id: "feature", title: "By Feature", options: sofaCatalog.features },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
      {sections.map((section) => (
        <div key={section.id} className="space-y-4">
          <h4 className="text-xs font-bold font-playfair uppercase tracking-[0.2em] text-primary border-b border-primary/10 pb-3">
            {section.title}
          </h4>
          <div className="space-y-3 max-h-60 overflow-y-auto pr-2 scrollbar-hide">
            {section.options.map((option) => {
              const isActive = searchParams.get(section.id) === option.id;
              return (
                <label 
                  key={option.id} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => handleFilterChange(section.id, option.id)}
                >
                  <div className={cn(
                    "w-4 h-4 border-2 rounded flex items-center justify-center transition-all",
                    isActive ? "border-accent bg-accent" : "border-primary/10 group-hover:border-accent/50"
                  )}>
                    <Check className={cn("w-2.5 h-2.5 text-primary transition-opacity", isActive ? "opacity-100" : "opacity-0")} />
                  </div>
                  <span className={cn(
                    "text-xs font-inter transition-colors",
                    isActive ? "text-accent font-bold" : "text-primary/60 group-hover:text-primary"
                  )}>
                    {option.name}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
      
      {/* Featured Offer Card in Sidebar */}
      <div className="bg-primary text-secondary rounded-3xl p-8 space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest relative z-10">Limited Offer</p>
        <h5 className="text-xl font-playfair font-bold text-white leading-tight relative z-10">Free Installation in Bengaluru</h5>
        <button className="text-xs font-bold text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-colors relative z-10">
          Check All Cities
        </button>
      </div>
    </aside>
  );
}
