import React from "react";
import Layout from "../components/Layout";
import useTheme from "../hooks/useTheme";
import useUser from "../hooks/useUser";
import { Redirect } from "react-router-dom";
import routes from "../routes";

const UserAccountPage: React.FC = () => {
  const theme = useTheme();
  const { user, setUser } = useUser();

  if (!user) return <Redirect to={routes.login()} />;

  console.log("RENDER", UserAccountPage.name);

  return (
    <Layout>
      <div>
        <div className="mb-8">
          {user.admin && <div className="font-medium">Administrator</div>}
          <h1 className="font-medium text-2xl">{user.name}</h1>
        </div>
        <button className="btn mr-4 capitalize" onClick={theme.toggle}>
          {theme.value}
        </button>
        <button className="btn" onClick={() => setUser()}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default UserAccountPage;
