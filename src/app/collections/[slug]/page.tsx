"use client";

import React, { useState, useMemo, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Icons } from "@/components/icons/Icons";

export default function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  // Check special virtual collections like new-arrivals or best-sellers
  const collection = COLLECTIONS.find((c) => c.slug === slug) || {
    id: slug,
    name:
      slug === "new-arrivals"
        ? "New Arrivals"
        : slug === "best-sellers"
        ? "Best Sellers"
        : slug.replace(/-/g, " "),
    slug,
    description:
      slug === "new-arrivals"
        ? "Explore the newest handcrafted additions to the Allure repertoire."
        : slug === "best-sellers"
        ? "Our most coveted Jamdani weaves, salwar suits, and everyday co-ords."
        : "Discover fine Indian craftsmanship and contemporary ethnic fashion.",
    bannerImage: "/images/banners/collection-banner.jpg",
  };

  const [sortBy, setSortBy] = useState<string>("featured");
  const [filterOccasion, setFilterOccasion] = useState<string>("all");
  const [filterPrice, setFilterPrice] = useState<number>(10000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (slug === "new-arrivals") {
      list = list.filter((p) => p.isNewArrival);
    } else if (slug === "best-sellers") {
      list = list.filter((p) => p.isBestSeller);
    } else {
      list = list.filter((p) => p.collectionSlug === slug);
    }

    if (filterOccasion !== "all") {
      list = list.filter((p) =>
        p.occasion?.some(
          (occ) => occ.toLowerCase() === filterOccasion.toLowerCase()
        )
      );
    }

    list = list.filter((p) => p.price <= filterPrice);

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return list;
  }, [slug, filterOccasion, filterPrice, inStockOnly, sortBy]);

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[240px] sm:h-[320px] w-full bg-brand-burgundy overflow-hidden">
        <Image
          src={collection.bannerImage}
          alt={collection.name}
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-8 z-10 text-white">
          <div className="flex items-center gap-2 text-xs tracking-widest text-brand-gold uppercase mb-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Collections</span>
            <span>/</span>
            <span className="text-white">{collection.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal capitalize">
            {collection.name}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-gray-200 max-w-xl">
            {collection.description}
          </p>
        </Container>
      </div>

      <Container className="py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between pb-4 border-b border-brand-sand">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-burgundy px-3 py-2 border border-brand-border rounded"
            >
              <Icons.Filter className="w-4 h-4" />
              <span>Filters ({filteredProducts.length})</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-brand-border rounded px-3 py-2 text-xs text-brand-slate"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>

          {/* Desktop Filter Sidebar */}
          <aside
            className={`w-full lg:w-64 shrink-0 space-y-6 ${
              isFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white p-5 rounded border border-brand-border/60 shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-brand-sand pb-3">
                <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-brand-burgundy">
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setFilterOccasion("all");
                    setFilterPrice(10000);
                    setInStockOnly(false);
                    setSortBy("featured");
                  }}
                  className="text-[11px] text-brand-muted hover:text-brand-crimson underline"
                >
                  Reset All
                </button>
              </div>

              {/* Occasion Filter */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
                  Occasion
                </label>
                <div className="space-y-1.5 text-xs text-brand-slate">
                  {["all", "Festive", "Casual", "Weddings", "Workwear"].map((occ) => (
                    <label
                      key={occ}
                      className="flex items-center gap-2 cursor-pointer hover:text-brand-burgundy"
                    >
                      <input
                        type="radio"
                        name="occasion"
                        checked={filterOccasion === occ}
                        onChange={() => setFilterOccasion(occ)}
                        className="accent-brand-burgundy"
                      />
                      <span className="capitalize">{occ === "all" ? "All Occasions" : occ}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-brand-slate mb-2">
                  <span>Max Price</span>
                  <span className="text-brand-burgundy">₹{filterPrice}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(Number(e.target.value))}
                  className="w-full accent-brand-burgundy"
                />
              </div>

              {/* In Stock Only */}
              <div className="pt-2 border-t border-brand-sand">
                <label className="flex items-center gap-2 text-xs font-medium text-brand-slate cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-brand-burgundy rounded"
                  />
                  <span>In Stock Pieces Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="flex-1">
            <div className="hidden lg:flex items-center justify-between pb-4 border-b border-brand-sand mb-6 text-xs text-brand-muted">
              <span>
                Showing <strong>{filteredProducts.length}</strong> creations
              </span>
              <div className="flex items-center gap-2">
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-brand-border rounded px-3 py-1.5 text-xs text-brand-slate focus:outline-none"
                >
                  <option value="featured">Featured Collections</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </main>
        </div>
      </Container>
    </div>
  );
}
