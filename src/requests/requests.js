import axios from 'axios';

export function userRequest(id) {
  return axios.get(`http://localhost:4000/users/${id}`);
}

export function companyRequest(id) {
  return axios.get(`http://localhost:4000/companies/${id}`);
}

export function companyUsers(id) {
  return axios.get(`http://localhost:4000/companies/${id}/users`);
}
