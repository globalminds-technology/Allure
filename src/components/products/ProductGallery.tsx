"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0 pb-2 md:pb-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-brand-sand/50 p-1 flex items-center justify-center ${
              selectedIndex === idx
                ? "border-brand-burgundy shadow-xs ring-2 ring-brand-burgundy/15"
                : "border-brand-border/60 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              fill
              className="object-contain p-0.5"
            />
          </button>
        ))}
      </div>

      {/* Main Preview - Fully Visible Garment with Zero Cropping */}
      <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden bg-brand-sand/40 border border-brand-border/70 p-3 sm:p-4 flex items-center justify-center">
        <Image
          src={images[selectedIndex] || images[0]}
          alt={productName}
          fill
          priority
          className="object-contain object-center transition-all duration-300 drop-shadow-sm"
        />
      </div>
    </div>
  );
};
