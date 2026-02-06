"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Services() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".service-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
            });
        },
        { scope: container }
    );

    const services = [
        { title: "Bridal Artistry", description: "Bespoke bridal makeup and hair styling for your special day." },
        { title: "Editorial & Fashion", description: "High-fashion looks for magazines, campaigns, and runway." },
        { title: "Occasion Styling", description: "Red carpet, gala, and special event styling." },
        { title: "Masterclasses", description: "Learn the art of makeup with personal or group sessions." },
    ];

    return (
        <section id="services" ref={container} className="py-24 md:py-32 bg-background px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif">Services</h2>
                    <p className="opacity-60 text-sm uppercase tracking-widest">Pricing upon request</p>
                </div>

                <div className="grid gap-px bg-foreground/10 border border-foreground/10 overflow-hidden">
                    {services.map((service, index) => (
                        <div key={index} className="service-item bg-background p-8 md:p-12 hover:bg-secondary/10 transition-colors duration-300">
                            <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                            <p className="text-foreground/70">{service.description}</p>
                            <div className="mt-4 text-xs font-medium uppercase tracking-wider opacity-40">Inquire for rates</div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm opacity-60">Specific requirements? <a href="#contact" className="underline hover:text-accent">Get in touch.</a></p>
                </div>
            </div>
        </section>
    );
}
