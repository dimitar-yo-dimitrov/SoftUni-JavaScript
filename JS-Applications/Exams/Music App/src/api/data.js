import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(host + `/data/albums?sortBy=_createdOn%20desc&distinct=name`);
}

export async function getById(id){
    return api.get(host + `/data/albums/${id}`);
}

export async function create(data){
    return api.post(host + '/data/albums', data);
}

export async function edit(id, data){
    return api.put(host + `/data/albums/${id}`, data);
}

export async function deleteById(id){
    return api.del(host + `/data/albums/${id}`);
}

export async function search(query){
    return api.get(host + `/data/albums?where=name%20LIKE%20%22${query}%22`);
}