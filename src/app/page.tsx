"use client"

import { useState } from "react";
import { useTranslation, type Language, type TranslationKey } from "~/lib/i18n";
import { 
  Navigation,
  Hero,
  Experience,
  Education,
  Skills,
  Contact,
  Footer
} from "~/components/sections";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const { t } = useTranslation(language);

  // Helper function to handle template literal keys with type safety
  const tKey = (key: string) => t(key as TranslationKey);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Navigation language={language} setLanguage={setLanguage} tKey={tKey} />
        <Hero tKey={tKey} t={t} />
        <Experience tKey={tKey} />
        <Education tKey={tKey} />
        <Skills tKey={tKey} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </main>
  );
}
