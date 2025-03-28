"use client";

import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[26rem] md:auto-rows-[22rem] grid-cols-1 md:grid-cols-4 gap-8 md:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  }
};

const glowVariants = {
  initial: { 
    opacity: 0.7,
    width: "48%", 
    height: "48%",
    filter: "blur(30px)",
  },
  hover: { 
    opacity: 0.9,
    width: "60%", 
    height: "60%",
    filter: "blur(20px)",
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const contentVariants = {
  initial: {},
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  subtitle,
  index = 0,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
  subtitle?: string;
  index?: number;
}) => {
  // Calculate delay based on index
  const delayValue = 0.1 * index;
  
  return (
    <motion.div
      key={name}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      // Apply delay here instead of in the variant function
      transition={{ delay: delayValue }}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-10",
        // dark styles with subtle glow
        "transform-gpu bg-[#0c0c0c] dark:border-none",
        "shadow-[0_0_20px_0_rgba(0,80,255,0.05)]",
        // Border gradient
        "after:absolute after:inset-0 after:rounded-2xl after:p-px after:bg-gradient-to-br after:from-neutral-800 after:via-transparent after:to-neutral-800 after:opacity-40",
        className,
      )}
    >
      {/* Dynamic background glow */}
      <motion.div
        className="absolute bottom-0 right-0 bg-gradient-to-br from-transparent via-blue-900/10 to-blue-500/20 rounded-tl-[120px] z-0"
        variants={glowVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      />

      {/* Top content section */}
      <motion.div 
        className="z-10 flex flex-col gap-2"
        variants={contentVariants}
      >
        <h3 className="text-3xl leading-tight font-bold text-white tracking-tight">
          {name}
        </h3>
        {subtitle && (
          <p className="text-xl text-neutral-400 mb-1">{subtitle}</p>
        )}
        <p className="text-lg font-normal text-neutral-400/80 max-w-xs mt-2">{description}</p>
      </motion.div>

      {/* Learn more link */}
      <motion.div 
        className="z-10 mt-4"
        variants={contentVariants}
      >
        <Button 
          variant="link" 
          asChild 
          size="sm" 
          className="p-0 text-blue-400 hover:text-blue-300 font-medium"
        >
          <a href={href} className="flex items-center gap-2 text-base">
            {cta || "Learn more"}
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </motion.div>
          </a>
        </Button>
      </motion.div>

      {/* Background image positioned in bottom right */}
      <motion.div 
        className="absolute bottom-0 right-0 w-52 h-52 overflow-hidden flex items-end justify-end z-5"
        initial={{ scale: 0.9, opacity: 0.9 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {background}
      </motion.div>

      {/* Subtle hover effect overlay */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-blue-950/5" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid }; 