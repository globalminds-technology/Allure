import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Our Story & Heritage
          </span>
          <h1 className="mt-2 text-3xl sm:text-5xl font-serif text-brand-burgundy font-normal leading-tight">
            Crafting Elegance, Celebrating the Art of Indian Weaves
          </h1>
          <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
            Allure Collections was founded in Chennai with a profound respect for India’s textile mastery. We curate fine Jamdani weaves, opulent silks, breathable cotton kurtis, and contemporary co-ords that empower women to embrace their authentic beauty.
          </p>
        </div>

        {/* Image Feature */}
        <div className="relative h-[340px] sm:h-[480px] rounded-lg overflow-hidden mb-16 shadow-card">
          <Image
            src="/images/banners/hero-banner.jpg"
            alt="Allure Collections Craftsmanship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
            <p className="font-serif text-lg sm:text-2xl font-normal">
              “Every weave tells a story of patience, art, and timeless womanhood.”
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded border border-brand-border/60 text-center shadow-2xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sand flex items-center justify-center text-brand-burgundy font-serif font-bold text-lg mb-4">
              01
            </div>
            <h3 className="font-serif text-xl text-brand-burgundy mb-2">
              Authentic Handlooms
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              We collaborate directly with master artisans across Bengal, Gujarat, and South India to preserve traditional weaving techniques like Jamdani, Patola, and fine hand-block printing.
            </p>
          </div>

          <div className="bg-white p-8 rounded border border-brand-border/60 text-center shadow-2xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sand flex items-center justify-center text-brand-burgundy font-serif font-bold text-lg mb-4">
              02
            </div>
            <h3 className="font-serif text-xl text-brand-burgundy mb-2">
              Modern Silhouettes
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Indian ethnic aesthetics harmonized with modern everyday functionality. Breathable linens, chic 2-piece coordinates, umbrella suits, and comfort shapewear.
            </p>
          </div>

          <div className="bg-white p-8 rounded border border-brand-border/60 text-center shadow-2xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-sand flex items-center justify-center text-brand-burgundy font-serif font-bold text-lg mb-4">
              03
            </div>
            <h3 className="font-serif text-xl text-brand-burgundy mb-2">
              Chennai Boutique Experience
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Our flagship destination in Chennai offers personalized drape consultations, bespoke styling, and tactile fabric appreciation.
            </p>
          </div>
        </div>

        {/* Flagship Store Spotlight */}
        <div className="bg-brand-burgundy text-white rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-medium">
                Visit Us in Chennai
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif mt-2 font-normal">
                Heritage Flagship Boutique
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
                Located on the lively corridor of Chennai, our store offers an intimate sanctuary to touch every fabric, try different drapes, and discover pieces tailored to your personal expression.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/contact" variant="gold" size="md">
                  Get Directions & Hours
                </Button>
                <Button
                  href="/collections/sarees"
                  variant="outline"
                  size="md"
                  className="border-white text-white hover:bg-white hover:text-brand-burgundy"
                >
                  Shop Online
                </Button>
              </div>
            </div>

            <div className="relative h-[280px] sm:h-[350px] rounded overflow-hidden border-2 border-brand-gold/40">
              <Image
                src="/images/banners/promotional-banner.jpg"
                alt="Allure Store"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
