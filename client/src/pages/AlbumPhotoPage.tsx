import React from "react";
import Layout from "../components/Layout";
import { useRouteMatch } from "react-router-dom";
import routes from "../routes";
import Spinner from "../components/Spinner";
import { Album, Photo } from "../api/types";
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
    API.albums.photos.get({ id: params.photoId, albumId: params.albumId })
  );

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
