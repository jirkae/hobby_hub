import * as C from './../constants/hobbyConstants';

export default function userReducer(state={}
//   user: {
//     id: null,
//     userId: null,
//     email: null,
//     firstName: null,
//     lastName: null,
//   }
// }
, action) {

  switch (action.type) {
    case C.LOGIN_USER_SUCCESS: {
      console.log(state);
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

    default:
      return state;

  }
}
