import * as C from './../constants/hobbyConstants';

export function loginUserSuccess(formData) {
  return { type: C.LOGIN_USER_SUCCESS, formData };
}

export function loginUserFailure(error, formData) {
  return { type: C.LOGIN_USER_FAILURE, error, formData };
}

export function registerUserSuccess(formData) {
  return { type: C.REGISTER_USER_SUCCESS, formData };
}

export function registerUserFailure(error, formData) {
  return { type: C.REGISTER_USER_FAILURE, error, formData };
}

export function changeModalVisibility() {
  return { type: C.CHANGE_MODAL_VISIBLE };
}