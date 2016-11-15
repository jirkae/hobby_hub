import * as C from './../constants/hobbyConstants';

export default function userReducer(state={
  user: {
    id: null,
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
  }
}, action) {

  switch (action.type) {
    case C.LOGIN_USER_SUCCESS: {
      return {...state, ...action.data}
    }

    case C.REGISTER_USER_SUCCESS: {
      return {...state, ...action.data}
    }

  }

  return state
}
