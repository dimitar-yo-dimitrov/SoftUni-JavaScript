import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(host + `/data/games?sortBy=_createdOn%20desc`);
}

export async function getRecent(){
    return api.get(host + `/data/games?sortBy=_createdOn%20desc&distinct=category`);
}

export async function getById(id){
    return api.get(host + `/data/games/${id}`);
}

export async function create(data){
    return api.post(host + '/data/games', data);
}

export async function edit(id, data){
    return api.put(host + `/data/games/${id}`, data);
}

export async function deleteById(id){
    return api.del(host + `/data/games/${id}`);
}

export async function search(query){
    return api.get(host + `/data/albums?where=name%20LIKE%20%22${query}%22`);
}

export async function getComments(gameId) {
    return api.get(host + `/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function createComment(gameId, comment) {
    return api.post(host + '/data/comments', { gameId, comment });
}