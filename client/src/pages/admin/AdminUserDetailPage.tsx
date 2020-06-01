import React from "react";
import Layout from "../../components/Layout";
import { useRouteMatch } from "react-router-dom";
import routes from "../../routes";
import LoadingPage from "../LoadingPage";
import useQuery from "../../hooks/useQuery";
import API from "../../api";

type RouteParams = {
  id: string;
};

const AdminUserDetailPage: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const { data: user, status } = useQuery(() =>
    API.users.get({ id: params.id })
  );

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
