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

export function DialogDemo() {
  return (
    <div className="py-24 w-full bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Join Our Elite Team
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Step Into a World of Growth, Collaboration, and Financial Mastery—Where Your Potential Meets Opportunity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 max-w-3xl mx-auto"
        >
          <GradientHeading size="lg" className="mb-3">Shape Your Future with a Thriving Community</GradientHeading>
          
          <p className="text-neutral-300 text-sm sm:text-base text-center max-w-2xl mb-6">
            This is more than an invitation—it's a chance to redefine what's possible for you and your family. Join our team of 700+ driven individuals who support each other, grow together, and build lasting legacies.
          </p>
          
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <GradientButton variant="variant" className="capitalize text-base">
                  Apply Now - Limited Spots
                </GradientButton>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 border border-white/10 text-white sm:max-w-[500px] p-0 overflow-hidden !duration-100 !animate-none !data-[state=open]:fade-in-0 !data-[state=open]:zoom-in-100 !data-[state=open]:slide-in-from-left-0 !data-[state=open]:slide-in-from-top-[0%]">
                <div className="p-6 sm:p-8">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="rounded-full bg-zinc-800 p-2 sm:p-3">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L4 9.5L12 17L20 9.5L12 2Z" fill="currentColor" className="text-purple-500" />
                        <path d="M12 17V22M4 9.5H2M22 9.5H20" stroke="currentColor" className="text-purple-500" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  
                  <DialogHeader className="pb-4 sm:pb-5">
                    <DialogTitle className="text-lg sm:text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                      Join Our Elite Team Today
                    </DialogTitle>
                    <DialogDescription className="text-neutral-300 text-center mt-1.5 text-sm">
                      We're selective about who joins our team. Each month, we only open 15 spots for new members to ensure everyone gets the attention they deserve.
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
                        className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50"
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
                        className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50"
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
                        className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50"
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
                          className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50"
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
                          className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="degree" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                        Last degree
                      </label>
                      <select
                        id="degree"
                        className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 appearance-none"
                        style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", backgroundSize: "20px" }}
                      >
                        <option value="">Select your last degree</option>
                        <option value="high-school">High School</option>
                        <option value="bachelor">Bachelor's</option>
                        <option value="master">Master's</option>
                        <option value="phd">Ph.D.</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="experience" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                        Working experience
                      </label>
                      <select
                        id="experience"
                        className="w-full p-2.5 sm:p-3 bg-zinc-800/70 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 appearance-none"
                        style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", backgroundSize: "20px" }}
                      >
                        <option value="">Select your experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="community" className="text-xs sm:text-sm font-medium text-neutral-200 tracking-wide">
                        Have you joined a similar community before?
                      </label>
                      <div className="flex gap-5 pt-1">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="community" value="yes" className="w-3.5 h-3.5 text-purple-500 accent-purple-500" />
                          <span className="text-sm text-neutral-300">Yes</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input type="radio" name="community" value="no" className="w-3.5 h-3.5 text-purple-500 accent-purple-500" />
                          <span className="text-sm text-neutral-300">No</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="pt-2 sm:pt-3">
                      <button
                        type="submit"
                        className="w-full p-2.5 sm:p-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors text-sm"
                      >
                        Join the Team
                      </button>
                    </div>
                    
                    <div className="relative py-3 sm:py-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-zinc-900 px-3 text-xs text-neutral-400 tracking-wide">Or</span>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      className="w-full p-2.5 sm:p-3 bg-zinc-800 border border-white/10 text-white font-medium rounded-md hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                      </svg>
                      Continue with Google
                    </button>
                    
                    <p className="text-xs text-center text-neutral-400 pt-2 tracking-wide">
                      By joining, you agree to our <a href="#" className="text-purple-400 hover:underline">Terms</a> and become part of our growing community.
                    </p>
                  </form>
                </div>
                
                <DialogClose className="absolute right-3.5 top-3.5 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:pointer-events-none p-1 bg-zinc-800/80 backdrop-blur-sm">
                  <Cross2Icon className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
          
          <p className="mt-8 text-neutral-400 text-sm max-w-2xl mx-auto text-center">
            We're selective about who joins our team because we're committed to quality. Each month, we only open 15 spots for new members, ensuring everyone gets the attention they deserve.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 