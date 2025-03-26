import { cn } from "@/lib/utils"
import React from "react"

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  variant?: "default" | "secondary"
}

export function GradientHeading({
  children,
  as: Component = "h2",
  size = "lg",
  variant = "default",
  className,
  ...props
}: GradientHeadingProps) {
  const sizeClasses = {
    xs: "text-sm sm:text-base md:text-lg",
    sm: "text-base sm:text-lg md:text-xl",
    md: "text-lg sm:text-xl md:text-2xl",
    lg: "text-xl sm:text-2xl md:text-3xl",
    xl: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    xxl: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  }

  const variantClasses = {
    default: "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400",
    secondary: "bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500",
  }

  return (
    <Component
      className={cn(
        "font-bold tracking-tight",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
} 