import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-background py-16 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Aaditya Tiwari
                    </h2>
                    <p className="text-white/60 text-sm tracking-widest uppercase">
                        Luxury Makeup & Hair Artist
                    </p>
                </div>

                <div className="flex flex-col md:items-end space-y-6">
                    <div className="flex space-x-6">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors duration-300"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="mailto:contact@aadityatiwari.com"
                            className="hover:text-accent transition-colors duration-300"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <nav className="flex space-x-6 text-sm text-white/60">
                        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                        <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>

                    <p className="text-white/20 text-xs">
                        © {new Date().getFullYear()} Aaditya Tiwari. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
