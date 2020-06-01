import { useEffect } from "react";
import useLocalStorageState from "./useLocalStorageState";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorageState("THEME", "light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
}
