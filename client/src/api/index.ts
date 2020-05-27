import {
  map,
  toAlbumItem,
  toAlbum,
  toPhoto,
  toUserListItem,
  toUser,
} from "./map";
import * as client from "./client";

type GetAlbum = {
  id: string;
};
type GetAlbumPhotosList = {
  albumId: string;
};
type GetAlbumPhoto = {
  albumId: string;
  id: string;
};

type GetUser = {
  id: string;
};

const API = {
  login: {
    post: ({ email, password }: PostLogin) => client.login(email, password),
  },
  albums: {
    list: () => client.get(`/albums`).then(map(toAlbumItem)),
    get: ({ id }: GetAlbum) => client.get("/albums/" + id).then(toAlbum),
    photos: {
      list: ({ albumId }: GetAlbumPhotosList) =>
        client.get(`/album/${albumId}/photos`).then(map(toPhoto)),
      get: ({ albumId, id }: GetAlbumPhoto) =>
        client.get(`/photos/${id}`).then(toPhoto),
    },
  },
  users: {
    list: () => client.get("/users").then(map(toUserListItem)),
    get: ({ id }: GetUser) => client.get(`/users/${id}`).then(toUser),
  },
};

export default API;
