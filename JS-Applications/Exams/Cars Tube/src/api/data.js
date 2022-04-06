import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll() {
  return api.get(host + `/data/cars?sortBy=_createdOn%20desc`);
}

export async function getById(id) {
  return api.get(host + `/data/cars/${id}`);
}

export async function create(data) {
  return api.post(host + "/data/cars", data);
}

export async function edit(id, data) {
  return api.put(host + `/data/cars/${id}`, data);
}

export async function deleteById(id) {
  return api.del(host + `/data/cars/${id}`);
}

export async function getByYear(year) {
    return api.get(host + `/data/cars?where=year%3D${year}`)
}

export async function getUserCars(userId) {
  return api.get(
    host +
      `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}
