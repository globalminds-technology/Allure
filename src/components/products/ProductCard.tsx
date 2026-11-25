"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/common/Button";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickSize, setQuickSize] = useState<string>(product.sizes[0] || "Standard");

  const isWishlisted = isInWishlist(product.id);
  const displayImage =
    isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <>
      <div
        className={`group relative flex flex-col bg-brand-ivory rounded-lg border border-brand-border/70 hover:shadow-card transition-all duration-300 overflow-hidden ${
          className || ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image Container - Image covers the card area completely */}
        <div className="relative aspect-3/4 w-full bg-brand-sand overflow-hidden">
          <Link href={`/products/${product.slug}`} className="block w-full h-full">
            <Image
              src={displayImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
            {product.discountPercent && (
              <span className="bg-brand-burgundy text-brand-ivory text-[10px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase shadow-xs">
                {product.discountPercent}% OFF
              </span>
            )}
            {product.isNewArrival && (
              <span className="bg-brand-gold text-white text-[10px] font-semibold px-2 py-0.5 rounded-xs tracking-wider uppercase shadow-xs">
                NEW
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-brand-charcoal shadow-subtle hover:text-brand-burgundy transition-all z-10"
          >
            <Icons.Heart
              className={`w-4 h-4 ${
                isWishlisted
                  ? "fill-brand-burgundy text-brand-burgundy"
                  : "stroke-brand-charcoal"
              }`}
            />
          </button>

          {/* Quick View Button on Image Hover */}
          <div className="absolute inset-x-2.5 bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsQuickViewOpen(true);
              }}
              className="w-full bg-white/95 hover:bg-white text-brand-burgundy text-[11px] font-semibold tracking-wider uppercase py-2 px-3 rounded-xs shadow-md flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors border border-brand-border"
            >
              <Icons.Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>

          {/* Add to Cart CTA */}
          <div className="absolute inset-x-2.5 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1, quickSize);
              }}
              className="w-full bg-brand-burgundy hover:bg-brand-burgundyDark text-brand-ivory text-[11px] font-semibold tracking-widest uppercase py-2.5 px-3 rounded-xs shadow-md flex items-center justify-center gap-1.5 transition-colors"
            >
              <Icons.ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Information Card Body */}
        <div className="p-4 flex flex-col flex-1 justify-between bg-brand-ivory border-t border-brand-border/40">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
              {product.category}
            </span>
            <Link
              href={`/products/${product.slug}`}
              className="mt-1 block text-xs sm:text-sm font-serif font-normal text-brand-charcoal hover:text-brand-burgundy line-clamp-2 leading-snug"
            >
              {product.name}
            </Link>
          </div>

          <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-semibold text-brand-burgundy">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-brand-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Quick Add icon for mobile */}
            <button
              onClick={() => addToCart(product, 1, quickSize)}
              aria-label="Add to cart"
              className="sm:hidden p-2 rounded bg-brand-burgundy text-white shadow-xs"
            >
              <Icons.ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg border border-brand-border max-w-2xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-burgundy"
            >
              <Icons.X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-3/4 rounded overflow-hidden bg-brand-sand">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif text-brand-burgundy font-normal">
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-xl font-bold text-brand-burgundy">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-brand-muted line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-[11px] font-semibold text-brand-burgundy px-1.5 py-0.5 bg-brand-sand rounded">
                      {product.discountPercent}% OFF
                    </span>
                  )}
                </div>

                <p className="text-xs text-brand-muted line-clamp-3">
                  {product.description}
                </p>

                {/* Size options */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      Select Size
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setQuickSize(sz)}
                          className={`text-xs px-2.5 py-1.5 border rounded-xs transition-colors ${
                            quickSize === sz
                              ? "border-brand-burgundy bg-brand-burgundy text-white font-medium"
                              : "border-brand-border bg-brand-ivory text-brand-charcoal"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    onClick={() => {
                      addToCart(product, 1, quickSize);
                      setIsQuickViewOpen(false);
                    }}
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={() => setIsQuickViewOpen(false)}
                    className="text-center text-xs text-brand-burgundy hover:underline pt-1"
                  >
                    View Full Product Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
