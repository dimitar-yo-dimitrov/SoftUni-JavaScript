import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get(host + `/data/memes?sortBy=_createdOn%20desc`);
}

export async function getById(id) {
  return api.get(host + `/data/memes/${id}`);
}

export async function create(data) {
  return api.post(host + "/data/memes", data);
}

export async function edit(id, data) {
  return api.put(host + `/data/memes/${id}`, data);
}

export async function deleteById(id) {
  return api.del(host + `/data/memes/${id}`);
}

export async function getUserMemes(userId) {
  return api.get(
    host +
      `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}
