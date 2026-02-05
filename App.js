import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURATION ---
const COLORS = { background: "#F9F5F2", primary: "#A67070", text: "#333333" };

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.background, color: COLORS.text, fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80')" }}></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif mb-4" style={{ color: COLORS.text }}>Aaditya Tiwari</h1>
          <p className="uppercase tracking-[0.3em] text-sm mb-8">Transforming beauty into art, one brushstroke at a time</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full text-white transition-all" style={{ backgroundColor: COLORS.primary }}>Book Now</button>
            <button className="px-8 py-3 rounded-full border border-current">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (10-YEAR JOURNEY) */}
      <section className="py-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
          <img src="your-portrait.jpg" alt="Aaditya Tiwari" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-6">10 Years of Artistry</h2>
          <p className="mb-4 font-light leading-relaxed">My journey began a decade ago in Agra. What started as a fascination with beauty has evolved into a professional mastery of makeup and hair artistry.</p>
          <p className="mb-8 font-light leading-relaxed">Today, I blend my Agra roots with global standards to provide high-end transformations for brides and editorial shoots.</p>
          <div className="grid grid-cols-2 gap-4 border-t pt-8">
            <div><p className="text-2xl font-serif">10+</p><p className="text-xs uppercase opacity-60">Years Experience</p></div>
            <div><p className="text-2xl font-serif">500+</p><p className="text-xs uppercase opacity-60">Happy Clients</p></div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#A67070] uppercase text-xs mb-4">Client Love</p>
          <h2 className="text-4xl font-serif mb-12">What Clients Say</h2>
          <div className="bg-[#F9F5F2] p-12 rounded-3xl italic font-light text-xl">
            "Aaditya made my wedding day absolutely perfect! The makeup was flawless and lasted all night. I felt like a princess!"
            <p className="mt-6 not-italic font-bold text-sm uppercase tracking-widest">- Priya Sharma, Bride</p>
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Get In Touch</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Full Name" className="w-full border-b bg-transparent py-3 outline-none focus:border-[#A67070]" />
          <input type="email" placeholder="Email Address" className="w-full border-b bg-transparent py-3 outline-none focus:border-[#A67070]" />
          <select className="w-full border-b bg-transparent py-3 outline-none">
            <option>Bridal Makeup</option>
            <option>Editorial Styling</option>
            <option>Party Makeup</option>
          </select>
          <button className="w-full py-4 text-white rounded-full mt-8" style={{ backgroundColor: COLORS.primary }}>Send Message</button>
        </form>
      </section>

      <footer className="py-12 text-center text-xs opacity-40 uppercase tracking-widest">
        © 2026 Aaditya Tiwari • Agra & Global
      </footer>
    </div>
  );
};

export default App;
