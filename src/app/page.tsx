"use client"

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "~/components/ui/navigation-menu";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Download, Mail, Check } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useTranslation, type Language } from "~/lib/i18n";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const { t } = useTranslation(language);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("about")}
                  </NavigationMenuLink>
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    {t("projects")}
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
              <Button className="flex items-center gap-2" size="lg">
                <Mail className="h-5 w-5" />
                {t("contact")}
              </Button>
              <Button variant="outline" className="flex items-center gap-2" size="lg">
                <Download className="h-5 w-5" />
                {t("resume")}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <Element name="about" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("about")}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{t("aboutTitle")}</CardTitle>
                <CardDescription>
                  {t("aboutDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("aboutContent")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </Element>

        {/* Projects Section with Carousel */}
        <Element name="projects" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("projects")}</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((item) => (
                  <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardHeader>
                        <CardTitle>{`${t("project")} ${item}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{`${t("sampleProject")} ${item}`}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </Element>

        {/* Contact Section with Accordion */}
        <Element name="contact" className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("contact")}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{t("getInTouch")}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="email">
                    <AccordionTrigger>
                      {t("email")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>example@email.com</p>
                      <Button className="mt-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {t("sendEmail")}
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="phone">
                    <AccordionTrigger>
                      {t("phone")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>+1 234 567 890</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
