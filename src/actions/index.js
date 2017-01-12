import * as C from './../constants/hobbyConstants';

export function loginUserSuccess(payload) {
  return { type: C.LOGIN_USER_SUCCESS, payload };
}

export function loginUserFailure(error, payload) {
  return { type: C.LOGIN_USER_FAILURE, error, payload };
}

export function logoutUserSuccess(payload) {
  return { type: C.LOGOUT_USER_SUCCESS, payload };
}

export function logoutUserFailure(error, payload) {
  return { type: C.LOGOUT_USER_FAILURE, error, payload };
}

export const registerUserSuccess = (payload) => {
  return { type: C.REGISTER_USER_SUCCESS, payload };
};

export function registerUserFailure(error, payload) {
  return { type: C.REGISTER_USER_FAILURE, error, payload };
}

export function changeModalVisibility(payload) {
  return { type: C.CHANGE_MODAL_VISIBLE, payload };
}

export function getUserDataSuccess(payload) {
  return { type: C.GET_USER_DATA_SUCCESS, payload };
}

export function getUserDataFailure(payload) {
  return { type: C.GET_USER_DATA_FAILURE, payload };
}

export function getUserEventsSuccess(payload) {
    return { type: C.GET_USER_EVENTS_SUCCESS, payload };
}

export function getLatestEventsSuccess(payload) {
    return { type: C.GET_LATEST_EVENTS, payload };
}

export function getFilteredEventsSuccess (payload) {
    return { type: C.GET_FILTERED_EVENTS, payload };
}
