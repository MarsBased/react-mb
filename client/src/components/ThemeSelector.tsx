import React from "react";
import { ThemeIcon } from "./Icons";
import useTheme from "../hooks/useTheme";

type Props = {
  className?: string;
};

const ThemeSelector: React.FC<Props> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  console.log("RENDER", ThemeSelector.name);
  return (
    <button
      onClick={toggleTheme}
      className={`${className} flex items-center px-4 rounded-full capitalize`}
    >
      <ThemeIcon className="h-4 w-4 mr-2" />
      {theme}
    </button>
  );
};

export default ThemeSelector;
