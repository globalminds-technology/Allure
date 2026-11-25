import React from "react";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/common/Button";

export const NewArrivals: React.FC = () => {
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <section className="py-16 sm:py-24 bg-brand-cream border-t border-b border-brand-border/60">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              Fresh Off The Loom
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-brand-burgundy font-normal mt-1">
              New Arrivals
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href="/collections/new-arrivals" variant="outline" size="sm">
              View All
            </Button>
          </div>
        </div>

        {/* 4-column desktop, 2-column tablet, 2-column mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
