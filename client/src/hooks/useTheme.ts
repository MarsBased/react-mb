import { useState, useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorageState<Theme>("theme", "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const { classList } = document.body;
    if (theme === "light") {
      classList.add("theme-light");
      classList.remove("theme-dark");
    } else {
      classList.add("theme-dark");
      classList.remove("theme-light");
    }
  }, [theme]);

  return { theme, toggleTheme };
}
