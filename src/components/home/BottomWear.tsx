import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/common/Button";

export const BottomWear: React.FC = () => {
  const bottomWearProducts = PRODUCTS.filter((p) => p.collectionSlug === "bottom-wear");

  return (
    <section className="py-16 sm:py-24 bg-brand-cream">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              The Perfect Foundation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-brand-burgundy font-normal mt-1">
              Bottom Wear & Shapewear
            </h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href="/collections/bottom-wear" variant="outline" size="sm">
              View All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Products Left */}
          <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {bottomWearProducts.slice(0, 2).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          {/* Lifestyle Banner Right - Image Covers Card Completely */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative h-[440px] sm:h-[520px] rounded-xl overflow-hidden shadow-card bg-brand-sand border border-brand-border/70 flex flex-col justify-end group">
            <Image
              src="/images/collections/bottom-wear.jpg"
              alt="Bottom Wear Essentials"
              fill
              className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity group-hover:opacity-95" />

            <div className="relative z-10 p-7 text-white">
              <span className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold">
                Comfort Fit
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif mt-1.5 font-normal">
                Saree Shapewear & Pants
              </h3>
              <p className="text-xs text-white/80 mt-2.5 leading-relaxed font-sans max-w-sm">
                Seamless microfiber saree shapewear for flawless drapes alongside tailored cotton-spandex cigarette pants.
              </p>
              <div className="mt-5">
                <Button href="/collections/bottom-wear" variant="gold" size="md">
                  Shop Bottom Wear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
