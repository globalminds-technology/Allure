import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  isLoading,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 tracking-wider",
    md: "text-xs sm:text-sm px-6 py-3 gap-2 tracking-widest",
    lg: "text-sm sm:text-base px-8 py-3.5 gap-2.5 tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-brand-burgundy hover:bg-brand-crimson text-white focus:ring-brand-burgundy shadow-sm hover:shadow",
    secondary:
      "bg-brand-sand text-brand-burgundy hover:bg-brand-border focus:ring-brand-burgundy",
    outline:
      "border border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white focus:ring-brand-burgundy",
    gold: "bg-brand-gold hover:bg-brand-goldDark text-white focus:ring-brand-gold shadow-sm",
    ghost:
      "bg-transparent text-brand-slate hover:text-brand-burgundy hover:bg-brand-sand/50",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  );
};

