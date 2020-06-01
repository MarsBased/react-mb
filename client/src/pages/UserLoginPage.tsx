import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/user/LoginForm";
import useUser from "../hooks/useUser";
import AUTH from "../auth";

const UserLoginPage: React.FC = () => {
  const { user, setUser } = useUser();

  if (user) return null;

  return (
    <Layout>
      <LoginForm
        onLogin={(credentials) =>
          AUTH.login(credentials).then((user) => setUser(user))
        }
      />
    </Layout>
  );
};

export default UserLoginPage;
