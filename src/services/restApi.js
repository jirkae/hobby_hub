import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";
//const BASE_URL = "http://dev.backend.team03.vse.handson.pro/api/";

export const baseUrl = () => {return `${BASE_URL}`;}

export const postRegister = (props) => {
  return axios.post(`${BASE_URL}AuthUsers`,
    JSON.stringify({
      email: props.email,
      name: props.name,
      password: props.password,
    })
  );
};

export const postEvent = (event) => {
  return axios.post(`${BASE_URL}Events`, event)
}

export const postLogin = (props) => {
  return axios.post(`${BASE_URL}AuthUsers/login`,
    JSON.stringify({
      email: props.email,
      password: props.password,
    })
  )
};

export function getCancelTokenSource() {
  return CancelToken.source();
}
