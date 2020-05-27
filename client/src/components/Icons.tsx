import React from "react";

type Props = {
  className?: string;
};

export const ThemeIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" version="1.1">
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="currentColor"
      fillRule="evenodd"
    >
      <g id="icon-shape">
        <path
          d="M10,2 C14.418278,2 18,5.581722 18,10 C18,14.418278 14.418278,18 10,18 L10,2 Z M10,20 C15.5228475,20 20,15.5228475 20,10 C20,4.4771525 15.5228475,0 10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 Z"
          id="Combined-Shape"
        ></path>
      </g>
    </g>
  </svg>
);
