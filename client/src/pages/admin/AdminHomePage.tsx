import React from "react";
import Layout from "../../components/Layout";

const AdminHomePage: React.FC = () => {
  console.log("RENDER", AdminHomePage.name);

  return (
    <Layout breadcrumbs={[{ label: "admin" }]}>
      <h1 className="text-4xl">AdminHomePage</h1>
    </Layout>
  );
};

export default AdminHomePage;
