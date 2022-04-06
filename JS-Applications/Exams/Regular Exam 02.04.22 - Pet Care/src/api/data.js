import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAll(){
    return api.get(host + `/data/pets?sortBy=_createdOn%20desc&distinct=name`);
}

export async function getById(id){
    return api.get(host + `/data/pets/${id}`);
}

export async function create(data){
    return api.post(host + '/data/pets', data);
}

export async function edit(id, data){
    return api.put(host + `/data/pets/${id}`, data);
}

export async function deleteById(id){
    return api.del(host + `/data/pets/${id}`);
}

export async function addDonation(petId) {
    return api.post(host + "/data/donation", { petId });
  }
  
  export async function getDonations(petId) {
  
    return api.get(host + `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
  }
  
  export async function userDonation(petId, userId) {
    if (!userId) {
        return false;
      } else {
     let donations = await api.get(host + `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
      return donations.length > 0;
    }
  }
