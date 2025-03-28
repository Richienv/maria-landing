"use client";

import {
  LineChart,
  CreditCard,
  Smartphone,
  BarChart4,
  AreaChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid-new";
import Image from "next/image";

const features = [
  {
    name: "Master Financial Strategies",
    subtitle: "Learn insider techniques",
    description: "for family wealth building",
    href: "#",
    cta: "Join sessions",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Financial strategies visualization"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "World-Class Training",
    subtitle: "Access over 150 hours",
    description: "of exclusive content",
    href: "#",
    cta: "Start learning",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Training and education materials"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "Elite Networking",
    subtitle: "Connect with 700+",
    description: "industry leaders",
    href: "#",
    cta: "Meet the team",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Networking event"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "Personalized Mentorship",
    subtitle: "One-on-one guidance",
    description: "from seasoned experts",
    href: "#",
    cta: "Secure your spot",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Mentorship session"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
];

// Animation variants for the section - simplified to avoid function serialization issues
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

function BentoDemo() {
  return (
    <motion.div 
      className="py-40 px-6 bg-[#030303] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Background decoration elements inspired by geometric hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto w-full relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 text-center mb-4"
          variants={textVariants}
        >
          Join Our Elite Community
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-lg max-w-2xl mx-auto text-center mb-24"
          variants={textVariants}
        >
          Become part of our dynamic network of driven individuals who support each other and build lasting success. With only 15 spots available monthly, secure your place in this exclusive community today.
        </motion.p>
        
        <BentoGrid className="px-4 lg:px-8">
          {features.map((feature, index) => (
            <BentoCard 
              key={feature.name} 
              {...feature} 
              index={index}
            />
          ))}
        </BentoGrid>
      </div>
    </motion.div>
  );
}

export { BentoDemo }; 