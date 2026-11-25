import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "lg",
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

