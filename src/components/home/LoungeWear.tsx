import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/common/Button";

export const LoungeWear: React.FC = () => {
  const loungeProducts = PRODUCTS.filter((p) => p.collectionSlug === "lounge-wear");

  return (
    <section className="py-16 sm:py-24 bg-brand-ivory/60 border-t border-b border-brand-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lifestyle Banner Left - Image Covers Card Completely */}
          <div className="lg:col-span-5 relative h-[440px] sm:h-[520px] rounded-xl overflow-hidden shadow-card bg-brand-sand border border-brand-border/70 flex flex-col justify-end group">
            <Image
              src="/images/products/lounge-wear/lw-1.jpg"
              alt="Lounge & Relaxed Wear"
              fill
              className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity group-hover:opacity-95" />
            
            <div className="relative z-10 p-7 text-white">
              <span className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold">
                Pure Cotton Ease
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif mt-1.5 font-normal">
                Lounge & Sleep Wear
              </h3>
              <p className="text-xs text-white/80 mt-2.5 leading-relaxed font-sans max-w-sm">
                Breathable hand-blocked cotton kaftans and night suits designed for restorative comfort and leisurely weekends.
              </p>
              <div className="mt-5">
                <Button href="/collections/lounge-wear" variant="gold" size="md">
                  Shop Lounge Wear
                </Button>
              </div>
            </div>
          </div>

          {/* Product Items Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {loungeProducts.slice(0, 2).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
