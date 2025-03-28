"use client";

import React, { useEffect, useState, useRef, ReactNode, ReactElement } from 'react';
import { motion, useAnimation, useSpring, AnimatePresence } from 'framer-motion';
import { throttle } from 'lodash';

interface ScrollContainerProps {
  children: ReactNode;
}

export function ScrollContainer({ children }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sectionCount, setSectionCount] = useState(0);
  const [sections, setSections] = useState<Element[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  
  // Spring configuration for smoother scrolling
  const springScroll = useSpring(0, {
    stiffness: 75,
    damping: 15,
    mass: 0.3
  });
  
  // Get all sections
  useEffect(() => {
    if (containerRef.current) {
      const sectionElements = Array.from(containerRef.current.querySelectorAll('.snap-section'));
      setSections(sectionElements);
      setSectionCount(sectionElements.length);
      setIsMounted(true);
      
      // Show progress indicator after a short delay
      setTimeout(() => {
        setShowProgress(true);
      }, 1000);
    }
  }, []);
  
  // Update spring value when current section changes
  useEffect(() => {
    springScroll.set(currentSection);
  }, [currentSection, springScroll]);

  // Smooth scroll to section with spring physics
  const scrollToSection = (index: number) => {
    if (!sections[index]) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    // Force a layout recalculation
    document.body.getBoundingClientRect();
    
    // Apply smooth animation using framer-motion's spring
    springScroll.set(index);
    
    // Use custom easing for a more natural scroll
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Add subtle visual feedback for the scroll action
    const allSections = Array.from(containerRef.current?.querySelectorAll('.snap-section') || []);
    
    // Apply subtle scale effect to the target section
    allSections.forEach((section, i) => {
      if (i === index) {
        // Add a subtle pulse effect to the target section
        section.classList.add('scroll-target-pulse');
        setTimeout(() => {
          section.classList.remove('scroll-target-pulse');
        }, 800);
      }
    });
    
    // Cooldown period with exponential easing out
    const startTime = Date.now();
    const duration = 1200; // 1.2 seconds
    
    const checkScrollEnd = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easeFactor = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      
      if (progress < 1) {
        requestAnimationFrame(checkScrollEnd);
      } else {
        setIsScrolling(false);
      }
    };
    
    requestAnimationFrame(checkScrollEnd);
  };

  // Handle wheel events for magnetic scroll with improved physics
  useEffect(() => {
    if (!isMounted || !containerRef.current) return;
    
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let scrollVelocity = 0;
    let direction = 0;
    
    // Use velocity-based scrolling for more natural feeling
    const handleWheel = throttle((e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      // Calculate velocity with momentum
      const scrollY = window.scrollY;
      const now = Date.now();
      const timeDiff = Math.max(16, now - lastScrollTime); // Min 16ms (60fps)
      const scrollDiff = Math.abs(scrollY - lastScrollY);
      
      // Update velocity with decay
      const newVelocity = (0.8 * scrollVelocity) + (0.2 * (Math.abs(e.deltaY) / timeDiff));
      scrollVelocity = newVelocity;
      
      // Determine intent based on velocity threshold and time between scrolls
      const velocityThreshold = 0.1;
      const intentThreshold = 250; // ms
      
      if (timeDiff > intentThreshold && scrollVelocity > velocityThreshold) {
        direction = e.deltaY > 0 ? 1 : -1;
        const newSection = Math.min(Math.max(0, currentSection + direction), sectionCount - 1);
        
        if (newSection !== currentSection) {
          // Add subtle haptic-like visual feedback
          const intensity = Math.min(1, scrollVelocity / 5);
          document.body.style.setProperty('--scroll-intensity', intensity.toString());
          document.body.classList.add('scroll-feedback');
          setTimeout(() => {
            document.body.classList.remove('scroll-feedback');
          }, 300);
          
          scrollToSection(newSection);
          scrollVelocity = 0; // Reset velocity after scroll
        }
      }
      
      lastScrollY = scrollY;
      lastScrollTime = now;
    }, 180, { leading: true, trailing: false });
    
    containerRef.current.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, isScrolling, sectionCount, isMounted, sections]);

  // Handle touch events for mobile with improved physics
  useEffect(() => {
    if (!isMounted || !containerRef.current) return;
    
    let touchStartY = 0;
    let touchStartTime = 0;
    let lastTouchY = 0;
    let touchVelocity = 0;
    let velocityHistory: number[] = [];
    let animationFrameId: number;
    
    // Track touch movement for velocity calculation
    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const currentY = e.touches[0].clientY;
      const now = Date.now();
      const timeDelta = now - touchStartTime;
      
      if (lastTouchY !== 0 && timeDelta > 0) {
        const distance = currentY - lastTouchY;
        const currentVelocity = distance / timeDelta;
        velocityHistory.push(currentVelocity);
        
        // Keep only recent velocity samples
        if (velocityHistory.length > 5) {
          velocityHistory.shift();
        }
        
        // Calculate weighted average velocity
        touchVelocity = velocityHistory.reduce((sum, v, i, arr) => {
          // More recent samples have higher weight
          const weight = (i + 1) / arr.length;
          return sum + (v * weight);
        }, 0) / velocityHistory.reduce((sum, _, i, arr) => sum + ((i + 1) / arr.length), 0);
      }
      
      lastTouchY = currentY;
      touchStartTime = now;
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
      lastTouchY = touchStartY;
      velocityHistory = [];
      
      // Set up animation frame for smooth tracking
      const trackVelocity = () => {
        animationFrameId = requestAnimationFrame(trackVelocity);
      };
      
      trackVelocity();
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      cancelAnimationFrame(animationFrameId);
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;
      const absVelocity = Math.abs(touchVelocity);
      
      // Use both distance and velocity for better detection
      const distanceThreshold = 80;
      const velocityThreshold = 0.5;
      
      if ((Math.abs(touchDiff) > distanceThreshold || absVelocity > velocityThreshold)) {
        const direction = touchDiff > 0 ? 1 : -1;
        const newSection = Math.min(Math.max(0, currentSection + direction), sectionCount - 1);
        
        if (newSection !== currentSection) {
          // Add subtle visual feedback based on velocity
          const intensity = Math.min(1, absVelocity * 2);
          document.body.style.setProperty('--scroll-intensity', intensity.toString());
          
          scrollToSection(newSection);
        }
      }
    };
    
    containerRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
    containerRef.current.addEventListener('touchmove', handleTouchMove, { passive: true });
    containerRef.current.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchstart', handleTouchStart);
        containerRef.current.removeEventListener('touchmove', handleTouchMove);
        containerRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentSection, isScrolling, sectionCount, isMounted, sections]);

  // Add keyboard navigation with improved feedback
  useEffect(() => {
    if (!isMounted) return;
    
    let lastKeyTime = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      const now = Date.now();
      // Add a time-based check to prevent rapid key presses
      if (now - lastKeyTime < 800) return;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        const newSection = Math.min(currentSection + 1, sectionCount - 1);
        if (newSection !== currentSection) {
          // Add visual feedback for key navigation
          document.body.classList.add('key-navigation');
          setTimeout(() => {
            document.body.classList.remove('key-navigation');
          }, 300);
          
          scrollToSection(newSection);
          lastKeyTime = now;
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        const newSection = Math.max(currentSection - 1, 0);
        if (newSection !== currentSection) {
          // Add visual feedback for key navigation
          document.body.classList.add('key-navigation');
          setTimeout(() => {
            document.body.classList.remove('key-navigation');
          }, 300);
          
          scrollToSection(newSection);
          lastKeyTime = now;
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
        lastKeyTime = now;
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(sectionCount - 1);
        lastKeyTime = now;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sectionCount, isMounted, sections]);

  // Handle initial position on load
  useEffect(() => {
    if (isMounted && sections.length > 0) {
      // Determine which section should be visible initially
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Find the section closest to the current scroll position
      let closestSection = 0;
      let minDistance = Infinity;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = index;
        }
      });
      
      // Set the current section without animating
      setCurrentSection(closestSection);
      
      // Make sure we start with the proper section in view
      if (minDistance > 50) {
        sections[closestSection].scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [isMounted, sections]);

  // Progress indicator component
  const ProgressIndicator = () => (
    <AnimatePresence>
      {showProgress && (
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: sectionCount }).map((_, i) => (
            <motion.button
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSection 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              onClick={() => !isScrolling && scrollToSection(i)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: i === currentSection ? 1.25 : 1, 
                opacity: 1 
              }}
              transition={{ 
                delay: i * 0.05,
                duration: 0.3 
              }}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.main 
        ref={containerRef}
        className="bg-[#030303] text-white snap-container relative"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            // Apply scroll-snap styles to each section
            return React.cloneElement(child as ReactElement<any>, {
              className: `${(child as ReactElement<any>).props.className || ''} ${
                index === currentSection ? 'active-section' : ''
              }`,
              style: {
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                transition: "transform 0.3s ease-out",
              },
              'data-section-index': index,
            });
          }
          return child;
        })}
      </motion.main>
      
      {/* Minimal, unobtrusive progress indicator */}
      <ProgressIndicator />
    </>
  );
} 