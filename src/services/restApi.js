import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";

export const postRegister = (props) => {
  return axios.post(`${BASE_URL}AuthUsers`,
    JSON.stringify({
      email: props.email,
      name: props.name,
      password: props.password,
    })
  );
};

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
