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

export default function Home() {
  return (
    <main className="bg-[#030303] text-white">
      <section className="min-h-screen">
        <DemoHeroGeometric />
      </section>
      <section className="dark feature-section-dark border-t border-white/5">
        <FeatureStepsDemo />
      </section>
      <section className="border-t border-white/5 dark bg-black py-16">
        <ThreeDPhotoCarouselDemo />
      </section>
      <section className="border-t border-white/5 dark bg-gradient-to-b from-black to-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <SplineSceneBasic />
        </div>
      </section>
      <section className="border-t border-white/5 dark bg-gradient-to-b from-zinc-900 to-zinc-800 py-16">
        <BentoGridDemo />
      </section>
      <section className="border-t border-white/5">
        <MentoringSectionDemo />
      </section>
      <section className="border-t border-white/5">
        <WorkshopSectionDemo />
      </section>
      <section className="border-t border-white/5">
        <CommunitySectionDemo />
      </section>
      <section className="border-t border-white/5 dark bg-gradient-to-b from-zinc-900 to-black py-8">
        <LogoCarouselDemo />
      </section>
      <section className="border-t border-white/5">
        <DialogDemo />
      </section>
    </main>
  );
}
