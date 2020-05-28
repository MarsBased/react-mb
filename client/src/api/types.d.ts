export type UserListItem = {
  id: string;
  name: string;
  email: string;
  avatarUrl: {
    thumb: string;
  };
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    bs: string;
  };
};

export type AlbumListItem = {
  id: string;
  title: string;
  description: string;
};

export type Album = {
  id: string;
  title: string;
  description: string;
  photosCount: number;
};

export type Photo = {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};
