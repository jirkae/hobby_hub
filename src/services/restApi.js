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

export function postLogout(token) {
  return api.post(`${BASE_URL}AuthUsers/logout?access_token=${token}`)
}

export function getUserData(userId) {
  return api.get(`${BASE_URL}AuthUsers/getCurrentUser`)
}

export function putUserData(user) {
    return api.put(`${BASE_URL}AuthUsers/${user.id}`, user)
}

export function getCancelTokenSource() {
  return CancelToken.source();
}

export function setAuthToken(authToken) {
  api.defaults.headers.common['Authorization'] = authToken;
}

export function getParticipants(eventId) {
  return api.get(`${BASE_URL}AuthUser/${eventId}`)
}

export function postToggleParticipation(props) {
  return api.post(`${BASE_URL}Participations/toggleParticipation`, props)
}
