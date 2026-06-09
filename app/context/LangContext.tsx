"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../../locales/en.json";
import id from "../../locales/id.json";

export type Lang = "en" | "id";

type TranslationValue = string | string[] | { value: string; label: string }[] | { text: string }[] | {
  period: string; role: string; company: string; description: string; tags: string[];
}[];

type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, id };

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved && (saved === "en" || saved === "id")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
