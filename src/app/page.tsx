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
              {[
                {
                  key: "experienceTexas",
                  title: "Title",
                  position: "Position",
                  date: "Date",
                  desc1: "Desc1",
                  desc2: "Desc2",
                  desc3: "Desc3",
                  skills: "Skills"
                },
                {
                  key: "experienceCnpq",
                  title: "Title",
                  position: "Position",
                  date: "Date",
                  desc1: "Desc1",
                  desc2: "Desc2",
                  desc3: "Desc3",
                  skills: "Skills"
                },
                {
                  key: "experienceImeJunior",
                  title: "Title",
                  position: "Position",
                  date: "Date",
                  desc1: "Desc1",
                  desc2: "Desc2",
                  desc3: "Desc3",
                  skills: "Skills"
                },
                {
                  key: "experienceProject",
                  title: "Title",
                  position: "Position",
                  date: "Date",
                  desc1: "Desc1",
                  desc2: "Desc2",
                  desc3: "Desc3",
                  skills: "Skills"
                },
                {
                  key: "experienceStem",
                  title: "Title",
                  position: "Position",
                  date: "Date",
                  desc1: "Desc1",
                  desc2: "Desc2",
                  desc3: "Desc3",
                  skills: "Skills"
                }
              ].map((exp) => (
                <Card key={exp.key}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{tKey(`${exp.key}${exp.title}`)}</CardTitle>
                        <CardDescription>{tKey(`${exp.key}${exp.position}`)}</CardDescription>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tKey(`${exp.key}${exp.date}`)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>{tKey(`${exp.key}${exp.desc1}`)}</li>
                      <li>{tKey(`${exp.key}${exp.desc2}`)}</li>
                      <li>{tKey(`${exp.key}${exp.desc3}`)}</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tKey(`${exp.key}${exp.skills}`).split(',').map((skill, index) => (
                        <Badge key={`${exp.key}-skill-${index}`} variant="secondary">{skill.trim()}</Badge>
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
              {[
                {
                  key: "educationIme",
                  title: "Title",
                  degree: "Degree",
                  date: "Date",
                  desc: "Desc"
                },
                {
                  key: "educationTexas",
                  title: "Title",
                  degree: "Degree",
                  date: "Date",
                  desc: "Desc"
                }
              ].map((edu) => (
                <Card key={edu.key}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{tKey(`${edu.key}${edu.title}`)}</CardTitle>
                        <CardDescription>{tKey(`${edu.key}${edu.degree}`)}</CardDescription>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tKey(`${edu.key}${edu.date}`)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{tKey(`${edu.key}${edu.desc}`)}</p>
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
            
            <div className="space-y-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{tKey("technicalSkills")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "autocad", level: "beginner", icon: "/icons/autocad.svg" },
                    { name: "python", level: "beginner", icon: "/icons/python.svg" },
                    { name: "cfd", level: "intermediate", icon: "/icons/cfd.svg" },
                    { name: "mechanicalDesign", level: "intermediate", icon: "/icons/mechanical-design.svg" },
                    { name: "ansysFluent", level: "intermediate", icon: "/icons/ansys-fluent.svg" },
                    { name: "aerodynamics", level: "advanced", icon: "/icons/aerodynamics.svg" },
                    { name: "thermodynamics", level: "advanced", icon: "/icons/thermodynamics.svg" },
                    { name: "ballistics", level: "advanced", icon: "/icons/ballistics.svg" },
                    { name: "3dPrototyping", level: "advanced", icon: "/icons/3d-prototyping.svg" },
                    { name: "flightstream", level: "advanced", icon: "/icons/flightstream.svg" },
                    { name: "matlab", level: "advanced", icon: "/icons/matlab.svg" },
                    { name: "labview", level: "advanced", icon: "/icons/labview.svg" },
                    { name: "solidworks", level: "advanced", icon: "/icons/solidworks.svg" }
                  ].map((skill) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 flex-shrink-0">
                            <img src={skill.icon} alt={tKey(skill.name)} className="w-full h-full" />
                          </div>
                          <div>
                            <p className="font-medium">{tKey(skill.name)}</p>
                            <div className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center ${
                              skill.level === "beginner" ? "bg-yellow-100 text-yellow-800" : 
                              skill.level === "intermediate" ? "bg-blue-100 text-blue-800" : 
                              "bg-green-100 text-green-800"
                            }`}>
                              {tKey(skill.level)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{tKey("softSkills")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "portuguese", level: "advanced", icon: "/icons/portuguese.svg" },
                    { name: "english", level: "advanced", icon: "/icons/english.svg" }
                  ].map((skill) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 flex-shrink-0">
                            <img src={skill.icon} alt={tKey(skill.name)} className="w-full h-full" />
                          </div>
                          <div>
                            <p className="font-medium">{tKey(skill.name)}</p>
                            <div className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center ${
                              skill.level === "beginner" ? "bg-yellow-100 text-yellow-800" : 
                              skill.level === "intermediate" ? "bg-blue-100 text-blue-800" : 
                              "bg-green-100 text-green-800"
                            }`}>
                              {tKey(skill.level)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
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
