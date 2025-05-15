import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const fetchPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

export const fetchComments = async () => {
  const res = await axios.get(`${BASE_URL}/comments`);
  return res.data;
};
