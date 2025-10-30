import api from './api';

export const getCategory=()=>api.get(`/categories`);
export const getSingleCategory=(id)=>api.get(`/categories${id}`);
export const createCategory=()=>api.post('/categories');
export const deleteCategory=(id)=>api.delete(`/categories${id}`);