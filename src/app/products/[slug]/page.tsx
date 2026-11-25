import React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetails } from "@/components/products/ProductDetails";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from the same collection or category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.collectionSlug === product.collectionSlug)
  ).slice(0, 4);

  return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
