import axios from 'axios';
import { IPost } from '../types/post';

export const API = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => API.get<IPost[]>('/posts').then((res) => res.data);
