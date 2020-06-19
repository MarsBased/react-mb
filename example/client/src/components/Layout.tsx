import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

type Breadcrumb = {
  label: string;
  to?: string;
};

type Props = {
  breadcrumbs?: Breadcrumb[];
};

const Layout: React.FC<Props> = ({ breadcrumbs = [], children }) => {
  return (
    <div className="flex flex-col text-default">
      <NavBar />
      <div className="container mx-auto my-16 px-4">
        <div className="flex text-muted" data-testid="breadcrumbs">
          {breadcrumbs.reduce((components, bc, i) => {
            if (i > 0) {
              components.push(
                <label key={"separator-" + i} className="px-2">
                  {"/"}
                </label>
              );
            }
            if (bc.to) {
              components.push(
                <Link key={bc.label} className="text-accent" to={bc.to}>
                  {bc.label}
                </Link>
              );
            } else {
              components.push(<label key={bc.label}>{bc.label}</label>);
            }

            return components;
          }, [] as JSX.Element[])}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
