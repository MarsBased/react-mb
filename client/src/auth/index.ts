import * as client from "./client";

const STORAGE_KEY = "token";

let token: string = localStorage.getItem(STORAGE_KEY) || "";

export function setAuthToken(newToken: string) {
  token = newToken;
  localStorage.setItem(STORAGE_KEY, token);
}

export function getAuthHeaders() {
  return token ? { "x-access-token": token } : {};
}

type PostLogin = {
  email: string;
  password: string;
};

const API = {
  login: ({ email, password }: PostLogin) => client.login(email, password),
  logout: () => Promise.resolve({}),
};

export default API;
