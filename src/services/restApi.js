import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";

export const postRegister = (props) => {
  return axios.post(`${BASE_URL}AuthUsers`, {
    email: props.email,
    password: props.password,
  });
};

export const postLogin = (props) => {
  return axios.post(`${BASE_URL}AuthUsers/login`, {
    email: props.email,
    password: props.password,
  });
};

export function getCancelTokenSource() {
  return CancelToken.source();
}
