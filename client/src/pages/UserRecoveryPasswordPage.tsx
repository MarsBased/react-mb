import React from "react";
import Layout from "../components/Layout";
import RecoveryPasswordForm from "../components/user/RecoveryPasswordForm";

const UserRecoveryPasswordPage: React.FC = () => {
  console.log("RENDER", UserRecoveryPasswordPage.name);
  return (
    <Layout>
      <RecoveryPasswordForm />
    </Layout>
  );
};

export default UserRecoveryPasswordPage;
