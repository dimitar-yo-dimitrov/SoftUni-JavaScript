import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get(host + `/data/books?sortBy=_createdOn%20desc`);
}

export async function getById(id) {
  return api.get(host + `/data/books/${id}`);
}

export async function create(data) {
  return api.post(host + "/data/books", data);
}

export async function edit(id, data) {
  return api.put(host + `/data/books/${id}`, data);
}

export async function deleteById(id) {
  return api.del(host + `/data/books/${id}`);
}

export async function getUserBooks(userId) {
  return api.get(
    host +
      `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function addLike(bookId) {
  return api.post(host + "/data/likes", { bookId });
}

export async function getLikes(bookId) {
  let likes;

  likes = api.get(
    host + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`
  );

  return likes;
}

export async function userLiked(bookId, userId) {
  if (!userId) {
    return false;
  } else {
    const likes = await api.get(host + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return likes.length > 0;
  }
}
