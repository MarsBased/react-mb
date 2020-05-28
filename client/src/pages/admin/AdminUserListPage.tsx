import React from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { useIntl } from "react-intl";
import useQuery from "../../hooks/useQuery";
import API from "../../api";

const AdminUserListPage: React.FC = () => {
  const { formatMessage: f } = useIntl();
  const { data: users, status } = useQuery(() => API.users.list());

  console.log("RENDER", AdminUserListPage.name);

  return (
    <Layout
      breadcrumbs={[
        { label: "admin", to: routes.admin.root() },
        { label: "users" },
      ]}
    >
      <h1 className="text-4xl mb-4">{f({ id: "ADMIN_USERS_TITLE" })}</h1>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-muted">
            <th className="py-2">Avatar</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" && <Spinner />}
          {users &&
            users.map((user) => (
              <tr className="border-b border-muted" key={user.id}>
                <td className="py-2">
                  <img
                    className="rounded-full"
                    src={user.avatarUrl.thumb}
                    alt={user.name}
                  />
                </td>
                <td className="py-2">
                  <Link
                    to={routes.admin.user(user.id)}
                    className="text-accent hover:underline"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="py-2">{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default AdminUserListPage;
