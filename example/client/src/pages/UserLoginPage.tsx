import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/user/LoginForm";

const UserLoginPage: React.FC = () => {
  const { user } = {
    user: undefined,
  };

  if (user) return null;

  return (
    <Layout>
      <LoginForm onLogin={(credentials) => console.log("LOGIN", credentials)} />
    </Layout>
  );
};

export default UserLoginPage;
