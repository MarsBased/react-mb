import React from "react";
import Layout from "../../components/Layout";
import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import routes from "../../routes";
import api from "../../api";
import LoadingPage from "../LoadingPage";

type RouteParams = {
  id: string;
};

const AdminUserDetailPage: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const user = FAKE_DATA;
  const status: string = "";

  console.log("RENDER", AdminUserDetailPage.name, params);

  if (status === "loading") return <LoadingPage />;

  return (
    <Layout
      breadcrumbs={[
        { label: "admin", to: routes.admin.root() },
        { label: "users", to: routes.admin.users() },
        { label: "user" },
      ]}
    >
      <h1 className="text-4xl mb-4">{user && user.name}</h1>
      <div>{user && user.email}</div>
    </Layout>
  );
};

export default AdminUserDetailPage;

const FAKE_DATA = {
  id: "1",
  name: "Grace Hopper",
  email: "grace.hopper@nasa.gov",
};
