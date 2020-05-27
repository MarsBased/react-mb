import ky from "ky";
import config from "../config";
import { getAuthHeaders } from "../auth";

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
