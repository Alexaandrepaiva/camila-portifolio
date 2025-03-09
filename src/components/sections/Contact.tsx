"use client"

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { type TranslationKey } from "~/lib/i18n";

interface ContactProps {
  t: (key: TranslationKey) => string;
}

export function Contact({ t }: ContactProps) {
  return (
    <Element name="contact" className="py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{t("getInTouch")}</h2>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center mb-6 flex flex-col items-center">
              {t("contactDescription")}
            </p>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
              <a href="mailto:milapifano@gmail.com" target="_blank" rel="noopener noreferrer" >
                <Button className="flex items-center gap-2 w-full" size="lg">
                  <Mail className="h-5 w-5" />
                  {t("email")}
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/camila-cardi/" target="_blank" rel="noopener noreferrer" >
                <Button className="flex items-center gap-2 w-full" size="lg">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/CamilaCardi" target="_blank" rel="noopener noreferrer" >
                <Button className="flex items-center gap-2 w-full" size="lg">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t text-sm text-muted-foreground flex flex-col items-center text-center">
              <p className="mb-1">{t("basedIn")}</p>
              <p>{t("availability")}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Element>
  );
} 