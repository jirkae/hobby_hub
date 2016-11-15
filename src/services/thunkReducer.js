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
        dispatch(loginUserSuccess(response));
        dispatch(changeModalVisibility());
      }).catch(error => {
        dispatch(loginUserFailure(user, error))
      });
  };
}

export function registerUser(user) {
  return function (dispatch) {
    return API.postRegister(user)
      .then(response => {
        dispatch(registerUserSuccess(response));
        dispatch(changeModalVisibility());
      }).catch(error => {
        dispatch(registerUserFailure(user, error))
      });
  };
}