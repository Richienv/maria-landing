"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
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
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Track scroll progress for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // @ts-ignore - getBoundingClientRect exists on RefObject
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress percentage
      const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle animation based on scroll visibility
  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      
      // Add class for additional CSS transitions
      if (sectionRef.current) {
        // @ts-ignore - classList exists on RefObject
        sectionRef.current.classList.add('snap-section-entering');
      }
      
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      controls.start("hidden");
      
      // Remove class when section leaves viewport
      if (sectionRef.current) {
        // @ts-ignore - classList exists on RefObject
        sectionRef.current.classList.remove('snap-section-entering');
      }
      
      setHasAnimated(false);
    }
  }, [isInView, controls, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.15,
        when: "beforeChildren",
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Enhanced button animation with spring physics
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1.5,
        delay: 0.4
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 25px 0 rgba(129, 140, 248, 0.5)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0 0 15px 0 rgba(129, 140, 248, 0.4)",
      transition: { duration: 0.15 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={cn(
        "w-full bg-[#030303] min-h-screen flex flex-col justify-center items-center py-16 lg:py-24",
        "perspective-container", // Add perspective for depth effect
        className
      )}
      style={{
        // Subtle background shift based on scroll progress
        backgroundImage: `radial-gradient(circle at ${50 + (scrollProgress * 10)}% ${50 - (scrollProgress * 20)}%, #050505 0%, #030303 70%)`,
      }}
    >
      {/* Section header with gradient title */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 md:px-6 mb-10 lg:mb-14"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="inline-flex items-baseline gap-2 md:gap-4 mb-6"
            style={{
              // Subtle parallax effect based on scroll
              transform: `translateY(${scrollProgress * -15}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <motion.span 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-neutral-400"
            >
              {sectionNumber}
            </motion.span>
            <motion.span 
              variants={itemVariants}
              className={cn("text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r", titleGradient)}
              style={{
                // Make gradient shift slightly with scroll
                backgroundSize: '200% 200%',
                backgroundPosition: `${scrollProgress * 100}% 50%`,
              }}
            >
              {gradientTitle}
            </motion.span>
          </h2>
          
          <div className="max-w-4xl">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white magnetic-hover"
            >
              {mainHeading}
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-400"
            >
              {subHeading}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Mentoring session images - 3 in a row */}
      <motion.div 
        variants={imageContainerVariants}
        initial="hidden"
        animate={controls}
        className="w-full mb-12 overflow-hidden relative"
        style={{
          // Scale images based on scroll for parallax effect
          transform: `scale(${1 + (scrollProgress * 0.05)})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="flex flex-col md:flex-row w-full h-[300px] sm:h-[350px] md:h-[450px]">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={imageVariants}
              className="relative flex-1 h-full overflow-hidden"
              style={{ 
                transformOrigin: index === 0 ? 'right center' : index === 2 ? 'left center' : 'center',
                // Add staggered parallax effect
                transform: `translateY(${scrollProgress * -20 * (index + 1)}px)`,
                transition: 'transform 0.15s ease-out'
              }}
              onHoverStart={() => setHoveredImageIndex(index)}
              onHoverEnd={() => setHoveredImageIndex(null)}
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={cn(
                  "object-cover object-center transition-transform duration-700",
                  hoveredImageIndex === index ? "scale-105" : "scale-100"
                )}
                priority={index === 0}
                quality={90}
                onError={(e) => console.error(`Image ${index} failed to load:`, e)}
              />
              
              {/* Enhanced image hover overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"
                animate={{ 
                  opacity: hoveredImageIndex === index ? 0.3 : 0
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Unified gradient overlay for all images */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/20"
            style={{
              opacity: 0.8 + (scrollProgress * 0.2),
              transition: 'opacity 0.3s ease-out'
            }}
          />
          {/* Subtle side edges for better blending */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#030303]/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#030303]/30 to-transparent" />
        </div>
        
        {/* Add a semi-transparent overlay logo/watermark centered across all images */}
        <motion.div 
          variants={itemVariants}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [0.95, 1, 0.95]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        >
          <div className="text-white/10 text-8xl font-bold">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 9.5L12 17L20 9.5L12 2Z" fill="currentColor" />
              <path d="M12 17V22M4 9.5H2M22 9.5H20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
      
      {/* CTA Button with enhanced animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex justify-center"
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="magnetic-hover" // Add magnetic effect from CSS
        >
          <GradientButton className="uppercase tracking-wider">
            {buttonText}
          </GradientButton>
        </motion.div>
      </motion.div>
      
      {/* Subtle scroll indicator that appears when section is fully in view */}
      <AnimatePresence>
        {isInView && hasAnimated && (
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div 
              className="flex flex-col items-center text-xs text-white/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
            >
              <span className="mb-1 text-center opacity-60">Scroll</span>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L10 9L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export { MentoringSection } 