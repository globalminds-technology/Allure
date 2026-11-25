import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const FeaturedCollection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-brand-ivory overflow-hidden border-t border-b border-brand-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Content Left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Featured Editorial
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.15] text-brand-burgundy">
              Be You, Beautifully
            </h2>

            <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-sans max-w-lg">
              Discover the latest additions to your wardrobe.
            </p>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans max-w-md">
              Every creation honors the timeless poetry of Indian handlooms — curated with contemporary finesse so you can express your personal grace with confidence.
            </p>

            <div className="pt-2">
              <Button href="/collections/sarees" variant="primary" size="lg">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Large Fashion Photography Right - Image Covers The Card */}
          <div className="lg:col-span-6 relative h-[440px] sm:h-[540px] rounded-2xl overflow-hidden shadow-card border-4 border-white bg-brand-sand">
            <Image
              src="/images/banners/hero-saree-story.jpg"
              alt="Be You, Beautifully - Allure Collections"
              fill
              className="object-cover object-top sm:object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
