import axios from 'axios';

const API = axios.create({ baseURL: "http://140.238.230.250:4545/" });

export const getCategory = ( categoryId ) => API.get( '/category/${categoryId}' , getCategory );
