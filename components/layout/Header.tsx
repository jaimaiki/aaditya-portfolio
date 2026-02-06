"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // GSAP for smooth backdrop transition could be added here, but CSS transition is efficient for this specific state change.
    // We'll use CSS for the background transition.

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 md:py-6",
                isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent"
            )}
        >
            <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
                {/* Logo */}
                <Link href="/" className="z-50">
                    <h1 className={cn("text-2xl md:text-3xl font-serif font-bold tracking-tight text-foreground transition-colors", isScrolled ? "text-primary" : "text-primary")}>
                        Aaditya Tiwari
                    </h1>
                    <p className="text-xs tracking-widest uppercase mt-1 hidden md:block opacity-60">Makeup & Hair Artist</p>
                </Link>

                {/* Desktop Nav & CTA */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-6">
                        {["Work", "Services", "Philosophy", "Testimonials"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-6 pl-6 border-l border-foreground/10">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors duration-300"
                        >
                            <Instagram size={20} />
                        </a>
                        <Link
                            href="#contact"
                            className="bg-foreground text-background px-6 py-3 text-xs uppercase tracking-widest hover:bg-accent hover:text-foreground transition-all duration-300"
                        >
                            Check Availability
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center space-y-8 animate-in fade-in duration-300">
                        {["Work", "Services", "Philosophy", "Testimonials"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-3xl font-serif hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-8 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Check Availability
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
