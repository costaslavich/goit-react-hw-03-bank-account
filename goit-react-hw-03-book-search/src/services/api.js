import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchItems = (query, subject) => {
  return query === ''
    ? axios.get(`${BASE_URL}${query}`)
    : axios.get(`${BASE_URL}${query}+subject:${subject}`);
};

export const fn = () => null;
