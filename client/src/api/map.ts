import { AlbumItem, Album, Photo, UserListItem, User } from "./types";

export const map = <T>(fn: (x: any) => T) => (xs: any) => (xs as any[]).map(fn);

export const toAlbumItem = (album: any): AlbumItem => ({
  id: album.id || "",
  title: album.title || "",
});

export const toAlbum = (album: any): Album => ({
  id: album.id || "",
  title: album.title || "",
  description: album.description || "",
  photosCount: album.photosCount || "",
});

export const toPhoto = (photo: any): Photo => ({
  id: photo.id || "",
  albumId: photo.albumId || "",
  title: photo.title || "",
  url: photo.url || "",
  thumbnailUrl: photo.thumbnailUrl || "",
});

export const toUserListItem = (user: any): UserListItem => ({
  id: user.id || "",
  name: user.name || "",
  email: user.email || "",
  avatarUrl: {
    thumb: user.avatarUrlThumb || "http://placehold.it/40/aaaaaa",
  },
});

export const toUser = (user: any): User => ({
  id: user.id || "",
  name: user.name || "",
  username: user.username || "",
  email: user.email || "",
  address: {
    street: user?.address?.street || "",
    city: user?.address?.city || "",
    zipcode: user?.address?.zipcode || "",
    geo: {
      lat: user?.address?.geo?.lat || "",
      lng: user?.address?.geo?.lng || "",
    },
  },
  phone: user.id || "",
  website: user.id || "",
  company: {
    name: user?.company.id || "",
    bs: user?.company.id || "",
  },
});
