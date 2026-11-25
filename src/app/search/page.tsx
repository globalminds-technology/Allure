"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Loading } from "@/components/common/Loading";

function SearchContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const occasionParam = searchParams.get("occasion") || "";

  const [query, setQuery] = useState(queryParam);
  const [selectedOccasion, setSelectedOccasion] = useState(occasionParam);
  const [sortBy, setSortBy] = useState("relevance");

  useEffect(() => {
    setQuery(queryParam);
    setSelectedOccasion(occasionParam);
  }, [queryParam, occasionParam]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesQuery =
      !query.trim() ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()));

    const matchesOccasion =
      !selectedOccasion ||
      product.occasion?.some(
        (occ) => occ.toLowerCase() === selectedOccasion.toLowerCase()
      );

    return matchesQuery && matchesOccasion;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="mb-10 text-center max-w-xl mx-auto">
          <SectionHeading
            title="Search Allure Collections"
            subtitle="Search across sarees, salwar sets, co-ords, and festive ensembles"
          />

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Search by weave, fabric, color, or style..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-white border border-brand-border px-4 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy shadow-xs"
            />
          </div>

          {/* Occasion quick filters */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["All", "Festive", "Casual", "Weddings", "Workwear"].map((occ) => {
              const active =
                (occ === "All" && !selectedOccasion) ||
                selectedOccasion.toLowerCase() === occ.toLowerCase();
              return (
                <button
                  key={occ}
                  onClick={() => setSelectedOccasion(occ === "All" ? "" : occ)}
                  className={`text-xs px-3 py-1 rounded-full border transition-all ${
                    active
                      ? "bg-brand-burgundy text-white border-brand-burgundy"
                      : "bg-white text-brand-slate border-brand-border hover:border-brand-burgundy"
                  }`}
                >
                  {occ}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info & Sort */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-sand mb-8 text-xs text-brand-muted">
          <span>
            Showing <strong>{filteredProducts.length}</strong> items
            {query && ` for "${query}"`}
            {selectedOccasion && ` in ${selectedOccasion}`}
          </span>

          <div className="flex items-center gap-2">
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-brand-border rounded px-2.5 py-1 text-xs text-brand-slate focus:outline-none"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No pieces found matching your search. Try different terms or browse our collections."
        />
      </Container>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading label="Loading search results..." />}>
      <SearchContent />
    </Suspense>
  );
}
