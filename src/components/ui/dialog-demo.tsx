"use client";

import React from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export function DialogDemo() {
  return (
    <div className="py-24 w-full bg-black relative overflow-hidden">
      {/* Main Section with Blue Gradient Container */}
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative gradient-button gradient-button-variant rounded-2xl p-0.5 overflow-hidden"
        >
          <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-10 md:p-16 overflow-hidden">
            <Spotlight
              className="top-0 left-[20%] md:left-[40%]"
              fill="#0141ff"
            />
            
            <div className="relative z-10">
              <div className="max-w-xl mx-auto text-center mb-10">
                <GradientHeading variant="default" size="xl" className="mb-4">
                  Realize your vision
                </GradientHeading>
                <p className="text-neutral-300 text-lg">
                  Start your life seriously, today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="relative group"
                      initial={{ y: 0 }}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <button className="relative bg-black text-white font-medium px-8 py-4 rounded-lg border border-blue-500/30 leading-none flex items-center">
                        <span>Join Now</span>
                      </button>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border border-white/10 text-white sm:max-w-[500px] p-0 overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="rounded-full bg-zinc-800 p-2 sm:p-3">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 9.5L12 17L20 9.5L12 2Z" fill="currentColor" className="text-blue-500" />
                            <path d="M12 17V22M4 9.5H2M22 9.5H20" stroke="currentColor" className="text-blue-500" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      
                      <DialogHeader className="pb-4 sm:pb-5">
                        <DialogTitle className="text-lg sm:text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600">
                          Join Our Elite Team Today
                        </DialogTitle>
                        <DialogDescription className="text-neutral-300 text-center mt-1.5 text-sm">
                          We're selective about who joins our team. Each month, we only open 15 spots for new members.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <form className="space-y-4 sm:space-y-5 mt-4 sm:mt-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label htmlFor="fullName" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                            Full name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50"
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <label htmlFor="email" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="youremail@example.com"
                            className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50"
                          />
                        </div>
                        
                        <div className="space-y-1.5 sm:space-y-2">
                          <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                            Phone number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1.5 sm:space-y-2">
                            <label htmlFor="age" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                              Age
                            </label>
                            <input
                              type="number"
                              id="age"
                              placeholder="Your age"
                              className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50"
                            />
                          </div>
                          
                          <div className="space-y-1.5 sm:space-y-2">
                            <label htmlFor="profession" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                              Profession
                            </label>
                            <input
                              type="text"
                              id="profession"
                              placeholder="Your profession"
                              className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-2 sm:pt-3">
                          <button
                            type="submit"
                            className="w-full p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-indigo-700 transition-colors text-sm"
                          >
                            Join the Team
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <DialogClose className="absolute right-3.5 top-3.5 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:pointer-events-none p-1 bg-zinc-800/80 backdrop-blur-sm">
                      <Cross2Icon className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section - Darker Background */}
      <div className="w-full bg-zinc-950 mt-24 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Frequently asked questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                { 
                  q: "What is SpatialInc?", 
                  a: "SpatialInc is a platform for creating immersive spatial experiences with cutting-edge technology." 
                },
                { 
                  q: "How Spatial Auto works?", 
                  a: "Spatial Auto uses machine learning algorithms to automatically generate 3D spaces from simple inputs." 
                },
                { 
                  q: "What are the SpatialInc products?", 
                  a: "Our products include Spatial Auto, Spatial Analogue, and Spatial Audio for different creative needs." 
                },
                { 
                  q: "Which industries can benefit from Spatial's solutions?", 
                  a: "Architecture, gaming, education, healthcare, and entertainment industries can all benefit from our spatial technologies." 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-blue-500/20 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 