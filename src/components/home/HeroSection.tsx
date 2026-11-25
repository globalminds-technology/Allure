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

      {/* 2. Bottom-Left Luxury Floral Botanical Accent */}
      <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 opacity-15 pointer-events-none z-[1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-brand-gold">
          <path d="M0 100 C20 70 40 60 70 50 C40 40 30 20 0 0" strokeWidth="1" />
          <path d="M0 100 C30 80 50 70 80 70 C60 50 50 30 0 10" strokeWidth="0.75" />
          <path d="M10 100 C35 75 60 65 95 65" strokeWidth="0.75" />
        </svg>
      </div>

      {/* 4. Hero Text Content Overlay strictly on the Left Side (No Overlap with Video) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 flex items-center">
        <motion.div
          className="w-full lg:max-w-lg xl:max-w-xl text-left space-y-4 sm:space-y-5"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top Golden Lotus Icon */}
          <div className="inline-block">
            <svg
              className="w-8 h-8 text-brand-gold"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 4C18 9 22 13 27 15C23.5 17 19.5 16 16 13C12.5 16 8.5 17 5 15C10 13 14 9 16 4Z" />
              <path d="M16 13C18.5 17 23 20 28 21C24 23 19.5 22 16 19C12.5 22 8 23 4 21C9 20 13.5 17 16 13Z" />
              <path d="M7 23C10.5 24 13.5 24 16 23C18.5 24 21.5 24 25 23" />
            </svg>
          </div>

          {/* Subtitle with Horizontal Accent Rules */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 sm:w-10 bg-brand-gold/60" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
              The Art of Timeless Elegance
            </span>
            <span className="h-[1px] w-6 sm:w-10 bg-brand-gold/60" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-serif text-[#F8F3EA] font-normal leading-[1.12] tracking-tight">
            Elegance That<br />
            Speaks Through<br />
            Tradition.
          </h1>

          {/* Decorative Gold Line with Diamond */}
          <div className="flex items-center gap-2 pt-0.5 pb-0.5">
            <span className="h-[1px] w-12 bg-brand-gold/50" />
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold" />
            <span className="h-[1px] w-12 bg-brand-gold/50" />
          </div>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base text-[#F8F3EA]/85 font-sans leading-relaxed max-w-md font-light">
            Celebrate the beauty of Indian craftsmanship with exquisite ethnic wear, thoughtfully curated for every special moment.
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#catalog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-burgundy hover:bg-[#853446] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-lg active:scale-95 group"
            >
              Explore Collection
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-brand-gold/80 hover:border-brand-gold hover:bg-brand-gold/10 text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all active:scale-95"
            >
              Discover Allure
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
