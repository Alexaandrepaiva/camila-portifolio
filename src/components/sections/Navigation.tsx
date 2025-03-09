"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "~/components/ui/navigation-menu";
import { Link as ScrollLink } from "react-scroll";
import { type Language } from "~/lib/i18n";
import { LanguageSelector } from "~/components/LanguageSelector";

interface NavigationProps {
  language: Language;
  setLanguage: (language: Language) => void;
  tKey: (key: string) => string;
}

export function Navigation({ language, setLanguage, tKey }: NavigationProps) {
  return (
    <div className="flex justify-between items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ScrollLink to="hero" smooth={true} duration={500} offset={0} className="cursor-pointer">
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                {tKey("home")}
              </NavigationMenuLink>
            </ScrollLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ScrollLink to="experience" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                {tKey("experience")}
              </NavigationMenuLink>
            </ScrollLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ScrollLink to="education" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                {tKey("education")}
              </NavigationMenuLink>
            </ScrollLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                {tKey("skills")}
              </NavigationMenuLink>
            </ScrollLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer">
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                {tKey("contact")}
              </NavigationMenuLink>
            </ScrollLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Language Selector */}
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
} 