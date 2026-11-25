import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { OurCollections } from "@/components/home/OurCollections";
import { ShopByType } from "@/components/home/ShopByType";
import { BrandStory } from "@/components/home/BrandStory";
import { ContactSection } from "@/components/home/ContactSection";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <div>
      {/* 1. HOME: Hero Runway Lookbook Stage */}
      <HeroSection />

      {/* 2. CATALOG: Curated Collections Showcase */}
      <OurCollections />

      {/* 3. SHOP BY TYPE: Wardrobe Essentials by Silhouette */}
      <ShopByType />

      {/* 4. ABOUT US: Brand Legacy & Heritage Story */}
      <BrandStory />

      {/* 5. CONTACT US: Boutique Visit, Concierge & Inquiry */}
      <ContactSection />

      {/* Newsletter Signup */}
      <Newsletter />
    </div>
  );
}
