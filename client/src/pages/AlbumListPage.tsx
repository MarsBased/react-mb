import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import routes from "../routes";
import API from "../api";
import useQuery from "../hooks/useQuery";

const AlbumListPage: React.FC = () => {
  const { data: albums, status } = useQuery(() => API.albums.list());

  console.log("RENDER", AlbumListPage.name);

  return (
    <Layout breadcrumbs={[{ label: "home", to: routes.root() }]}>
      <h1 className="text-4xl mb-4">Albums</h1>
      {status === "loading" && <Spinner />}
      {albums &&
        albums.map((album) => (
          <Link key={album.id} to={routes.album(album.id)}>
            <div className="flex flex-col p-4 my-4 bg-card rounded shadow-sm">
              <h2 className="text-accent text-2xl capitalize">{album.title}</h2>
              <p className="my-4">{album.description}</p>
            </div>
          </Link>
        ))}
    </Layout>
  );
};

export default AlbumListPage;

// const { data: albums, status } = useQuery(["albums"], () =>
//   api.albums.list()
// );

const FAKE_ALBUMS = [
  {
    id: "1",
    title: "et libero quasi",
    description:
      "tenetur ut quis\naspernatur ad vero itaque sit architecto excepturi omnis\nomnis repellendus maiores\nvel dolores unde omnis",
  },
  {
    id: "2",
    title: "in eos occaecati recusandae quia velit aut consectetur",
    description:
      "in est ea mollitia dolores consequatur\nqui est fugit magnam saepe ab praesentium omnis et\na atque eos voluptatem et et natus perspiciatis\nlaborum corporis blanditiis rerum adipisci voluptatem",
  },
];
