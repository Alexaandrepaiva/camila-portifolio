"use client"

import { Button } from "~/components/ui/button";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { type Language, type TranslationKey } from "~/lib/i18n";

interface HeroProps {
  tKey: (key: string) => string;
  t: (key: TranslationKey) => string;
}

export function Hero({ tKey, t }: HeroProps) {
  return (
    <Element name="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-12"
      >
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold">{t("heroTitle")}</h1>
          <p className="mt-8 text-xl text-muted-foreground font-light">
            {t("heroSummary")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
              <Button className="flex items-center gap-2 w-full" size="lg">
                <Mail className="h-5 w-5" />
                {t("contact")}
              </Button>
            </ScrollLink>
            <Button variant="outline" className="flex items-center gap-2" size="lg">
              <Download className="h-5 w-5" />
              {t("resume")}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-128 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden border-2 border-primary p-2">
            <div className="absolute inset-2 rounded-md overflow-hidden bg-black">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
} 