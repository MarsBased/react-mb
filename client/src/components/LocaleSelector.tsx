import React from "react";
import useLocale from "../hooks/useLocale";

const LocaleSelector: React.FC = () => {
  const { locale, setLocale, availableLocales } = useLocale();

  return (
    <div className="flex pr-4 border-l">
      {availableLocales.map((item) => (
        <button
          key={item}
          onClick={() => setLocale(item)}
          className={`px-2 border-r border-muted-light uppercase ${
            item === locale ? "text-accent" : ""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LocaleSelector;
