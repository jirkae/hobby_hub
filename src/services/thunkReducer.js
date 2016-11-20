import * as API from './restApi';
import {
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
  registerUserSuccess,
  registerUserFailure,
  changeModalVisibility,
  getUserDataSuccess,
  getUserDataFailure
} from "./../actions/index";

export function loginUser(user) {
  return function (dispatch) {
    return API.postLogin(user)
      .then(response => {
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
        dispatch(registerUserSuccess(response.data));
        dispatch(changeModalVisibility(false));
      }).catch(error => {
        dispatch(registerUserFailure(user, error))
      });
  };
}

export function logoutUser(userId) {
  return function (dispatch) {
    return API.postLogout(userId)
      .then(response => {
        dispatch(logoutUserSuccess(response.data));
      }).catch(error => {
        dispatch(logoutUserFailure(userId, error))
      });
  };
}

export function getUserProfileInfo(userId) {
  return function (dispatch) {
    return API.getUserData(userId)
      .then(response => {
        dispatch(getUserDataSuccess(response));
      }).catch(error => {
        dispatch(getUserDataFailure(userId, error))
      });
  };
}