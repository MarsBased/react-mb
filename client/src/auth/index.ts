import * as client from "./client";

type PostLogin = {
  email: string;
  password: string;
};

const API = {
  login: ({ email, password }: PostLogin) => client.login(email, password),
  logout: () => client.logout(),
};

export default API;
