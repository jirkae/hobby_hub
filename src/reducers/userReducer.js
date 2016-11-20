import * as C from './../constants/hobbyConstants';

function userReducer(state={}, action) {

  switch (action.type) {
    case C.LOGIN_USER_SUCCESS: {
      return {...state,
        user: {
          email: action.payload.email,
          id: action.payload.id
        }
      }
    }

    case C.REGISTER_USER_SUCCESS: {
      return {...state,
        user: {
          email: action.payload.email,
          id: action.payload.id
        }
      }
    }

    case C.GET_USER_DATA_SUCCESS: {
      console.log(action.payload);
      return {...state,
        user: action.payload
      }
    }

    default:
      return state;

  }
}

export default userReducer