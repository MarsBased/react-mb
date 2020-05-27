import React, { useContext } from "react";
import Layout from "../components/Layout";

const UserAccountPage: React.FC = () => {
  console.log("RENDER", UserAccountPage.name);
  const user = { admin: true, name: "Username" };

  return (
    <Layout>
      <div>
        <div className="mb-8">
          {user.admin && <div className="font-medium">Administrator</div>}
          <h1 className="font-medium text-2xl">{user.name}</h1>
        </div>
        <button className="btn">Logout</button>
      </div>
    </Layout>
  );
};

export default UserAccountPage;
