import React from "react";
import Layout from "../components/Layout";
import { useRouteMatch, Link } from "react-router-dom";
import Card from "../components/Card";
import routes from "../routes";
import LoadingPage from "./LoadingPage";
import { Album, Photo } from "../api/types";
import useQuery from "../hooks/useQuery";
import API from "../api";

type RouteParams = {
  id: string;
};

const AlbumPage: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const { data: album, status: albumStatus } = useQuery(() =>
    API.albums.get({ id: params.id })
  );

  const { data: photos, status: photosStatus } = useQuery(() =>
    API.albums.photos.list({ albumId: params.id })
  );

  console.log("RENDER", AlbumPage.name, params);

  if (albumStatus === "loading" && photosStatus === "loading")
    return <LoadingPage />;

  return (
    <Layout
      breadcrumbs={[
        { label: "home", to: routes.root() },
        { label: "albums", to: routes.albums() },
        { label: "album" },
      ]}
    >
      <h1 className="text-4xl mb-4">
        {(album && album.title) || "Loading..."}
      </h1>
      <div className="flex flex-wrap">
        {photos &&
          photos.map((photo) => (
            <Link
              key={photo.id}
              className="w-1/5"
              to={routes.albumPhoto(photo.albumId, photo.id)}
            >
              <Card title={photo.title} imageUrl={photo.thumbnailUrl} />
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default AlbumPage;
