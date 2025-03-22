"use client"

import { cn } from "@/lib/utils"
import { useMotionValue, useMotionTemplate, motion } from "framer-motion"
import { MouseEvent, useEffect, useState } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const [isHovering, setIsHovering] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const spotlightSize = 300
  const spotlightColor = fill

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor} 0%, transparent 65%)`

  // Add automatic movement if not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        mouseX.set(x)
        mouseY.set(y)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovering, mouseX, mouseY])

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-soft-light transition-opacity duration-500",
        className
      )}
      style={{ background }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    />
  )
} 