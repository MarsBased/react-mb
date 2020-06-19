import ky from "ky";
import config from "../config";

let token: string = "";

export function setAuthToken(newToken: string) {
  token = newToken;
}

export function getAuthHeaders() {
  return token ? { "x-access-token": token } : {};
}

const URL = config.apiUrl;

export async function get(path: string) {
  return ky
    .get(URL + path, {
      headers: getAuthHeaders(),
    })
    .json();
}

export async function post(path: string) {
  return ky
    .post(URL + path, {
      headers: getAuthHeaders(),
    })
    .json();
}
