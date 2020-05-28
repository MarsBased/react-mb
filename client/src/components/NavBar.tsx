import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import LocaleSelector from "./LocaleSelector";
import ThemeSelector from "./ThemeSelector";
import { useIntl } from "react-intl";

type Props = {};

const NavBar: React.FC<Props> = () => {
  const { formatMessage: f } = useIntl();
  const user = { admin: true, name: "user" };
  const loggedIn = true;
  const notLoggedIn = true;
  const isAdmin = user && user.admin;

  return (
    <nav className="text-muted-light flex items-center w-full bg-header border-b py-2">
      <div className="mx-4 flex items-center flex-grow">
        <Link to="/">
          <h1 className="text-xl">{f({ id: "APP_NAME" })}</h1>
        </Link>
        {loggedIn && (
          <>
            <Link className="ml-4" to={routes.albums()}>
              Albums
            </Link>
          </>
        )}
        {isAdmin && (
          <>
            <Link className="ml-4" to={routes.admin.users()}>
              Users
            </Link>
          </>
        )}
      </div>
      {notLoggedIn && (
        <>
          <Link className="mx-4" to={routes.about()}>
            About
          </Link>
        </>
      )}
      <LocaleSelector />
      <ThemeSelector className="bg-header hover:bg-page hover:text-default" />
      {loggedIn && (
        <div className="mr-8">
          <Link className="ml-4" to={routes.account()}>
            {user.name}
          </Link>
        </div>
      )}
      {notLoggedIn && (
        <div className="mr-8">
          <Link className="ml-4" to={routes.login()}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
