import React from "react";
import { ThemeIcon } from "./Icons";

type Props = {
  className?: string;
};

const ThemeSelector: React.FC<Props> = ({ className = "" }) => {
  const theme = "light";
  return (
    <button
      className={`${className} flex items-center px-4 rounded-full capitalize`}
    >
      <ThemeIcon className="h-4 w-4 mr-2" />
      {theme}
    </button>
  );
};

export default ThemeSelector;
