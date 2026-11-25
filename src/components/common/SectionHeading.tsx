import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: "left" | "center" | "right";
  className?: string;
  hideDecoration?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tag,
  align = "center",
  className,
  hideDecoration = false,
}) => {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "text-center mx-auto",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {tag && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-2.5 rounded-full bg-white/10 text-brand-gold border border-brand-gold/30 text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
          {tag}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F8F3EA] font-normal tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#F8F3EA]/75 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      {!hideDecoration && (
        <div
          className={cn(
            "mt-4 flex items-center gap-2",
            align === "center" && "justify-center",
            align === "left" && "justify-start",
            align === "right" && "justify-end"
          )}
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold"></span>
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </div>
      )}
    </div>
  );
};
