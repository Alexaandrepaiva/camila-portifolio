"use client"

import { Button } from "~/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "~/components/ui/navigation-menu";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, Check } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useTranslation, type Language, type TranslationKey } from "~/lib/i18n";

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
                {tKey("contact")}
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
  );
} 