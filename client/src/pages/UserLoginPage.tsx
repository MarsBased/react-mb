import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/user/LoginForm";

const UserLoginPage: React.FC = () => {
  const user = { loggedIn: false };

  // if (user.loggedIn) return <Redirect to={routes.root()} />;

  return (
    <Layout>
      <LoginForm onLogin={(data) => console.log("LOGIN", data)} />
    </Layout>
  );
};

export default UserLoginPage;
