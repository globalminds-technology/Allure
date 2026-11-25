export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  images: string[];
  category: string;
  collectionSlug: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  occasion?: string[];
  fabric?: string;
  careInstructions?: string;
  rating?: number;
  reviewsCount?: number;
  tags?: string[];
}

export interface ProductFilter {
  category?: string;
  collectionSlug?: string;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  colors?: string[];
  occasions?: string[];
  inStockOnly?: boolean;
  sortBy?: "newest" | "price-low" | "price-high" | "popularity";
}

