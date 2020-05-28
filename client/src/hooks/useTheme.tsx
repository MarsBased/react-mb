import React, { createContext, useContext, useMemo } from "react";
import useLocalStorageState from "./useLocalStorageState";
import { useEffect } from "react";

export type Theme = {
  value: string;
  toggle: () => void;
};

const ThemeContext = createContext<Theme>({
  value: "light",
  toggle: () => undefined,
});

export default function useTheme(): Theme {
  return useContext(ThemeContext);
}

export const ThemeProvider: React.FC = ({ children }) => {
  const [value, setTheme] = useLocalStorageState("THEME", "light");

  useEffect(() => {
    if (value === "light") {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    }
  }, [value]);

  const theme: Theme = useMemo(() => {
    const toggle = () => {
      setTheme(value === "light" ? "dark" : "light");
    };
    return { value, toggle };
  }, [value, setTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
