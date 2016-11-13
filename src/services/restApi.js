import axios, { CancelToken } from 'axios';

const BASE_URL = "http://localhost:3000/api/";

export const postRegister = (props) => {
  return axios.post(BASE_URL & 'AuthUsers', {
    email: this.props.email,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    password: this.props.password,
  }).then(
    // dispatch action
  );
};

export const postLogin = (props) => {
  return axios.post(`${BASE_URL}AuthUsers/login`, {
    email: this.props.email,
    password: this.props.password,
  });
};

export function getCancelTokenSource() {
  return CancelToken.source();
}
