'use client'

import React from "react";
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
 
export function SplineSceneBasic() {
  return (
    <div className="w-full bg-black">
      <Card className="w-full mx-auto h-[500px] md:h-[600px] lg:h-[700px] bg-black relative overflow-hidden border-0 shadow-none">
        {/* Background enhancement */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/5 via-transparent to-blue-950/5"></div>
        
        <Spotlight
          className="-top-40 left-0 md:left-1/4 md:-top-20"
          fill="white"
        />
        
        <div className="flex flex-col md:flex-row h-full bg-black">
          {/* Left content with container for text width control */}
          <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center bg-black">
            <div className="max-w-3xl ml-auto mr-0 md:mr-0 lg:ml-auto xl:mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Vision & Innovation
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
                Our elite team leverages cutting-edge financial strategies and innovative systems that put you ahead of 99% of people. Experience the future of wealth building today.
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-black">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
} 