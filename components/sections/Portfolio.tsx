"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


const categories = ["All", "Bridal", "Editorial", "Hair", "Commercial"];

const portfolioItems = [
    { id: 1, title: "Vogue India", category: "Editorial", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop" },
    { id: 2, title: "Summer Bride", category: "Bridal", image: "https://images.unsplash.com/photo-1546252445-5df934e64a8a?q=80&w=3000&auto=format&fit=crop" },
    { id: 3, title: "Minimal Elegance", category: "Hair", image: "https://images.unsplash.com/photo-1512413316925-fd52bd015e6a?q=80&w=3000&auto=format&fit=crop" },
    { id: 4, title: "L'Officiel", category: "Editorial", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=3000&auto=format&fit=crop" },
    { id: 5, title: "Royal Wedding", category: "Bridal", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=3000&auto=format&fit=crop" },
    { id: 6, title: "Runway looks", category: "Commercial", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=3000&auto=format&fit=crop" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const container = useRef(null);

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    useGSAP(() => {
        // Animate items when filtering changes or initial load
        gsap.fromTo(".portfolio-item",
            { autoAlpha: 0, y: 20, scale: 0.95 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, clearProps: "all" }
        );
    }, { scope: container, dependencies: [activeCategory] });

    return (
        <section id="portfolio" ref={container} className="py-24 md:py-32 bg-background">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-serif">Portfolio</h2>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "text-sm uppercase tracking-widest transition-colors duration-300 pb-1 border-b hover:text-foreground",
                                    activeCategory === cat ? "border-foreground text-foreground" : "border-transparent text-foreground/40"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="portfolio-item group relative aspect-[3/4] overflow-hidden bg-secondary/10 cursor-pointer">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <span className="text-xs uppercase tracking-widest block mb-2 opacity-80">{item.category}</span>
                                <h3 className="text-xl font-serif">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-4 border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 uppercase tracking-widest text-xs">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
