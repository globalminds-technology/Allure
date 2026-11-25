import React from "react";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { ProductCarousel } from "@/components/products/ProductCarousel";
import { Button } from "@/components/common/Button";

export const BestSellers: React.FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section className="py-16 sm:py-24 bg-brand-cream border-t border-brand-border/60">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Customer Cherished
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-brand-burgundy font-normal mt-1">
              Allure Best Sellers
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href="/collections/best-sellers" variant="outline" size="sm">
              View All Best Sellers
            </Button>
          </div>
        </div>

        <ProductCarousel products={bestSellers} />
      </Container>
    </section>
  );
};
