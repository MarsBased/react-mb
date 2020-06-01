import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useRouteMatch } from "react-router-dom";
import routes from "../routes";
import Spinner from "../components/Spinner";
import useQuery from "../hooks/useQuery";
import API from "../api";

type RouteParams = {
  albumId: string;
  photoId: string;
};

const AlbumPhotoPage: React.FC = () => {
  console.log("RENDER", AlbumPhotoPage.name);

  const { params } = useRouteMatch<RouteParams>();

  const { data: album } = useQuery(() =>
    API.albums.get({ id: params.albumId })
  );
  const { data: photo, status: photoStatus } = useQuery(() =>
    API.albums.photos.get({ albumId: params.albumId, id: params.photoId })
  );

  useEffect(() => {
    if (album && photo) {
    }
  }, [album, photo]);

  // const album: Album = FAKE_ALBUM;
  // const photo: Photo = params.photoId === "2" ? FAKE_PHOTOS[1] : FAKE_PHOTOS[0];
  // const photoStatus: string = "";

  return (
    <Layout
      breadcrumbs={[
        { label: "home", to: routes.root() },
        { label: "albums", to: routes.albums() },
        {
          label: album ? album.title : "album",
          to: routes.album(params.albumId),
        },
        { label: "photo" },
      ]}
    >
      <h1 className="text-4xl mb-4">{photo ? photo.title : "Loading..."}</h1>
      {photoStatus === "loading" && <Spinner />}
      {photo && (
        <div>
          <img src={photo.url} alt={photo.title} />
        </div>
      )}
    </Layout>
  );
};

export default AlbumPhotoPage;

// const { data: album } = useQuery(
//   ["album", { id: params.albumId }],
//   (_, params) => api.albums.get(params)
// );
// const { data: photo, status: photoStatus } = useQuery(
//   ["album", { albumId: params.albumId, id: params.photoId }],
//   (_, params) => api.albums.photos.get(params)
// );

const FAKE_ALBUM = {
  id: "1",
  title: "et libero quasi",
  description: "",
  photosCount: 2,
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
