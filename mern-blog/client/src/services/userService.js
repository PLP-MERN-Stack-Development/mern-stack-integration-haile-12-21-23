import api from './api';

export const registerUser=(data)=>api.post(`/auth/register`,data);
export const login=(data)=>api.post(`/auth/login`,data);
export const getProfile=(token)=>api.get('/auth/profile',{
    headers:{
        Authorization:`Bear ${token}`
    }
});
