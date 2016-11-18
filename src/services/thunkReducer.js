import * as API from './restApi';
import {
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
  changeModalVisibility
} from "./../actions/index";

export function loginUser(user) {
  return function (dispatch) {
    return API.postLogin(user)
      .then(response => {
        console.log(response.data);
        dispatch(loginUserSuccess(response.data));
        dispatch(changeModalVisibility(false));
      }).catch(error => {
        dispatch(loginUserFailure(user, error))
      });
  };
}

export function registerUser(user) {
  return function (dispatch) {
    return API.postRegister(user)
      .then(response => {
        console.log(response.data);
        dispatch(registerUserSuccess(response.data));
        dispatch(changeModalVisibility(false));
      }).catch(error => {
        dispatch(registerUserFailure(user, error))
      });
  };
}