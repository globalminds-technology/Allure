"use client";

import React, { useRef } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { Icons } from "@/components/icons/Icons";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        aria-label="Previous products"
        className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-brand-border text-brand-burgundy shadow-md flex items-center justify-center hover:bg-brand-burgundy hover:text-white transition-all opacity-80 sm:opacity-0 group-hover:opacity-100"
      >
        <Icons.ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Next products"
        className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-brand-border text-brand-burgundy shadow-md flex items-center justify-center hover:bg-brand-burgundy hover:text-white transition-all opacity-80 sm:opacity-0 group-hover:opacity-100"
      >
        <Icons.ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[220px] sm:w-[270px] lg:w-[285px] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

