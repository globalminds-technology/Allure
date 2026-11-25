import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const BrandStory: React.FC = () => {
  return (
    <section id="about-us" className="relative py-20 bg-gradient-to-b from-[#110407] via-[#0E0306] to-[#120508] text-[#F8F3EA] border-b border-brand-gold/20 scroll-mt-20 overflow-hidden">
      {/* Corner Botanical Floral Outline */}
      <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none opacity-15 text-brand-gold select-none -scale-x-100">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M190 10C170 30 140 45 110 40C80 35 60 15 40 10C20 5 0 25 10 50C20 75 50 85 70 80C90 75 110 55 130 65C150 75 160 105 180 120" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M195 20C175 45 155 80 140 120C125 160 100 190 70 195" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M160 40C150 60 160 90 180 95C200 100 190 60 160 40Z" stroke="currentColor" strokeWidth="1"/>
          <path d="M130 80C115 95 120 120 140 125C160 130 155 95 130 80Z" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[440px] sm:h-[520px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-brand-gold/30 group">
            <Image
              src="/images/banners/brand-story.jpg"
              alt="Find The Story That Suits Your Style - Allure Collections"
              fill
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#1C080E]/90 backdrop-blur-md rounded-lg text-center shadow-lg border border-brand-gold/30">
              <p className="text-xs uppercase font-serif tracking-widest text-brand-gold font-semibold">
                Chennai Flagship Boutique
              </p>
              <p className="text-[11px] text-[#F8F3EA]/75 mt-0.5 font-sans">
                Heritage Boulevard, Alwarpet, Chennai
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              The Allure Legacy
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F8F3EA] font-normal leading-tight">
              Honoring Heritage, Weaving Every Woman’s Grace
            </h2>
            <p className="text-sm sm:text-base text-[#F8F3EA]/80 leading-relaxed font-sans">
              Born in Chennai, Allure Collections began with a simple yet passionate vision: to make authentic Indian textiles, soft Jamdani weaves, and contemporary ethnic ensembles accessible to every woman without compromising on artisanal integrity.
            </p>
            <p className="text-sm sm:text-base text-[#F8F3EA]/80 leading-relaxed font-sans">
              From our physical boutique to homes across the globe, every saree, kurti, and co-ord in our repertoire is selected with reverence for traditional craftsmanship and tailored for the effortless grace of the modern woman.
            </p>
            <div className="pt-2 flex flex-wrap gap-3.5">
              <Button href="/#about-us" variant="primary" size="md" className="border border-brand-gold/40 hover:bg-[#853446]">
                Read Full Story
              </Button>
              <Button href="/#contact-us" variant="outline" size="md" className="border-brand-gold/50 text-brand-gold hover:bg-brand-gold/15 hover:text-white">
                Visit Chennai Store
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
