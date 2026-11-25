import React from "react";
import Image from "next/image";
import Link from "next/link";
import { OCCASIONS } from "@/data/occasions";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export const ShopByOccasion: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-cream">
      <Container>
        <SectionHeading
          tag="Curated Styling"
          title="Shop By Occasion"
          subtitle="Immerse in curated edits tailored for festivities, milestone moments, and everyday elegance"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occ) => (
            <Link
              key={occ.id}
              href={`/search?occasion=${encodeURIComponent(occ.queryParam)}`}
              className="group relative h-[420px] rounded-xl overflow-hidden shadow-subtle hover:shadow-card block bg-brand-sand border border-brand-border/70 flex flex-col justify-end"
            >
              {/* Image covers the card edge-to-edge */}
              <Image
                src={occ.image}
                alt={occ.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top sm:object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none transition-opacity group-hover:opacity-95" />

              <div className="relative z-10 p-6 text-white flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold font-sans mb-1">
                  Occasion Edit
                </span>
                <h3 className="text-2xl font-serif text-white group-hover:text-brand-goldLight transition-colors font-normal">
                  {occ.name}
                </h3>
                <p className="text-xs text-white/80 mt-1.5 line-clamp-2 font-sans">
                  {occ.tagline}
                </p>
                <div className="mt-3.5 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-goldLight">
                  <span>Explore Looks</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
