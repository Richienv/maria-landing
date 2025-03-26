'use client';

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    Users,
    Award,
    Briefcase,
    ShieldCheck,
} from "lucide-react";


const itemsSample: BentoItem[] = [
    {
        title: "Wealth Building System",
        meta: "Proven Strategy",
        description:
            "Access our proprietary financial system that has generated consistent returns for over 700 elite members",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Exclusive",
        tags: ["Finance", "Growth", "Wealth"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Mentorship Access",
        meta: "1-on-1 Sessions",
        description: "Direct guidance from Indonesia's top financial strategists",
        icon: <Users className="w-4 h-4 text-emerald-500" />,
        status: "Members Only",
        tags: ["Guidance", "Expertise"],
    },
    {
        title: "Premium Resources",
        meta: "150+ Hours",
        description: "Comprehensive training materials and investment guides unavailable elsewhere",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Education", "Resources"],
        colSpan: 2,
    },
    {
        title: "Elite Network",
        meta: "7 Major Cities",
        description: "Connect with Indonesia's top entrepreneurs and financial leaders",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "VIP",
        tags: ["Networking", "Community"],
    },
];

function BentoGridDemo() {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                    Exclusive Member Benefits
                </h2>
                <p className="text-neutral-300 max-w-2xl mx-auto">
                    Join our elite team and gain access to exclusive resources, strategies, and networks that transform your financial future.
                </p>
            </div>
            <BentoGrid items={itemsSample} />
        </div>
    );
}

export { BentoGridDemo } 