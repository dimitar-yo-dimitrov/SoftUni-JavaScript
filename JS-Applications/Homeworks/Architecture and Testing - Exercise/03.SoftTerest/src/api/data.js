import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getIdeas(){
    return api.get(host + `/data/ideas`);
}

export async function getIdeaById(id){
    return api.get(host + `/data/ideas/${id}`);
}

export async function createIdea(data){
    return api.post(host + '/data/ideas', data);
}

export async function deleteIdea(id){
    return api.del(host + `/data/ideas/${id}`);
}