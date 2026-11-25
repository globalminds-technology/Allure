"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { Button } from "@/components/common/Button";
import { Icons } from "@/components/icons/Icons";

interface ProductActionsProps {
  product: Product;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0] || "Standard"
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || "Default"
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus("✓ Delivery available! Estimated arrival: 3 - 5 business days.");
    } else {
      setPincodeStatus("Please enter a valid 6-digit Indian PIN code.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Price */}
      <div>
        <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
          {product.category}
        </span>
        <h1 className="mt-1.5 text-2xl sm:text-3xl font-serif text-brand-burgundy font-normal leading-tight">
          {product.name}
        </h1>

        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-2xl sm:text-3xl font-bold text-brand-burgundy font-sans">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-base text-brand-muted line-through font-sans">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          {product.discountPercent && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-roseLight text-brand-crimson">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>
        <p className="text-xs text-brand-muted mt-1">Inclusive of all taxes.</p>
      </div>

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
            Color: <span className="font-normal text-brand-muted">{selectedColor}</span>
          </label>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                title={c.name}
                className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                  selectedColor === c.name
                    ? "border-brand-burgundy scale-110 shadow-xs"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full border border-black/10"
                  style={{ backgroundColor: c.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-brand-slate">
              Size
            </label>
            <button className="text-[11px] text-brand-maroon hover:underline font-medium">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`min-w-10 px-3.5 py-2 text-xs font-medium rounded-xs border transition-all ${
                  selectedSize === sz
                    ? "border-brand-burgundy bg-brand-burgundy text-white shadow-xs"
                    : "border-brand-border bg-white text-brand-slate hover:border-brand-burgundy"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & CTA buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-brand-border rounded bg-white">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-3 text-brand-slate hover:bg-brand-sand"
            >
              <Icons.Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-3 text-sm font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-3 text-brand-slate hover:bg-brand-sand"
            >
              <Icons.Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <Button
            onClick={handleAddToCart}
            variant="primary"
            size="lg"
            className="flex-1"
          >
            <Icons.ShoppingBag className="w-4 h-4 mr-2" />
            Add To Bag
          </Button>

          <button
            onClick={() => toggleWishlist(product)}
            aria-label="Wishlist"
            className="w-12 h-12 rounded border border-brand-border flex items-center justify-center text-brand-slate hover:border-brand-crimson hover:text-brand-crimson transition-colors bg-white"
          >
            <Icons.Heart
              className={`w-5 h-5 ${
                isWishlisted ? "fill-brand-crimson text-brand-crimson" : ""
              }`}
            />
          </button>
        </div>

        <Button
          onClick={handleAddToCart}
          variant="gold"
          size="lg"
          className="w-full"
        >
          Buy Now
        </Button>
      </div>

      {/* Pincode checker */}
      <div className="pt-4 border-t border-brand-sand">
        <form onSubmit={handleCheckPincode} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter 6-digit PIN Code"
            maxLength={6}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 bg-white border border-brand-border px-3 py-2 text-xs rounded-xs focus:outline-none focus:border-brand-burgundy"
          />
          <Button type="submit" variant="secondary" size="sm">
            Check Delivery
          </Button>
        </form>
        {pincodeStatus && (
          <p
            className={`mt-2 text-xs ${
              pincodeStatus.startsWith("✓") ? "text-green-700" : "text-amber-700"
            }`}
          >
            {pincodeStatus}
          </p>
        )}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-brand-sand text-center text-brand-muted">
        <div className="flex flex-col items-center">
          <Icons.ShieldCheck className="w-5 h-5 text-brand-gold mb-1" />
          <span className="text-[11px] font-medium text-brand-slate">
            100% Authentic
          </span>
          <span className="text-[10px]">Pure Handloom</span>
        </div>
        <div className="flex flex-col items-center">
          <Icons.Truck className="w-5 h-5 text-brand-gold mb-1" />
          <span className="text-[11px] font-medium text-brand-slate">
            Free Delivery
          </span>
          <span className="text-[10px]">Above ₹1,999</span>
        </div>
        <div className="flex flex-col items-center">
          <Icons.RefreshCw className="w-5 h-5 text-brand-gold mb-1" />
          <span className="text-[11px] font-medium text-brand-slate">
            Easy Exchange
          </span>
          <span className="text-[10px]">7-day policy</span>
        </div>
      </div>
    </div>
  );
};

