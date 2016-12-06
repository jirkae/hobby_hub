import axios, { CancelToken } from 'axios';

// const BASE_URL = "http://localhost:3000/api/";
const BASE_URL = "http://dev.backend.team03.vse.handson.pro/api/";

let api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'charset': 'utf-8'
  }
});

export function setAuthToken(authToken) {
    api.defaults.headers.common['Authorization'] = authToken;
}

export function getLatestEvents() {
  return api.get(`${BASE_URL}Events?filter[limit]=10&filter[order]=dateCreated DESC`);
}

export function getEvents(params) {
  return api.get(`${BASE_URL}Events/findByTagsOrCity`, {
    params: {
      city: params.city,
      tags: params.tags
    }
  });
}

export function postLogin(props) {
  return api.post(`${BASE_URL}AuthUsers/login`,props)
}

export function postRegister(props) {
  return api.post(`${BASE_URL}AuthUsers`,props);
}

export function postEvent(event, user) {
  console.log(event);
  return api.post(`${BASE_URL}AuthUsers/${user.userId}/ownEvents`, event);
}

export function postLogout(token) {
  return api.post(`${BASE_URL}AuthUsers/logout?access_token=${token}`)
}

export function getUserData() {
  return api.get(`${BASE_URL}AuthUsers/getCurrentUser`)
}

export function putUserData(user) {
    return api.put(`${BASE_URL}AuthUsers/${user.id}`, user)
}

export function getCancelTokenSource() {
  return CancelToken.source();
}

export function getParticipants(eventId) {
  return api.get(`${BASE_URL}Events/${eventId}/participants`);
}

export function postToggleParticipation(props, authToken) {
  return api.put(`${BASE_URL}Participations/toggleParticipation?access_token=${authToken}`, props)
}

export function getEventOwnedByuser(user, event) {
  return api.get(`${BASE_URL}AuthUsers/${user.userId}/ownEvents/${event.id}`)
}

export function getOwnedEvents(userId) {
    return api.get(`${BASE_URL}AuthUsers/${userId}/ownEvents`)
}