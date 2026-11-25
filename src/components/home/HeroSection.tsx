"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Icons } from "@/components/icons/Icons";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(heroRef, { margin: "0px 0px -100px 0px" });

  const [isMuted, setIsMuted] = useState(true);

  // Play / pause when in view
  useEffect(() => {
    const video = videoRef.current;
    if (isInView) {
      if (video) {
        video.play().catch(() => {});
      }
    } else {
      if (video) video.pause();
    }
  }, [isInView]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[88vh] bg-[#0C0507] overflow-hidden select-none scroll-mt-24 flex items-center"
    >
      {/* 1. Full-Width 16:9 Cinematic Video Hero Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/output-landscape.mp4"
          poster="/videos/output-landscape-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft edge blend gradient on the left for maximum text readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[55%] lg:w-[48%] bg-gradient-to-r from-[#0C0507]/95 via-[#0C0507]/75 to-transparent z-[1]" />
        {/* Top & bottom subtle vignetting */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C0507]/80 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0507]/80 to-transparent z-[1]" />
      </div>

      {/* 2. Bottom-Left Luxury Floral Botanical Accent matching reference */}
      <div className="absolute bottom-0 left-0 w-44 sm:w-64 h-44 sm:h-64 opacity-30 pointer-events-none z-[1] text-brand-gold select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Peony / Botanical Petals */}
          <path d="M10 190C25 165 45 155 65 160C85 165 95 180 115 175C135 170 145 145 140 125C135 105 110 95 90 100C70 105 55 125 35 120C15 115 5 95 10 70C15 45 35 30 55 35C75 40 85 60 105 65C125 70 145 55 165 65C185 75 195 105 180 130" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M40 170C55 140 75 130 95 140C115 150 120 175 140 180" stroke="currentColor" strokeWidth="1" />
          <path d="M60 130C75 110 95 115 105 130C115 145 105 165 90 165C75 165 65 150 60 130Z" stroke="currentColor" strokeWidth="1.1" />
          <path d="M25 150C15 135 20 115 35 110C50 105 60 120 55 135C50 150 35 155 25 150Z" stroke="currentColor" strokeWidth="1" />
          {/* Leaves & Fronds */}
          <path d="M15 110C5 90 10 70 25 65C40 60 50 75 45 95C40 115 25 125 15 110Z" stroke="currentColor" strokeWidth="1" />
          <path d="M20 85L35 75" stroke="currentColor" strokeWidth="0.8" />
          <path d="M75 100C85 80 105 75 120 85C135 95 130 115 115 120C100 125 80 115 75 100Z" stroke="currentColor" strokeWidth="1" />
          <path d="M95 90L108 100" stroke="currentColor" strokeWidth="0.8" />
          <path d="M110 160C130 155 150 165 155 180C160 195 145 205 125 200" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Hero Text Content Overlay strictly on the Left Side matching reference image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20 flex items-center">
        <motion.div
          className="w-full lg:max-w-lg xl:max-w-xl text-left space-y-4 sm:space-y-5"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Centered Lotus Emblem & Subtitle with Horizontal Accent Rules */}
          <div className="inline-flex flex-col items-center">
            <svg
              className="w-8 h-8 text-brand-gold mb-2"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <path d="M16 4C17.8 8.5 19 12.5 16 16.5C13 12.5 14.2 8.5 16 4Z" />
              <path d="M16 16.5C13 14.5 9 12 8 8C11 7.5 14 10.5 16 16.5Z" />
              <path d="M16 16.5C19 14.5 23 12 24 8C21 7.5 18 10.5 16 16.5Z" />
              <path d="M16 16.5C11.5 16.5 7.5 14.5 5 12.5C8 10.5 12 13.5 16 16.5Z" />
              <path d="M16 16.5C20.5 16.5 24.5 14.5 27 12.5C24 10.5 20 13.5 16 16.5Z" />
              <path d="M9.5 19.5C12.5 21 19.5 21 22.5 19.5" strokeLinecap="round" />
            </svg>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 sm:w-12 bg-brand-gold/60" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-brand-gold uppercase font-sans">
                The Art of Timeless Elegance
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-brand-gold/60" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[60px] font-serif text-[#F8F3EA] font-normal leading-[1.12] tracking-tight">
            Elegance That<br />
            Speaks Through<br />
            Tradition.
          </h1>

          {/* Decorative Gold Line with Diamond */}
          <div className="flex items-center gap-2.5 pt-0.5 pb-0.5">
            <span className="h-[1px] w-14 sm:w-20 bg-brand-gold/50" />
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold shrink-0" />
            <span className="h-[1px] w-14 sm:w-20 bg-brand-gold/50" />
          </div>

          {/* Supporting Description in Italic Serif */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#F8F3EA]/90 font-serif italic leading-relaxed max-w-lg font-normal">
            Celebrate the beauty of Indian craftsmanship with exquisite ethnic wear, thoughtfully curated for every special moment.
          </p>

          {/* Action CTAs: Explore Collection & Discover Amura */}
          <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="#catalog"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-sm bg-[#781F31] hover:bg-[#8F273C] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 group"
            >
              Explore Collection
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about-us"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-sm border border-brand-gold hover:bg-brand-gold/15 text-white hover:text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95"
            >
              Discover Amura
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 5. Floating Sound Toggle Button (Bottom-Right) */}
      <button
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-burgundy backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all shadow-xl active:scale-95 group"
      >
        {isMuted ? (
          <Icons.VolumeX className="w-4 h-4 text-white/90 group-hover:text-white" />
        ) : (
          <Icons.Volume2 className="w-4 h-4 text-brand-gold group-hover:text-white" />
        )}
      </button>
    </section>
  );
};
