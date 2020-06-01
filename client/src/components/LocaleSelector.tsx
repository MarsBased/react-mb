import React from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const availableLocales = ["ca", "es", "en"];

const LocaleSelector: React.FC = () => {
  const [locale, setLocale] = useLocalStorageState("LOCALE", "en");

  return (
    <div className="flex pr-4 border-l">
      {availableLocales.map((item) => (
        <button
          key={item}
          className={`px-2 border-r border-muted-light uppercase ${
            item === locale ? "text-accent" : ""
          }`}
          onClick={() => {
            setLocale(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LocaleSelector;
