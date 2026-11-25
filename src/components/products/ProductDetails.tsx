"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { ProductGallery } from "./ProductGallery";
import { ProductActions } from "./ProductActions";
import { Container } from "@/components/common/Container";
import { ProductCarousel } from "./ProductCarousel";
import { SectionHeading } from "@/components/common/SectionHeading";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  relatedProducts,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "fabric" | "shipping">(
    "description"
  );

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pb-14 border-b border-brand-border">
          {/* Gallery Left */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Actions & Details Right */}
          <div>
            <ProductActions product={product} />

            {/* Information Tabs */}
            <div className="mt-8 pt-6 border-t border-brand-sand">
              <div className="flex border-b border-brand-sand gap-6 text-xs uppercase font-medium tracking-wider">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-2.5 transition-colors ${
                    activeTab === "description"
                      ? "text-brand-burgundy border-b-2 border-brand-burgundy font-semibold"
                      : "text-brand-muted hover:text-brand-slate"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("fabric")}
                  className={`pb-2.5 transition-colors ${
                    activeTab === "fabric"
                      ? "text-brand-burgundy border-b-2 border-brand-burgundy font-semibold"
                      : "text-brand-muted hover:text-brand-slate"
                  }`}
                >
                  Fabric & Care
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`pb-2.5 transition-colors ${
                    activeTab === "shipping"
                      ? "text-brand-burgundy border-b-2 border-brand-burgundy font-semibold"
                      : "text-brand-muted hover:text-brand-slate"
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>

              <div className="pt-4 text-xs sm:text-sm text-brand-slate leading-relaxed font-sans">
                {activeTab === "description" && (
                  <div className="space-y-3">
                    <p>{product.description}</p>
                    {product.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-brand-sand text-brand-slate px-2 py-0.5 rounded text-[11px]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "fabric" && (
                  <div className="space-y-2">
                    <p>
                      <strong className="text-brand-burgundy">Fabric:</strong>{" "}
                      {product.fabric || "Premium Handloom Cotton / Silk Blend"}
                    </p>
                    <p>
                      <strong className="text-brand-burgundy">Care Instructions:</strong>{" "}
                      {product.careInstructions || "Gentle hand wash in cold water or dry clean."}
                    </p>
                    <p className="text-brand-muted text-xs">
                      Note: Handwoven products may have subtle irregularities in weave or color, which are natural hallmarks of authentic artisanal craftsmanship.
                    </p>
                  </div>
                )}

                {activeTab === "shipping" && (
                  <div className="space-y-2">
                    <p>
                      • Standard delivery within 3-5 business days across India.
                    </p>
                    <p>
                      • Free shipping on prepaid and COD orders over ₹1,999.
                    </p>
                    <p>
                      • 7-day hassle-free return and exchange policy for unused items with original tags.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="pt-16">
            <SectionHeading
              title="You May Also Cherish"
              subtitle="Complementary handpicked ethnic creations from Allure"
              align="left"
            />
            <ProductCarousel products={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
};

