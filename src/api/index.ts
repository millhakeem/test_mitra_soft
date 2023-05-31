import axios from 'axios';
import { IPost } from '../types/post';
import { IComment } from '../types/comment';
import { IUser } from '../types/user';

export const API = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => API.get<IPost[]>('/posts').then((res) => res.data);
export const fetchCommentsByPostId = (postId: string) =>
	API.get<IComment[]>(`/posts/${postId}/comments`).then((res) => res.data);
export const fetchUserById = (id: string) => API.get<IUser>(`/users/${id}`).then((res) => res.data);
