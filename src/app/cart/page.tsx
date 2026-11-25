"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Icons } from "@/components/icons/Icons";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "ALLURE10") {
      setDiscountPercent(10);
      setCouponMessage("✓ ALLURE10 applied! 10% discount subtracted.");
    } else {
      setDiscountPercent(0);
      setCouponMessage("Invalid coupon code. Try ALLURE10.");
    }
  };

  const discountAmount = (subtotal * discountPercent) / 100;
  const isFreeShipping = subtotal >= 1999;
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + shippingFee;

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center">
        <Container size="sm">
          <div className="bg-white p-10 rounded border border-brand-border/60 shadow-card">
            <Icons.ShoppingBag className="w-16 h-16 text-brand-border mx-auto stroke-[1.2] mb-4" />
            <h1 className="text-2xl font-serif text-brand-burgundy">
              Your Shopping Bag is Empty
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-sm mx-auto">
              You haven&apos;t added any handcrafted pieces to your bag yet.
            </p>
            <div className="mt-6">
              <Button href="/collections/sarees" variant="primary" size="md">
                Explore Sarees & Kurtis
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex items-center justify-between pb-6 border-b border-brand-border mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-brand-burgundy font-normal">
            Shopping Bag ({cart.length} {cart.length === 1 ? "item" : "items"})
          </h1>
          <button
            onClick={clearCart}
            className="text-xs text-brand-muted hover:text-brand-crimson underline"
          >
            Clear Bag
          </button>
        </div>

        {/* Free shipping progress bar */}
        <div className="p-4 bg-brand-sand/60 rounded border border-brand-border/60 mb-8 text-xs sm:text-sm text-brand-slate">
          {isFreeShipping ? (
            <p className="text-green-800 font-medium">
              🎉 Congratulations! You have qualified for FREE Shipping across India!
            </p>
          ) : (
            <div>
              <p>
                Add <strong>{formatPrice(1999 - subtotal)}</strong> more to unlock{" "}
                <strong className="text-brand-burgundy">FREE Shipping</strong>!
              </p>
              <div className="mt-2 w-full h-2 bg-brand-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-gold transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / 1999) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded border border-brand-border/60 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-2xs"
              >
                <div className="flex gap-4 items-center w-full sm:w-auto">
                  <div className="relative w-20 h-28 rounded overflow-hidden bg-brand-sand shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold font-medium">
                      {item.product.category}
                    </span>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="block text-sm font-serif font-medium text-brand-burgundy hover:underline line-clamp-1 mt-0.5"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-brand-muted mt-1">
                      Size: <span className="text-brand-slate">{item.selectedSize}</span>
                      {item.selectedColor && ` | Color: ${item.selectedColor}`}
                    </p>
                    <p className="text-xs font-semibold text-brand-burgundy mt-1">
                      {formatPrice(item.product.price)} each
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-sand">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-brand-border rounded bg-brand-sand/30">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-brand-slate hover:bg-brand-sand"
                    >
                      <Icons.Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-brand-slate hover:bg-brand-sand"
                    >
                      <Icons.Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-sm font-bold text-brand-burgundy">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    className="text-brand-muted hover:text-brand-crimson p-1"
                  >
                    <Icons.X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-4 bg-white p-6 rounded border border-brand-border/60 shadow-2xs space-y-5">
            <h2 className="font-serif text-lg text-brand-burgundy font-medium pb-3 border-b border-brand-sand">
              Order Summary
            </h2>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-slate">
                Have a Promo Code?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. ALLURE10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-brand-sand/30 border border-brand-border px-3 py-2 text-xs rounded-xs uppercase focus:outline-none focus:border-brand-burgundy"
                />
                <Button type="submit" variant="secondary" size="sm">
                  Apply
                </Button>
              </div>
              {couponMessage && (
                <p
                  className={`text-[11px] ${
                    couponMessage.startsWith("✓")
                      ? "text-green-700 font-semibold"
                      : "text-amber-700"
                  }`}
                >
                  {couponMessage}
                </p>
              )}
            </form>

            {/* Calculation Breakdowns */}
            <div className="space-y-2.5 pt-3 border-t border-brand-sand text-xs sm:text-sm">
              <div className="flex justify-between text-brand-muted">
                <span>Bag Subtotal</span>
                <span className="text-brand-slate font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Coupon Discount (10%)</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between text-brand-muted">
                <span>Shipping Charges</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-green-700 font-semibold">FREE</span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>

              <div className="flex justify-between text-base font-bold text-brand-burgundy pt-3 border-t border-brand-sand">
                <span>Total Amount</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <Button
              onClick={() => alert("Proceeding to secure checkout prototype!")}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Proceed to Checkout
            </Button>

            <div className="text-center pt-2">
              <Link
                href="/collections/sarees"
                className="text-xs text-brand-maroon hover:underline font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
