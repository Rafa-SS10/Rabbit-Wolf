import axios from 'axios';

// const API_URL = 'https://reqres.in/api/users';
const API_URL = 'http://localhost:4000/data';

export const getItems = () => axios.get(API_URL);
export const createItem = (item) => axios.post(API_URL, item);
export const updateItem = (id, item) => axios.put(`${API_URL}/${id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);