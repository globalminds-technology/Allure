import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = "No pieces found in this category.",
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center text-brand-muted">
        <p className="font-serif text-lg text-brand-burgundy">{emptyMessage}</p>
        <p className="text-xs mt-1">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

