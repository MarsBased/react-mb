import React from "react";

const availableLocales = ["ca", "es", "en"];

const LocaleSelector: React.FC = () => {
  const locale = "en";
  return (
    <div className="flex pr-4 border-l">
      {availableLocales.map((item) => (
        <button
          key={item}
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
