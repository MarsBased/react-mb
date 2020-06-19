import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const NewAlbumForm: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  return (
    <form className="flex flex-col max-w-sm mx-auto bg-gray-200 rounded p-4">
      <h1 className="font-medium text-2xl mb-4">Login</h1>
      <div className="py-2 flex flex-col">
        <label>Recovery</label>
        <input
          className="p-2 border my-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4 flex items-center">
        <button
          className="px-4 py-2 rounded-full text-white bg-green-600 hover:bg-green-500"
          type="submit"
        >
          Send recovery
        </button>
        <Link className="ml-4" to="/forgot-password">
          Back to login
        </Link>
      </div>
    </form>
  );
};

export default NewAlbumForm;
