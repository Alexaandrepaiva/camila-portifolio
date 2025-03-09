"use client"

import { Button } from "~/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { type Language } from "~/lib/i18n";

interface LanguageSelectorProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export function LanguageSelector({ language, setLanguage }: LanguageSelectorProps) {
  return (
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
  );
} 