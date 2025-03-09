import enCommon from '~/messages/en/common.json';
import ptCommon from '~/messages/pt/common.json';

export type Language = 'en' | 'pt';

export type TranslationKey = keyof typeof enCommon;

const translations = {
  en: {
    common: enCommon,
  },
  pt: {
    common: ptCommon,
  },
};

export function useTranslation(language: Language) {
  const t = (key: TranslationKey): string => {
    return translations[language].common[key] || key;
  };

  return { t };
} 