import api from './api';

export const getPosts=()=>api.get(`/posts`);
export const getSinglePost=(id)=>api.get(`/posts${id}`);
export const createPosts=()=>api.post('/posts');
export const deletePost=(id)=>api.delete(`/posts${id}`);