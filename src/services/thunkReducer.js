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
         API.setAuthToken(response.data.id);
         // API.setAuthToken(response.data.userId);

        dispatch(loginUserSuccess(response.data));
        dispatch(changeModalVisibility(false));

      }).catch(error => {
          console.log("CYBAAAA!!!! AAAAAA!!!");
        dispatch(loginUserFailure(user, error))
      });
  };
}

export function registerUser(user) {
  return function (dispatch) {
    return API.postRegister(user)
      .then(response => {
          API.setAuthToken(response.data.id);
          // API.setAuthToken(response.data.userId);

        dispatch(registerUserSuccess(response.data));
        dispatch(changeModalVisibility(false));

      }).catch(error => {
            console.log("CYBAAAA!!!! AAAAAA!!!");
        dispatch(registerUserFailure(user, error))
      });
  };
}

export function logoutUser(token) {
  return function (dispatch) {
    return API.postLogout(token)
      .then(response => {
        dispatch(logoutUserSuccess(response.data));
      }).catch(error => {
        dispatch(logoutUserFailure(token, error))
      });
  };
}

export function getUserProfileInfo(id) {
  return function (dispatch) {
    return API.getUserData(id)
      .then(response => {
        dispatch(getUserDataSuccess(response.data));
      }).catch(error => {
        dispatch(getUserDataFailure(id, error))
      });
  };
}

export function putUserProfileInfo(user) {
    return function (dispatch) {
        return API.putUserData(user)
            .then(response => {
                dispatch(getUserDataSuccess(response.data));
            }).catch(error => {
                dispatch(getUserDataFailure(user, error))
            });
    };
}