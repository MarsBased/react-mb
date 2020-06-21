import * as client from "./client";

type PostLogin = {
  email: string;
  password: string;
};

const AUTH = {
  login: ({ email, password }: PostLogin) => client.login(email, password),
  logout: () => client.logout(),
};

export default AUTH;
