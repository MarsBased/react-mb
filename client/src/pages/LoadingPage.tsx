import React from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const LoadingPage: React.FC = () => {
  console.log("RENDER", LoadingPage.name);
  return (
    <Layout>
      <Spinner />
    </Layout>
  );
};

export default LoadingPage;
