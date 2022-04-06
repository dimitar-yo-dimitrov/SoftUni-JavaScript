import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get(host + `/data/theaters?sortBy=_createdOn%20desc&distinct=title`);
}

export async function getById(id) {
  return api.get(host + `/data/theaters/${id}`);
}

export async function create(data) {
  return api.post(host + "/data/theaters", data);
}

export async function edit(id, data) {
  return api.put(host + `/data/theaters/${id}`, data);
}

export async function deleteById(id) {
  return api.del(host + `/data/theaters/${id}`);
}

export async function getUserTheaters(id) {
  return api.get(host + `/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
}

export async function addLike(theaterId) {
  return api.post(host + "/data/likes", { theaterId });
}
export async function getLikes(theaterId) {

  return api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function userLiked(theaterId, userId) {
    let likes = await api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&`);
    return likes.length > 0;
}
