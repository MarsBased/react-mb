import React from "react";

type Props = {
  label: string;
};

const Tag: React.FC<Props> = ({ label }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
    {label}
  </span>
);

export default Tag;
