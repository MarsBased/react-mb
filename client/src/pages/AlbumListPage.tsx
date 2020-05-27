import React from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import routes from "../routes";

const AlbumListPage: React.FC = () => {
  const albums = FAKE_ALBUMS;
  const status: string = "";

  console.log("RENDER", AlbumListPage.name);

  return (
    <Layout breadcrumbs={[{ label: "home", to: routes.root() }]}>
      <h1 className="text-4xl mb-4">Albums</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2 border-b border-muted">Name</th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" && <Spinner />}
          {albums &&
            albums.map((album) => (
              <tr key={album.id}>
                <td className="py-2 border-b">
                  <Link
                    to={routes.album(album.id)}
                    className="text-green-800 hover:underline"
                  >
                    {album.title}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default AlbumListPage;

// const { data: albums, status } = useQuery(["albums"], () =>
//   api.albums.list()
// );

const FAKE_ALBUMS = [
  { id: "1", title: "et libero quasi" },
  { id: "2", title: "in eos occaecati recusandae quia velit aut consectetur" },
];
