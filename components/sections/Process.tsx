"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Process() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
            });
        },
        { scope: container }
    );

    const steps = [
        { number: "01", title: "Consultation", description: "Understand your vision, preferences, and the specific requirements of the event or shoot." },
        { number: "02", title: "Trial & Design", description: "Collaboratively crafting a custom look that enhances your natural features and aligns with the theme." },
        { number: "03", title: "Execution", description: "Bringing the vision to life with precision, premium products, and a calm, professional presence." },
    ];

    return (
        <section className="py-24 md:py-32 bg-secondary/10" ref={container}>
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4 block">The Process</h2>
                    <h3 className="text-4xl md:text-5xl font-serif">Seamless Experience</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-[50px] left-0 right-0 h-px bg-foreground/10 overflow-hidden">
                        <div className="h-full bg-foreground/30 w-full translate-x-[-100%]" />
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="process-step relative space-y-6">
                            <span className="text-6xl md:text-7xl font-serif text-accent/20 block font-bold relative z-10 bg-inherit w-fit pr-4">
                                {step.number}
                            </span>
                            <h4 className="text-2xl font-serif">{step.title}</h4>
                            <p className="text-foreground/70 leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
