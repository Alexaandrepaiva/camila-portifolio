"use client"

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "../components/ui/badge";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "~/components/ui/navigation-menu";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ChevronDown, 
  Download, 
  Mail, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Linkedin, 
  Github, 
  Calendar
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useTranslation, type Language, type TranslationKey } from "~/lib/i18n";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const { t } = useTranslation(language);

  // Helper function to handle template literal keys with type safety
  const tKey = (key: string) => t(key as TranslationKey);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {tKey("home")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink to="experience" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {tKey("experience")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink to="education" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {tKey("education")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {tKey("skills")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("contact")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {language === "en" ? "EN 🇺🇸" : "PT 🇧🇷"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center gap-2">
                EN 🇺🇸 {language === "en" && <Check className="h-4 w-4 ml-auto" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("pt")} className="flex items-center gap-2">
                PT 🇧🇷 {language === "pt" && <Check className="h-4 w-4 ml-auto" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Hero Section with Framer Motion */}
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

        {/* Experience Section */}
        <Element name="experience" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{tKey("experience")}</h2>
            </div>
            
            {/* Experience Cards */}
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <Card key={`exp-${item}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{tKey(`expCompany${item}`)}</CardTitle>
                        <CardDescription>{tKey(`expPosition${item}`)}</CardDescription>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tKey(`expDate${item}`)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>{tKey(`expDesc${item}A`)}</li>
                      <li>{tKey(`expDesc${item}B`)}</li>
                      <li>{tKey(`expDesc${item}C`)}</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tKey(`expSkills${item}`).split(',').map((skill, index) => (
                        <Badge key={`skill-${item}-${index}`} variant="secondary">{skill.trim()}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Element>

        {/* Education Section */}
        <Element name="education" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{tKey("education")}</h2>
            </div>
            
            {/* Education Cards */}
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <Card key={`edu-${item}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{tKey(`eduInstitution${item}`)}</CardTitle>
                        <CardDescription>{tKey(`eduDegree${item}`)}</CardDescription>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tKey(`eduDate${item}`)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{tKey(`eduDesc${item}`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Element>

        {/* Skills Section */}
        <Element name="skills" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{tKey("skills")}</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium text-lg mb-3">{tKey("technicalSkills")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tKey("technicalSkillsList").split(',').map((skill, index) => (
                        <Badge key={`tech-${index}`} variant="outline">{skill.trim()}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-3">{tKey("softwareSkills")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tKey("softwareSkillsList").split(',').map((skill, index) => (
                        <Badge key={`soft-${index}`} variant="outline">{skill.trim()}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-3">{tKey("languageSkills")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tKey("languageSkillsList").split(',').map((skill, index) => (
                        <Badge key={`lang-${index}`} variant="outline">{skill.trim()}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Element>

        {/* Contact Section */}
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

        {/* Footer */}
        <footer className="py-8 text-center border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer")}
          </p>
        </footer>
      </div>
    </main>
  );
}
