import * as C from './../constants/hobbyConstants';

export const loginUser = data => {
  return { type: C.LOGIN_USER, data };
};

export const registerUser = data => {
  return { type: C.REGISTER_USER, data };
};
