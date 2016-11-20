import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";
// const BASE_URL = "http://dev.backend.team03.vse.handson.pro/api/";

export const baseUrl = () => {return `${BASE_URL}`;}

export const postLogin = (props) => {
  return axios.post(`${BASE_URL}AuthUsers/login`,props)
};

export const postRegister = (props) => {
  return axios.post(`${BASE_URL}AuthUsers`,props);
};

export const postEvent = (event) => {
  return axios.post(`${BASE_URL}Events`, event)
};

export const postLogout = (userId) => {
  return axios.post(`${BASE_URL}AuthUser/logout`, userId)
};

export const getUserData = (userId) => {
  return axios.get(`${BASE_URL}AuthUser/${userId}`)
};

export function getCancelTokenSource() {
  return CancelToken.source();
}
