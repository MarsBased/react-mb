import React from "react";
import Layout from "../components/Layout";
import { useRouteMatch, Link } from "react-router-dom";
import Card from "../components/Card";
import routes from "../routes";
import LoadingPage from "./LoadingPage";

type RouteParams = {
  id: string;
};

const AlbumPage: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const album = FAKE_ALBUM;
  const albumStatus: string = "";
  const photos = FAKE_PHOTOS;
  const photosStatus: string = "";

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

// const { data: album, status: albumStatus } = useQuery(
//   ["album", { id: params.id }],
//   (_, params) => api.albums.get(params)
// );
// const { data: photos, status: photosStatus } = useQuery(
//   ["photos", { albumId: params.id }],
//   (_, params) => api.albums.photos.list(params)
// );

const FAKE_ALBUM = {
  id: "1",
  title: "et libero quasi",
  description: "",
  photosCount: "",
};

const FAKE_PHOTOS = [
  {
    id: "1",
    albumId: "1",
    title: "quirem",
    url: "http://placehold.it/600/a15aae",
    thumbnailUrl: "http://placehold.it/150/a15aae",
  },
  {
    id: "2",
    albumId: "1",
    title: "repud",
    url: "http://placehold.it/600/993671",
    thumbnailUrl: "http://placehold.it/150/993671",
  },
];
