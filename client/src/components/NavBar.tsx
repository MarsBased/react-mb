import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import LocaleSelector from "./LocaleSelector";

const NavBar: React.FC = () => {
  const user = { loggedIn: true, admin: true, name: "Username" };
  const theme = "ligth";
  return (
    <nav className="text-muted-light flex items-center w-full bg-header border-b py-2">
      <div className="mx-4 flex items-center flex-grow">
        <Link to="/">
          <h1 className="text-xl">React Hooks</h1>
        </Link>
        {user.loggedIn && (
          <Link className="ml-4" to={routes.albums()}>
            Albums
          </Link>
        )}
        {user.admin && (
          <Link className="ml-4 text-muted-light" to={routes.admin.users()}>
            Users
          </Link>
        )}
      </div>
      <Link className="mx-4" to={routes.about()}>
        About
      </Link>
      <LocaleSelector />
      <button>{theme}</button>
      <div className="mr-8">
        <Link className="ml-4" to={routes.account()}>
          {user.name}
        </Link>
      </div>
      <div className="mr-8">
        <Link className="ml-4" to={routes.login()}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
