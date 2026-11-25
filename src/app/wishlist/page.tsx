"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/hooks/useWishlist";
import { Container } from "@/components/common/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/common/Button";
import { Icons } from "@/components/icons/Icons";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-brand-border mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Your Favorites
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif text-brand-burgundy font-normal mt-1">
              Wishlist ({wishlist.length})
            </h1>
          </div>
          {wishlist.length > 0 && (
            <div className="mt-4 sm:mt-0">
              <Button href="/collections/sarees" variant="outline" size="sm">
                Explore More
              </Button>
            </div>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="py-20 text-center">
            <Container size="sm">
              <div className="bg-white p-10 rounded border border-brand-border/60 shadow-card">
                <Icons.Heart className="w-16 h-16 text-brand-border mx-auto stroke-[1.2] mb-4" />
                <h2 className="text-2xl font-serif text-brand-burgundy">
                  Your Wishlist is Empty
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-sm mx-auto">
                  Save pieces you adore while browsing our collections and come back to them anytime.
                </p>
                <div className="mt-6">
                  <Button href="/collections/sarees" variant="primary" size="md">
                    Discover Collections
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ) : (
          <ProductGrid products={wishlist} />
        )}
      </Container>
    </div>
  );
}

