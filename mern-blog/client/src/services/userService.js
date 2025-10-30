import api from './api';

export const register=()=>api.post(`/auth/register`);
export const login=()=>api.post(`/auth/login`);
export const getProfile=()=>api.get('/auth/profile');
