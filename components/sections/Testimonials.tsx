"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Testimonials() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".testimonial-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        },
        { scope: container }
    );

    const testimonials = [
        {
            name: "Tanya Sharma",
            location: "New Delhi",
            quote: "Aaditya completely understood my vision. I felt like the best version of myself—radiant, not overdone.",
        },
        {
            name: "Priya Kapoor",
            location: "Mumbai",
            quote: "His attention to detail is unmatched. The look stayed flawless through 12 hours of wedding festivities.",
        },
        {
            name: "Rhea Singh",
            location: "Udaipur",
            quote: "Professional, calming, and incredibly talented. He made the chaos of the wedding morning feel serene.",
        },
    ];

    return (
        <section id="testimonials" ref={container} className="py-24 md:py-32 bg-background border-t border-foreground/5">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Kind Words</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card text-center p-8 bg-secondary/5 space-y-6">
                            <Quote className="mx-auto text-accent opacity-50" size={32} />
                            <p className="text-lg md:text-xl font-serif leading-relaxed italic opacity-80">"{t.quote}"</p>
                            <div className="text-sm font-sans tracking-wide">
                                <span className="block font-medium uppercase text-xs tracking-widest mb-1">{t.name}</span>
                                <span className="block opacity-50 text-xs">{t.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
