"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Philosophy() {
    const container = useRef(null);
    const imageRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1
                }
            });

            tl.from(imageRef.current, { scale: 1.1, duration: 1 })
        },
        { scope: container }
    );

    return (
        <section id="philosophy" ref={container} className="py-24 md:py-32 bg-background">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Image Side */}
                <div className="relative aspect-[3/4] overflow-hidden w-full md:order-last px-6 md:px-0">
                    <div ref={imageRef} className="w-full h-full relative">
                        <div className="w-full h-full bg-secondary/20 absolute inset-0 z-10" />
                        {/* Placeholder for editorial portrait */}
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1546252445-5df934e64a8a?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center grayscale-[20%]" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="px-6 md:pl-12 space-y-8">
                    <span className="block text-xs uppercase tracking-[0.2em] opacity-60">Philosophy</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                        Enhancing beauty, <br />
                        <span className="italic text-accent">never masking it.</span>
                    </h2>
                    <div className="space-y-6 text-foreground/80 leading-relaxed font-light">
                        <p>
                            My approach to makeup is rooted in the belief that true luxury lies in subtlety and precision.
                            Whether it's a bridal look or an editorial shoot, the focus remains on glowing, skin-like finishes
                            and enhancing distinct features.
                        </p>
                        <p>
                            Trained at Pivot Point USA and Blossom Kochhar, I blend technical expertise with a modern, fresh aesthetic.
                        </p>
                    </div>

                    <div className="pt-8">
                        <div className="inline-block border-b border-foreground/30 pb-1 text-sm uppercase tracking-widest">
                            Available for Travel Worldwide
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
