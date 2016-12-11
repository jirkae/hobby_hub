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

export function fetchCities(query) {
return api.get(`${BASE_URL}Events/getCities`,
  {
      params: {
          value: query.value,
      }
  }).then((results) => {return results.data.cities});
}

export function fetchTags(query) {
  return api.get(`${BASE_URL}Events/getDistinctTags`,
    {
        params: {
            value: query.value,
        }
    }).then((results) => {return results.data.tags});
}

export function setAuthToken(authToken) {
    api.defaults.headers.common['Authorization'] = authToken;
}

export function getLatestEvents() {
    return api.get(`${BASE_URL}Events?filter[limit]=5&filter[order]=dateCreated DESC`)
    .then((results) => {return results.data});
}

export function getEvents(params) {
    return api.get(`${BASE_URL}Events/findByTagsOrCities`, {
        params: params
    }).then((results) => {return results.data.events});
}

export function postLogin(props) {
    return api.post(`${BASE_URL}AuthUsers/login`, props)
}

export function postRegister(props) {
    return api.post(`${BASE_URL}AuthUsers`, props);
}

export function postEvent(event, user) {
  return api.post(`${BASE_URL}AuthUsers/${user.userId}/ownEvents`, event);
}

export function updateEvent(event, user, eventId) {
  return api.put(`${BASE_URL}AuthUsers/${user.userId}/ownEvents/${eventId}`, event);
}

export function postLogout(token) {
    return api.post(`${BASE_URL}AuthUsers/logout?access_token=${token}`)
}

export function getUserData(id) {
    return api.get(`${BASE_URL}AuthUsers/${id}`)
}

export function putUserData(user) {
  const userData = {
    firstName: user.firstName,
      lastName: user.lastName,
      info: user.info
  };
    return api.put(`${BASE_URL}AuthUsers/${user.userId}?access_token=${user.id}`, userData)
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

export function getEventById(eventId) {
    return api.get(`${BASE_URL}events/${eventId}`);
}
