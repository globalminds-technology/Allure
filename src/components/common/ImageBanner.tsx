import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  align?: "left" | "center" | "right";
  height?: "sm" | "md" | "lg";
  className?: string;
}

export const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  align = "center",
  height = "md",
  className,
}) => {
  const heightClasses = {
    sm: "h-[280px] sm:h-[350px]",
    md: "h-[380px] sm:h-[480px]",
    lg: "h-[500px] sm:h-[650px]",
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("relative overflow-hidden w-full", heightClasses[height], className)}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />

      <Container className="relative h-full flex flex-col justify-center z-10">
        <div className={cn("max-w-xl text-white flex flex-col", alignClasses[align])}>
          {subtitle && (
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-goldLight font-medium mb-3">
              {subtitle}
            </span>
          )}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif leading-tight font-medium drop-shadow-sm">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-gray-200 line-clamp-3">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <div className="mt-6">
              <Button href={buttonLink} variant="gold" size="md">
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

