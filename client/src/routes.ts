const routes = {
  root: () => `/`,
  about: () => `/about`,
  login: () => `/login`,
  account: () => `/account`,
  recoverPassword: () => `/password-recovery`,
  albums: () => `/albums`,
  album: (id: string) => `/albums/${id}`,
  albumPhoto: (albumId: string, photoId: string) =>
    `/albums/${albumId}/photo/${photoId}`,
  admin: {
    root: () => `/admin`,
    users: () => `/admin/users`,
    user: (id: string) => `/admin/users/${id}`,
  },
};

export default routes;
