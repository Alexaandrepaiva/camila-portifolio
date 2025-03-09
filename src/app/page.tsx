"use client"

import { useState, useEffect } from "react";
import { Navigation } from "~/components/sections/Navigation";
import { Hero } from "~/components/sections/Hero";
import { Experience } from "~/components/sections/Experience";
import { Education } from "~/components/sections/Education";
import { Skills } from "~/components/sections/Skills";
import { Contact } from "~/components/sections/Contact";
import { Footer } from "~/components/sections/Footer";
import { useTranslation, type Language, type TranslationKey } from "~/lib/i18n";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const { t } = useTranslation(language);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Helper function to handle template literal keys with type safety
  const tKey = (key: string) => t(key as TranslationKey);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial values
    handleResize();
    
    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate if navigation should be visible
  const showNavigation = scrollPosition > windowHeight * 0.5;

  return (
    <main className="min-h-screen bg-background">
      {/* Fixed navigation that appears when scrolling */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          showNavigation ? "translate-y-0 shadow-md" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Navigation language={language} setLanguage={setLanguage} tKey={tKey} />
        </div>
      </div>

      {/* Hero section takes full viewport height initially */}
      <Hero tKey={tKey} t={t} />
      
      {/* Other sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Experience tKey={tKey} />
        <Education tKey={tKey} />
        <Skills tKey={tKey} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </main>
  );
}
