import React from "react";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  title: string;
  to?: string;
  lorem?: string;
  imageUrl: string;
};

const Card: React.FC<Props> = ({ className, title, lorem, imageUrl, to }) => (
  <div
    className={`${className} bg-card max-w-xs rounded overflow-hidden shadow-lg mr-4 mb-4`}
  >
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        {to ? <Link to={to}>{title}</Link> : title}
      </div>
      {lorem && <p className="text-gray-700 text-base">{lorem}</p>}
    </div>
  </div>
);

export default Card;
