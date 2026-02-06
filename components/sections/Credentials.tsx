"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Credentials() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".credential-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        },
        { scope: container }
    );

    const stats = [
        { label: "Years Experience", value: "8+" },
        { label: "Happy Brides", value: "300+" },
        { label: "Editorial Shoots", value: "50+" },
        { label: "Certifications", value: "4" },
    ];

    return (
        <section ref={container} className="py-24 md:py-32 px-6 bg-background">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12">
                {stats.map((stat) => (
                    <div key={stat.label} className="credential-item text-center space-y-2">
                        <span className="block text-4xl md:text-5xl font-serif font-medium text-accent">
                            {stat.value}
                        </span>
                        <span className="block text-xs uppercase tracking-widest opacity-60">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
