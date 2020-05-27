import React from "react";
import Layout from "../components/Layout";
import routes from "../routes";

const AboutPage: React.FC = () => {
  console.log("RENDER", AboutPage.name);
  return (
    <Layout breadcrumbs={[{ label: "home", to: routes.root() }]}>
      <h1 className="text-4xl">AboutPage</h1>
    </Layout>
  );
};

export default AboutPage;
