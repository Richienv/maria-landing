"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button component

interface MentoringSectionProps {
  sectionNumber?: string;
  gradientTitle?: string;
  mainHeading?: string;
  subHeading?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  className?: string;
}

function MentoringSection({
  sectionNumber = "04.",
  gradientTitle = "Private Mentoring",
  mainHeading = "Akses Langsung Ke Para Founder Untuk Main Ke Kantor Kita",
  subHeading = "untuk private mentoring dengan komunitas.",
  imageSrc = "/images/mentoring-session.jpg", // Update this path to match your project structure
  imageAlt = "Private mentoring session with founders",
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
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
              {gradientTitle}
            </span>
          </h2>
          
          <div className="max-w-4xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white"
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
      
      {/* Mentoring session image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-10 lg:mb-14 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={95}
            onError={(e) => console.error("Image failed to load:", e)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/20 pointer-events-none" />
        
        {/* Add a semi-transparent overlay logo/watermark */}
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
        <Button 
          size="lg"
          className="bg-[#4CBB17] hover:bg-[#3da00e] transition-colors px-10 py-6 rounded-md font-medium text-white uppercase tracking-wider text-sm md:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all"
        >
          {buttonText}
        </Button>
      </motion.div>
    </section>
  );
}

export { MentoringSection } 