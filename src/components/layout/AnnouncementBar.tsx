"use client";

import React, { useState, useEffect } from "react";
import { ANNOUNCEMENT_MESSAGES } from "@/lib/constants";
import { Icons } from "@/components/icons/Icons";

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ANNOUNCEMENT_MESSAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
  };

  return (
    <div className="bg-brand-burgundy text-brand-goldLight text-[11px] sm:text-xs py-2 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="text-brand-goldLight/70 hover:text-white transition-colors p-1"
        >
          <Icons.ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 text-center font-medium tracking-widest overflow-hidden whitespace-nowrap text-ellipsis px-2">
          <span className="inline-block transition-transform duration-500">
            {ANNOUNCEMENT_MESSAGES[currentIndex]}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="text-brand-goldLight/70 hover:text-white transition-colors p-1"
        >
          <Icons.ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

