import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
        "grid w-full auto-rows-[26rem] grid-cols-1 md:grid-cols-2 gap-8 md:gap-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  subtitle,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
  subtitle?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-10",
      // dark styles with subtle glow
      "transform-gpu bg-[#0c0c0c] dark:border-none",
      "shadow-[0_0_20px_0_rgba(0,80,255,0.05)]",
      // Border gradient
      "after:absolute after:inset-0 after:rounded-2xl after:p-px after:bg-gradient-to-br after:from-neutral-800 after:via-transparent after:to-neutral-800 after:opacity-40",
      // Bottom corner glow effect - blue/metal
      "before:absolute before:bottom-0 before:right-0 before:h-48 before:w-48 before:bg-gradient-to-br before:from-transparent before:via-blue-900/10 before:to-blue-500/20 before:rounded-tl-[120px] before:blur-xl before:opacity-70",
      className,
    )}
  >
    {/* Top content section */}
    <div className="z-10 flex flex-col gap-2">
      <h3 className="text-3xl leading-tight font-bold text-white tracking-tight">
        {name}
      </h3>
      {subtitle && (
        <p className="text-xl text-neutral-400 mb-1">{subtitle}</p>
      )}
      <p className="text-lg font-normal text-neutral-400/80 max-w-xs mt-2">{description}</p>
    </div>

    {/* Learn more link */}
    <div className="z-10 mt-4">
      <Button 
        variant="link" 
        asChild 
        size="sm" 
        className="p-0 text-blue-400 hover:text-blue-300 font-medium"
      >
        <a href={href} className="flex items-center gap-2 text-base">
          {cta || "Learn more"}
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </Button>
    </div>

    {/* Background image positioned in bottom right */}
    <div className="absolute bottom-0 right-0 w-52 h-52 overflow-hidden flex items-end justify-end">
      {background}
    </div>

    {/* Subtle hover effect overlay */}
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-blue-950/5" />
  </div>
);

export { BentoCard, BentoGrid }; 