"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

interface MentoringSectionProps {
  sectionNumber?: string;
  gradientTitle?: string;
  titleGradient?: string;
  mainHeading?: string;
  subHeading?: string;
  images?: {
    src: string;
    alt: string;
  }[];
  buttonText?: string;
  className?: string;
}

function MentoringSection({
  sectionNumber = "04.",
  gradientTitle = "Private Mentoring",
  titleGradient = "from-purple-500 via-blue-500 to-cyan-400",
  mainHeading = "Akses Langsung Ke Para Founder Untuk Main Ke Kantor Kita",
  subHeading = "untuk private mentoring dengan komunitas.",
  images = [
    { 
      src: "/images/mentoring-session-1.jpg", 
      alt: "Private mentoring session with founders" 
    },
    { 
      src: "/images/mentoring-session-2.jpg", 
      alt: "Team collaboration in a meeting room" 
    },
    { 
      src: "/images/mentoring-session-3.jpg", 
      alt: "Product discussion with mentors" 
    }
  ],
  buttonText = "VALUE, 17JT PER TAHUN",
  className,
}: MentoringSectionProps) {
  return (
    <section className={cn("w-full bg-[#030303] py-16 lg:py-24", className)}>
      {/* Section header with gradient title */}
      <div className="container mx-auto px-4 md:px-6 mb-10 lg:mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="inline-flex items-baseline gap-2 md:gap-4 mb-6">
            <span className="text-2xl md:text-3xl font-medium text-neutral-400">{sectionNumber}</span>
            <span className={cn("text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r", titleGradient)}>
              {gradientTitle}
            </span>
          </h2>
          
          <div className="max-w-4xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white"
            >
              {mainHeading}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-neutral-400"
            >
              {subHeading}
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Mentoring session images - 3 in a row */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mb-10 overflow-hidden relative"
      >
        <div className="flex flex-col md:flex-row w-full h-[300px] sm:h-[350px] md:h-[450px]">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative flex-1 h-full overflow-hidden"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                priority={index === 0}
                quality={90}
                onError={(e) => console.error(`Image ${index} failed to load:`, e)}
              />
            </div>
          ))}
        </div>
        
        {/* Unified gradient overlay for all images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/20" />
          {/* Subtle side edges for better blending */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#030303]/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#030303]/30 to-transparent" />
        </div>
        
        {/* Add a semi-transparent overlay logo/watermark centered across all images */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white/10 text-8xl font-bold">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 9.5L12 17L20 9.5L12 2Z" fill="currentColor" />
              <path d="M12 17V22M4 9.5H2M22 9.5H20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </motion.div>
      
      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <GradientButton className="uppercase tracking-wider">
          {buttonText}
        </GradientButton>
      </motion.div>
    </section>
  );
}

export { MentoringSection } 