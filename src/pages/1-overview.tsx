import React, { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState<number>(5);
  return (
    <div className="container mx-auto p-16">
      <h1 className="text-4xl mb-8">El problema del estado</h1>
      <ul className="mb-8">
        <li>Cuanto más cerca del componente, menos boilerplate</li>
        <li>Cuanto más lejos del componente, más poder</li>
      </ul>
      <div className="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <Square
            id={id}
            active={id === activeId}
            onClick={() => setActiveId(id)}
          />
        ))}
      </div>
    </div>
  );
}

type Props = {
  id: number;
  active: boolean;
  onClick: () => void;
};

const Square: React.FC<Props> = ({ id, active, onClick }) => {
  return (
    <div
      className={`w-8 h-8 text-center leading-8 mr-4 rounded ${
        active ? "bg-orange-500" : "bg-gray-500"
      } `}
      onClick={onClick}
    >
      {id}
    </div>
  );
};

export default App;
