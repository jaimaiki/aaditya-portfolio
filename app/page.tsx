import Hero from "@/components/sections/Hero";
import Credentials from "@/components/sections/Credentials";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Philosophy />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
