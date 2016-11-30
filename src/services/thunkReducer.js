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
      console.log("THUNK REDUCER");
    return API.postLogin(user)
      .then(response => {
        console.log("SUPER TOKEN");
         console.log('setting auth token', response.data.user.id);
         API.setAuthToken(response.data.id);
        console.log("---------------------"+response.data.userId);
        console.log("---------------------"+response.data.id);
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
        API.setAuthToken(response.data.userId);
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