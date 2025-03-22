import React from "react";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Visual Inspiration Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our interactive gallery and discover visual inspirations. Drag to rotate the carousel and click on any image to view in detail.
          </p>
        </div>
        <div className="min-h-[500px] flex flex-col justify-center">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  );
} 