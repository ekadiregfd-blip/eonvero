"use client";

import { useState, useCallback } from "react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <SmoothScroll>
      <Preloader onComplete={handlePreloaderComplete} />

      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <SelectedWork />
          <Services />
          <TechStack />
          <Process />
          <Founder />
          <FAQ />
          <ContactCTA />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
