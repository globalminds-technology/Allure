import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

interface TypeCategory {
  title: string;
  slug: string;
  count: string;
  image: string;
}

const TYPE_CATEGORIES: TypeCategory[] = [
  {
    title: "Sarees",
    slug: "sarees",
    count: "24 Designs",
    image: "/images/collections/sarees.jpg",
  },
  {
    title: "Kurtis & Sets",
    slug: "kurtis",
    count: "32 Designs",
    image: "/images/collections/kurtis.jpg",
  },
  {
    title: "Co-ord Sets",
    slug: "coord-sets",
    count: "18 Designs",
    image: "/images/collections/coord-sets.jpg",
  },
  {
    title: "Maxi Dresses",
    slug: "maxis",
    count: "16 Designs",
    image: "/images/collections/maxis.jpg",
  },
  {
    title: "Bottom Wear",
    slug: "bottom-wear",
    count: "14 Designs",
    image: "/images/collections/bottom-wear.jpg",
  },
];

export const ShopByType: React.FC = () => {
  return (
    <section id="shop-by-type" className="relative py-14 sm:py-20 bg-gradient-to-b from-[#1E0B10] via-[#16070B] to-[#110407] text-[#F8F3EA] border-b border-brand-gold/20 scroll-mt-24 overflow-hidden">
      {/* Subtle Botanical Corner Outline */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none opacity-15 text-brand-gold select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M190 10C170 30 140 45 110 40C80 35 60 15 40 10C20 5 0 25 10 50C20 75 50 85 70 80C90 75 110 55 130 65C150 75 160 105 180 120" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M195 20C175 45 155 80 140 120C125 160 100 190 70 195" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M160 40C150 60 160 90 180 95C200 100 190 60 160 40Z" stroke="currentColor" strokeWidth="1"/>
          <path d="M130 80C115 95 120 120 140 125C160 130 155 95 130 80Z" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          tag="Wardrobe Essentials"
          title="Shop By Type"
          subtitle="Explore ethnic silhouettes crafted for all-day grace and effortless comfort"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {TYPE_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group flex flex-col bg-[#240C13]/90 p-3 sm:p-4 rounded-xl border border-brand-gold/25 hover:border-brand-gold hover:shadow-[0_14px_35px_rgba(0,0,0,0.6)] transition-all duration-300 text-center"
            >
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-3 bg-[#17050A] border border-brand-gold/30 group-hover:border-brand-gold transition-colors">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-sm sm:text-base font-normal text-[#F8F3EA] group-hover:text-brand-gold transition-colors">
                {cat.title}
              </h3>

              <span className="text-[11px] font-sans text-[#F8F3EA]/70 mt-0.5">
                {cat.count}
              </span>

              <span className="text-[11px] font-medium text-brand-gold group-hover:text-[#F8F3EA] mt-2 inline-flex items-center justify-center gap-1 transition-colors">
                View Pieces →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
