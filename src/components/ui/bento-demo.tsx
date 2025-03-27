import {
  LineChart,
  CreditCard,
  Smartphone,
  BarChart4,
  AreaChart,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid-new";
import Image from "next/image";

const features = [
  {
    name: "Ultra Fast Trades",
    subtitle: "Make a riskless start with",
    description: "10,000 deposit",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Fast trading speedometer"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "Seamless Payments",
    subtitle: "Make a riskless start with",
    description: "10,000 deposit",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Credit card with arrow"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "Any Time, Any Device",
    subtitle: "Trade on your PC, tablet,",
    description: "or smartphone",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Trading devices"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    name: "Trade Education",
    subtitle: "Explore webinars, articles and",
    description: "how-to videos at no charge",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="relative w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Graduation cap"
          width={200}
          height={200}
          className="object-contain opacity-90"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
];

function BentoDemo() {
  return (
    <div className="py-40 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 text-center mb-4">
          Professional Trading Platform
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto text-center mb-24">
          Access institutional-grade tools and strategies developed by industry veterans
        </p>
        
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

export { BentoDemo }; 