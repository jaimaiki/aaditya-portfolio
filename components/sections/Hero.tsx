"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const container = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(imageRef.current, {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
        })
            .from(
                ".hero-text",
                {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                },
                "-=1"
            );
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div ref={imageRef} className="relative w-full h-full">
                    {/* Placeholder until real image is hooked up or user uploads to Sanity */}
                    <div className="w-full h-full bg-secondary/30 absolute inset-0 z-10" />
                    {/* Using a solid color fall back for now if image serves fail, 
                but ideally this is an <Image /> component. 
                I'll use a placeholder div that looks elegant. 
            */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center grayscale-[20%] opacity-80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
                <h2 className="hero-text text-xl md:text-2xl tracking-[0.2em] uppercase font-light opacity-80">
                    Makeup & Hair Artist
                </h2>
                <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-serif text-foreground leading-[0.9]">
                    Aaditya Tiwari
                </h1>
                <p className="hero-text text-sm md:text-lg max-w-lg mx-auto leading-relaxed opacity-70">
                    Specializing in high-end luxury bridal and editorial artistry.
                    Creating timeless looks for the modern muse.
                </p>
            </div>
        </section>
    );
}
