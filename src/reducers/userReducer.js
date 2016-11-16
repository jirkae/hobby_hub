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
      return {...state, ...action.data}
    }

    case C.REGISTER_USER_SUCCESS: {
      console.log('zapisuji uživatele do kontextu aplikace');

      console.log(`action:`);
      console.log(action);

      console.log(`action payload:`);
      console.log(action.payload);

      return {...state,
        email: action.payload.email,
        id: action.payload.id
      }
    }

    default:
      return state;

  }
}
