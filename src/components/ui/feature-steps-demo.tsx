import React from "react";
import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  { 
    step: 'Step 1', 
    title: 'Master Financial Strategies',
    content: 'Learn insider techniques to secure your family\'s future, from building wealth with zero tax implications to planning for long-term success.', 
    image: '/images/blockchain-1.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Access World-Class Training',
    content: 'Benefit from over 150 hours of curated content with step-by-step guidance from foundational skills to advanced strategies.',
    image: '/images/blockchain-2.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Join Our Elite Network',
    content: 'Connect with over 700 team members and industry leaders across Indonesia, opening doors to partnerships and opportunities.',
    image: '/images/blockchain-3.jpg'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Path to Success"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
} 