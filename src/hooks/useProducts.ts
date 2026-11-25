import { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { Product, ProductFilter } from "@/types/product";

export function useProducts(initialFilter?: ProductFilter) {
  const [filter, setFilter] = useState<ProductFilter>(initialFilter || {});

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (filter.collectionSlug) {
      if (filter.collectionSlug === "new-arrivals") {
        result = result.filter((p) => p.isNewArrival);
      } else if (filter.collectionSlug === "best-sellers") {
        result = result.filter((p) => p.isBestSeller);
      } else {
        result = result.filter((p) => p.collectionSlug === filter.collectionSlug);
      }
    }

    if (filter.category) {
      result = result.filter(
        (p) => p.category.toLowerCase() === filter.category?.toLowerCase()
      );
    }

    if (filter.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filter.minPrice!);
    }

    if (filter.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filter.maxPrice!);
    }

    if (filter.occasions && filter.occasions.length > 0) {
      result = result.filter((p) =>
        p.occasion?.some((occ) => filter.occasions?.includes(occ))
      );
    }

    if (filter.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (filter.sortBy) {
      switch (filter.sortBy) {
        case "price-low":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          result.sort((a, b) => b.price - a.price);
          break;
        case "popularity":
          result.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
          break;
        case "newest":
        default:
          result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
          break;
      }
    }

    return result;
  }, [filter]);

  return {
    products: filteredProducts,
    allProducts: PRODUCTS,
    filter,
    setFilter,
  };
}

