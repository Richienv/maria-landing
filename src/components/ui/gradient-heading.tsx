"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  as?: React.ElementType;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export function GradientHeading({
  children,
  size = "lg",
  as: Component = "h2",
  variant = "primary",
  className,
}: GradientHeadingProps) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
    xxl: "text-5xl md:text-6xl lg:text-7xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400",
    secondary: "bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-400",
    tertiary: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-400",
  };

  return (
    <Component
      className={cn(
        "font-bold tracking-tight bg-clip-text text-transparent",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  );
} 