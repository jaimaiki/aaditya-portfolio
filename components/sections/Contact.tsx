"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram } from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


export default function Contact() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.from(".contact-anim", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
            });
        },
        { scope: container }
    );

    return (
        <section id="contact" ref={container} className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <h2 className="contact-anim text-4xl md:text-6xl font-serif">Let's Create Magic.</h2>
                    <p className="contact-anim text-white/70 leading-relaxed font-light">
                        Available for bookings worldwide. <br />
                        For detailed pricing and availability, please fill out the form or reach out via Instagram.
                    </p>

                    <div className="contact-anim pt-8">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors pb-1 border-b border-white/20 hover:border-accent"
                        >
                            <Instagram size={18} /> Direct Message on Instagram
                        </a>
                    </div>

                    <div className="contact-anim">
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-12">Locations</p>
                        <p className="mt-2 text-sm">New Delhi • Mumbai • Udaipur • Worldwide</p>
                    </div>
                </div>

                <form className="space-y-6 bg-background/5 p-8 backdrop-blur-sm contact-anim border border-white/10">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Event Date / Type"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                        />
                        <textarea
                            rows={4}
                            placeholder="Tell me about your vision..."
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                        />
                    </div>

                    <button className="w-full bg-accent text-foreground py-4 uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300">
                        Check Availability
                    </button>
                </form>
            </div>
        </section>
    );
}
