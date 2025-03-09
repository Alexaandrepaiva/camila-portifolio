"use client"

import { type TranslationKey } from "~/lib/i18n";

interface FooterProps {
  t: (key: TranslationKey) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 text-center border-t">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t("footer")}
      </p>
    </footer>
  );
} 