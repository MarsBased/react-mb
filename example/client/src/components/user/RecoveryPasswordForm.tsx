import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const RecoveryPasswordForm: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex flex-col max-w-sm mx-auto bg-card rounded p-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-medium text-2xl mb-4">Recover password</h1>
      <div className="py-2 flex flex-col">
        <label>Email</label>
        <input
          className="p-2 border border-muted-light my-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-4 flex items-center">
        <button className="btn" type="submit">
          Send recovery
        </button>
        <Link className="ml-4" to="/forgot-password">
          Back to login
        </Link>
      </div>
    </form>
  );
};

export default RecoveryPasswordForm;
