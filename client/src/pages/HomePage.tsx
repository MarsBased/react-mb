import React from "react";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  console.log("RENDER", HomePage.name);

  return (
    <Layout>
      <h1 className="text-4xl">HomePage</h1>
    </Layout>
  );
};

export default HomePage;
