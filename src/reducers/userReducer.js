import * as C from './../constants/hobbyConstants';

function userReducer(state={user: {}}, action) {

  switch (action.type) {
    case C.LOGIN_USER_SUCCESS: {
      console.log(action.payload);
      return {...state, ...action.data
        // user: {
        //   email: action.payload.email,
        //   id: action.payload.id,
        //   userId: action.payload.userId
        // }
      }
    }

    case C.REGISTER_USER_SUCCESS: {
      return {...state, ...action.data
        // user: {
        //   email: action.payload.email,
        //   id: action.payload.id,
        //   userId: action.payload.userId
        // }
      }
    }

    case C.REGISTER_USER_FAILURE: {
      console.log('UserReducer failed registration: ', action);
      return {...state,
        user: {
          registerError: action.payload
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