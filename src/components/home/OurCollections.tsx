"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RUNWAY_LOOKS, RunwayLook } from "@/data/banners";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Icons } from "@/components/icons/Icons";

export const OurCollections: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const { addToCart } = useCart();

  const activeLook: RunwayLook = RUNWAY_LOOKS[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % RUNWAY_LOOKS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? RUNWAY_LOOKS.length - 1 : prev - 1));
  }, []);

  // Pointer / Touch drag handling for the runway queue
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  const handleQuickAdd = () => {
    const matchedProduct = PRODUCTS.find((p) => p.slug === activeLook.productSlug);
    if (matchedProduct) {
      addToCart(matchedProduct, 1);
    } else {
      addToCart(
        {
          id: activeLook.id,
          name: activeLook.name,
          slug: activeLook.productSlug,
          description: activeLook.description,
          price: activeLook.price,
          originalPrice: activeLook.originalPrice,
          images: [activeLook.image],
          category: activeLook.category,
          collectionSlug: activeLook.collectionSlug,
          sizes: ["Standard Fit"],
          colors: [{ name: "Artisanal Weave", hex: "#702C3B" }],
          inStock: true,
        },
        1
      );
    }
  };

  return (
    <section
      id="catalog"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#2B1017] via-[#1E0B10] to-[#14060A] text-[#F8F3EA] py-10 sm:py-14 select-none border-b border-brand-gold/20 scroll-mt-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-burgundy/15 blur-[130px] pointer-events-none -z-0" />

      {/* Top-Right & Bottom-Left Floral Art Accents matching reference */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 opacity-20 pointer-events-none -z-0 rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-brand-gold">
          <path d="M0 100 C20 70 40 60 70 50 C40 40 30 20 0 0" strokeWidth="1" />
          <path d="M0 100 C30 80 50 70 80 70 C60 50 50 30 0 10" strokeWidth="0.75" />
          <path d="M10 100 C35 75 60 65 95 65" strokeWidth="0.75" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 opacity-20 pointer-events-none -z-0">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-brand-gold">
          <path d="M0 100 C20 70 40 60 70 50 C40 40 30 20 0 0" strokeWidth="1" />
          <path d="M0 100 C30 80 50 70 80 70 C60 50 50 30 0 10" strokeWidth="0.75" />
          <path d="M10 100 C35 75 60 65 95 65" strokeWidth="0.75" />
        </svg>
      </div>

      <Container>
        {/* Section Heading with Counter & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div>
            <SectionHeading
              tag="Curated Catalogue"
              title="Our Collections"
              subtitle="Explore signature silhouettes defining the Allure aesthetic — shoppable pieces direct from our runway edit"
              align="left"
              hideDecoration={true}
              className="mb-0 md:mb-0"
            />
          </div>

          {/* Runway Look Counter & Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 mb-1 md:mb-0">
            <div className="font-serif text-xs tracking-widest text-[#F8F3EA]">
              <span className="text-base sm:text-lg font-bold text-brand-gold font-serif">
                {activeLook.lookNumber}
              </span>
              <span className="text-[#F8F3EA]/50 mx-1">/</span>
              <span className="text-xs text-[#F8F3EA]/60">
                {RUNWAY_LOOKS.length.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous look"
                className="w-9 h-9 rounded-full border border-brand-gold/40 bg-white hover:bg-brand-gold text-brand-burgundy hover:text-brand-charcoal flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <Icons.ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next look"
                className="w-9 h-9 rounded-full border border-brand-gold/40 bg-white hover:bg-brand-gold text-brand-burgundy hover:text-brand-charcoal flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <Icons.ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3D ODALINE RUNWAY STAGE                                      */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pt-3 sm:pt-4">
          
          {/* LEFT: Shoppable Look Editorial Info in Lockstep (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
                  {activeLook.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-brand-gold/50" />
                <span className="text-[10px] font-sans text-brand-gold/80 tracking-wider uppercase">
                  {activeLook.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#F8F3EA] leading-snug">
                {activeLook.name}
              </h3>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#F8F3EA] font-sans">
                {formatPrice(activeLook.price)}
              </span>
              {activeLook.originalPrice && (
                <span className="text-sm text-[#F8F3EA]/50 line-through font-sans">
                  {formatPrice(activeLook.originalPrice)}
                </span>
              )}
              {activeLook.discountPercent && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                  {activeLook.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Description & Weave Specifications */}
            <p className="text-xs sm:text-sm text-[#F8F3EA]/80 leading-relaxed font-sans max-w-md line-clamp-2">
              {activeLook.description}
            </p>

            <div className="p-3.5 rounded-lg bg-[#220C12]/90 border border-brand-gold/30 text-xs space-y-2 max-w-md shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <strong className="text-brand-gold">Fabric:</strong>
                <span className="text-[#F8F3EA]/90 truncate">{activeLook.fabric}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <strong className="text-brand-gold">Artisan Finish:</strong>
                <span className="text-[#F8F3EA]/90">Pure Handloom Weave • Flagship Boutique</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                onClick={handleQuickAdd}
                variant="primary"
                size="md"
                className="bg-brand-burgundy hover:bg-[#853446] text-white border border-brand-gold/30 flex items-center gap-2 shadow-md"
              >
                <Icons.ShoppingBag className="w-4 h-4" />
                Shop This Look
              </Button>

              <Button
                href={`/collections/${activeLook.collectionSlug}`}
                variant="outline"
                size="md"
                className="border border-brand-gold/60 text-[#F8F3EA] hover:bg-brand-gold/15 hover:border-brand-gold transition-colors"
              >
                Explore Collection
              </Button>
            </div>

            {/* Drag helper hint */}
            <div className="flex items-center gap-2 text-[11px] text-[#F8F3EA]/50">
              <Icons.SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
              <span>Drag runway models or use arrows to step through pieces</span>
            </div>
          </div>

          {/* RIGHT: The 3D Runway Queue (7 cols) - Full Card Coverage */}
          <div
            className="lg:col-span-7 order-1 lg:order-2 relative h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* 3D Runway Queue Deck */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
              {RUNWAY_LOOKS.map((look, index) => {
                let distance = index - activeIndex;
                const total = RUNWAY_LOOKS.length;

                if (distance > total / 2) distance -= total;
                if (distance < -total / 2) distance += total;

                if (Math.abs(distance) > 2) return null;

                const isCurrent = distance === 0;

                const translateX = distance * 95 + (isCurrent ? dragOffset * 0.4 : 0);
                const translateZ = -Math.abs(distance) * 110;
                const rotateY = distance * -8;
                const scale = Math.max(0.75, 1 - Math.abs(distance) * 0.1);
                const opacity = isCurrent ? 1 : Math.max(0.4, 0.75 - Math.abs(distance) * 0.2);
                const zIndex = 30 - Math.abs(distance) * 10;
                const blurAmount = isCurrent ? 0 : Math.abs(distance) * 2;

                return (
                  <div
                    key={look.id}
                    onClick={() => setActiveIndex(index)}
                    className="absolute transition-all duration-600 ease-out will-change-transform"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex,
                      filter: `blur(${blurAmount}px)`,
                    }}
                  >
                    {/* Model Runway Card - Full Card Coverage */}
                    <div
                      className={`relative w-[250px] sm:w-[310px] lg:w-[340px] h-[390px] sm:h-[460px] lg:h-[490px] rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 shadow-2xl transition-all duration-500 border-2 ${
                        isCurrent
                          ? "border-brand-gold shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-2 ring-brand-gold/30"
                          : "border-brand-gold/30 hover:border-brand-gold/60"
                      }`}
                    >
                      <Image
                        src={look.image}
                        alt={look.name}
                        fill
                        priority={isCurrent}
                        sizes="(max-width: 640px) 270px, 350px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Floating Look Number Tag */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-[#1A080E]/90 backdrop-blur-md text-brand-gold border border-brand-gold/30 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                          LOOK {look.lookNumber}
                        </span>
                      </div>

                      {/* Bottom Quick Look Card Tag on Active Card */}
                      {isCurrent && (
                        <div className="absolute inset-x-3 bottom-3 z-20 bg-[#1A080E]/95 backdrop-blur-md p-3 rounded-lg border border-brand-gold/30 shadow-lg transition-all animate-fadeIn">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[10px] font-sans tracking-widest text-brand-gold font-semibold uppercase">
                                {look.category}
                              </p>
                              <p className="text-xs sm:text-sm font-serif font-medium text-[#F8F3EA] line-clamp-1">
                                {look.name}
                              </p>
                            </div>
                            <span className="text-sm font-bold text-brand-gold pl-2 shrink-0">
                              {formatPrice(look.price)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
