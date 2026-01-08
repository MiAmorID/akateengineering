import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import en from '../i18n/en.json';
import id from '../i18n/id.json';

type Lang = 'en' | 'id';

const translations: Record<Lang, Record<string, any>> = {
  en,
  id
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => any;
  data: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
  data: translations['en']
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');

  // Expose current language on window for quick dev inspection
  useEffect(() => {
    try {
      (window as any).__CURRENT_LANG__ = lang;
    } catch (e) {
      // ignore (server-side environments)
    }
  }, [lang]);

  const t = (key: string) => {
    const langData = translations[lang] || {};

    // First check for flat keys (e.g., "nav.home") that exist as-is
    if (key in langData) return langData[key];

    // Otherwise support nested keys using dot notation
    const parts = key.split('.');
    let cur: any = langData;
    for (const p of parts) {
      if (cur && p in cur) cur = cur[p];
      else return translations['en'][key] || key;
    }
    return cur;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, data: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
