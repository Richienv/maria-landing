import React from "react";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Community in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our vibrant community events - from exclusive networking dinners in Jakarta to hands-on workshops and annual team retreats in stunning destinations like Lombok and Bandung.
          </p>
        </div>
        <div className="min-h-[500px] flex flex-col justify-center">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  );
} 