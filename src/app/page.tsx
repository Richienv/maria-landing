import React from "react";
import { DemoHeroGeometric } from "@/components/ui/demo-hero-geometric";
import { FeatureStepsDemo } from "@/components/ui/feature-steps-demo";
import { ThreeDPhotoCarouselDemo } from "@/components/ui/three-d-photo-carousel-demo";
import { SplineSceneBasic } from "@/components/ui/spline-scene-demo";
import { BentoGridDemo } from "@/components/ui/bento-grid-demo";
import { MentoringSectionDemo } from "@/components/ui/mentoring-section-demo";
import { WorkshopSectionDemo } from "@/components/ui/workshop-section-demo";
import { CommunitySectionDemo } from "@/components/ui/community-section-demo";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";
import { DialogDemo } from "@/components/ui/dialog-demo";
import { BentoDemo } from "@/components/ui/bento-demo";
import { ScrollContainer } from "@/components/ui/scroll-container";
import { HeroSectionDemo } from "@/components/ui/hero-section-demo";

export default function Home() {
  return (
    <ScrollContainer>
      {/* New Hero Section at the top */}
      <section 
        className="min-h-screen snap-section" 
      >
        <HeroSectionDemo />
      </section>
      
      {/* Original Hero Section */}
      <section 
        className="min-h-screen snap-section" 
      >
        <DemoHeroGeometric />
      </section>
      
      {/* New Bento Grid Section */}
      <section 
        className="border-t border-white/5 min-h-screen snap-section" 
      >
        <BentoDemo />
      </section>
      
      <section 
        className="dark feature-section-dark border-t border-white/5 min-h-screen snap-section" 
      >
        <FeatureStepsDemo />
      </section>
      <section 
        className="border-t border-white/5 dark bg-black py-16 min-h-screen snap-section" 
      >
        <ThreeDPhotoCarouselDemo />
      </section>
      <section 
        className="border-t border-white/5 dark bg-gradient-to-b from-black to-zinc-900 py-16 min-h-screen snap-section" 
      >
        <div className="container mx-auto px-4">
          <SplineSceneBasic />
        </div>
      </section>
      <section 
        className="border-t border-white/5 dark bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 min-h-screen snap-section" 
      >
        <BentoGridDemo />
      </section>
      <section 
        className="border-t border-white/5 min-h-screen snap-section" 
      >
        <MentoringSectionDemo />
      </section>
      <section 
        className="border-t border-white/5 min-h-screen snap-section" 
      >
        <WorkshopSectionDemo />
      </section>
      <section 
        className="border-t border-white/5 min-h-screen snap-section" 
      >
        <CommunitySectionDemo />
      </section>
      <section 
        className="border-t border-white/5 dark bg-gradient-to-b from-zinc-900 to-black py-8 min-h-screen snap-section" 
      >
        <LogoCarouselDemo />
      </section>
      <section 
        className="border-t border-white/5 min-h-screen snap-section" 
      >
        <DialogDemo />
      </section>
    </ScrollContainer>
  );
}
