import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";
// const BASE_URL = "http://dev.backend.team03.vse.handson.pro/api/";

let api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'charset': 'utf-8'
  }
});

export const baseUrl = () => {return `${BASE_URL}`;}

export function postLogin(props) {
  return api.post(`${BASE_URL}AuthUsers/login`,props)
}

export function postRegister(props) {
  return api.post(`${BASE_URL}AuthUsers`,props);
}

export function postEvent(event) {
  return api.post(`${BASE_URL}Events`, event)
}

export function postLogout(userId) {
  return api.post(`${BASE_URL}AuthUser/logout`, userId)
}

export function getUserData(userId) {
  return api.get(`${BASE_URL}AuthUser/${userId}`)
}

export function getCancelTokenSource() {
  return CancelToken.source();
}

export function setAuthToken(authToken) {
  api.defaults.headers.common['Authorization'] = authToken;
}