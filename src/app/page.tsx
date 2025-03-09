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

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const content = {
    en: {
      title: "Mechanical Engineer Portfolio",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      resume: "Download Resume",
      aboutContent: "I am a mechanical engineer with expertise in...",
      projectsContent: "Here are some of my projects...",
      contactContent: "Get in touch with me...",
    },
    pt: {
      title: "Portfólio de Engenharia Mecânica",
      about: "Sobre Mim",
      projects: "Projetos",
      contact: "Contato",
      resume: "Baixar Currículo",
      aboutContent: "Sou um engenheiro mecânico com experiência em...",
      projectsContent: "Aqui estão alguns dos meus projetos...",
      contactContent: "Entre em contato comigo...",
    },
  };

  const currentContent = content[language];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <div className="container mx-auto py-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {currentContent.about}
                </NavigationMenuLink>
              </ScrollLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {currentContent.projects}
                </NavigationMenuLink>
              </ScrollLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {currentContent.contact}
                </NavigationMenuLink>
              </ScrollLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Language Toggle */}
        <div className="flex justify-end mt-4">
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="ml-auto"
          >
            {language === "en" ? "PT 🇧🇷" : "EN 🇺🇸"}
          </Button>
        </div>

        {/* Hero Section with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 text-center"
        >
          <h1 className="text-4xl font-bold">{currentContent.title}</h1>
          <p className="mt-4 text-muted-foreground">
            {language === "en" 
              ? "Welcome to my professional portfolio" 
              : "Bem-vindo ao meu portfólio profissional"}
          </p>
          <Button className="mt-6">
            {currentContent.resume}
          </Button>
        </motion.div>

        {/* About Section */}
        <Element name="about" className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{currentContent.about}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "About Me" : "Sobre Mim"}</CardTitle>
                <CardDescription>
                  {language === "en" 
                    ? "Mechanical Engineer with expertise in design and analysis" 
                    : "Engenheiro Mecânico com experiência em design e análise"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{currentContent.aboutContent}</p>
              </CardContent>
            </Card>
          </motion.div>
        </Element>

        {/* Projects Section with Carousel */}
        <Element name="projects" className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{currentContent.projects}</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3].map((item) => (
                  <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardHeader>
                        <CardTitle>{language === "en" ? `Project ${item}` : `Projeto ${item}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{language === "en" 
                          ? `This is a sample project ${item}` 
                          : `Este é um projeto de exemplo ${item}`}</p>
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
        <Element name="contact" className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{currentContent.contact}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "Get in Touch" : "Entre em Contato"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="email">
                    <AccordionTrigger>
                      {language === "en" ? "Email" : "E-mail"}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>example@email.com</p>
                      <Button className="mt-2">
                        {language === "en" ? "Send Email" : "Enviar E-mail"}
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="phone">
                    <AccordionTrigger>
                      {language === "en" ? "Phone" : "Telefone"}
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

        {/* Sheet Example */}
        <div className="py-8 text-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                {language === "en" ? "Open Sheet" : "Abrir Painel"}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {language === "en" ? "Sheet Example" : "Exemplo de Painel"}
                </SheetTitle>
                <SheetDescription>
                  {language === "en" 
                    ? "This is an example of the Sheet component" 
                    : "Este é um exemplo do componente Sheet"}
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p>
                  {language === "en" 
                    ? "This could be used for additional information or forms" 
                    : "Isso poderia ser usado para informações adicionais ou formulários"}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* HoverCard Example */}
        <div className="py-8 text-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">
                {language === "en" ? "Hover me" : "Passe o mouse aqui"}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    {language === "en" ? "Hover Card Example" : "Exemplo de Hover Card"}
                  </h4>
                  <p className="text-sm">
                    {language === "en" 
                      ? "This is an example of the HoverCard component" 
                      : "Este é um exemplo do componente HoverCard"}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* ScrollArea Example */}
        <div className="py-8">
          <h3 className="text-lg font-medium mb-2">
            {language === "en" ? "Scroll Area Example" : "Exemplo de Área de Rolagem"}
          </h3>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="rounded-md border p-2">
                  {language === "en" ? `Item ${i + 1}` : `Item ${i + 1}`}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
