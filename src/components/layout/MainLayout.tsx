"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { MobileNavbar } from "./MobileNavbar";
import { Footer } from "./Footer";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/common/Button";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-slate font-sans antialiased selection:bg-brand-burgundy selection:text-white">
      {/* Top Announcement */}
      <AnnouncementBar />

      {/* Main Unified Header & Navbar matching reference design */}
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Drawer Menu */}
      <MobileNavbar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-sand/40">
                <div className="flex items-center gap-2">
                  <Icons.ShoppingBag className="w-5 h-5 text-brand-burgundy" />
                  <h3 className="font-serif text-lg font-medium text-brand-burgundy">
                    Your Shopping Bag ({cart.length})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 text-brand-muted hover:text-brand-burgundy"
                >
                  <Icons.X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-brand-muted">
                    <Icons.ShoppingBag className="w-12 h-12 text-brand-border stroke-[1.5] mb-3" />
                    <p className="font-serif text-base text-brand-burgundy">
                      Your bag is empty
                    </p>
                    <p className="text-xs text-brand-muted mt-1 max-w-xs">
                      Explore our handpicked sarees, kurtis, and festive sets.
                    </p>
                    <div className="mt-5">
                      <Button
                        size="sm"
                        onClick={() => setIsCartOpen(false)}
                        href="/collections/sarees"
                      >
                        Explore Collections
                      </Button>
                    </div>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 pb-4 border-b border-brand-sand"
                    >
                      <div className="relative w-20 h-24 rounded overflow-hidden bg-brand-sand shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <Link
                              href={`/products/${item.product.slug}`}
                              onClick={() => setIsCartOpen(false)}
                              className="text-xs font-medium text-brand-slate hover:text-brand-burgundy line-clamp-2"
                            >
                              {item.product.name}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-brand-muted hover:text-red-600 p-1 ml-2"
                            >
                              <Icons.X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-brand-muted mt-1">
                            Size: {item.selectedSize}
                            {item.selectedColor && ` | Color: ${item.selectedColor}`}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-brand-border rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 text-brand-slate hover:bg-brand-sand"
                            >
                              <Icons.Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 text-brand-slate hover:bg-brand-sand"
                            >
                              <Icons.Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-semibold text-brand-burgundy">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-4 border-t border-brand-border bg-brand-sand/30 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-muted">Subtotal</span>
                    <span className="font-semibold text-brand-burgundy">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-muted">
                    Shipping & taxes calculated at checkout. Free shipping on orders over ₹1,999.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                    >
                      View Cart
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      href="/cart"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

