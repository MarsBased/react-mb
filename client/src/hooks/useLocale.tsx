import React, { createContext, useContext } from "react";
import { IntlProvider } from "react-intl";
import en from "../locales/en-GB";
import es from "../locales/es-ES";
import ca from "../locales/es-CA";
import useLocalStorageState from "./useLocalStorageState";

const AvailableLocalesMap = {
  en,
  es,
  ca,
} as const;

type Locale = keyof typeof AvailableLocalesMap;
const availableLocales: Locale[] = Object.keys(AvailableLocalesMap) as Locale[];

type LocaleContextState = {
  locale: Locale;
  availableLocales: Locale[];
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextState>({
  locale: "en",
  availableLocales,
  setLocale: () => undefined,
});

export const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useLocalStorageState<Locale>("LOCALE", "en");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, availableLocales }}>
      <IntlProvider locale={locale} messages={AvailableLocalesMap[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default function useLocale() {
  return useContext(LocaleContext);
}
