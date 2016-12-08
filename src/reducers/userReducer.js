import * as C from './../constants/hobbyConstants';

function userReducer(state={user: {}}, action) {

  switch (action.type) {
    case C.LOGIN_USER_SUCCESS: {
      return {...state,
        user: {
          id: action.payload.id,
          userId: action.payload.userId
        }
      }
    }

    case C.REGISTER_USER_SUCCESS: {
      return {...state,
        user: {
          id: action.payload.id,
          userId: action.payload.userId
        }
      }
    }

    case C.REGISTER_USER_FAILURE: {
      return {...state,
        user: {
          registerError: action.payload
        }
      }
    }

    case C.GET_USER_DATA_SUCCESS: {
      return {...state,
          user: {
            id: state.user.id, // původní stav, nemazat!
            userId: state.user.userId,

            email: action.payload.user.email,
            firstName: action.payload.user.firstName,
            lastName: action.payload.user.lastName,
            info: action.payload.user.info
          }
      }
    }

      case C.LOGOUT_USER_SUCCESS: {
        return {...state,
            user: {}
        }
      }

    default:
      return state;

  }
}

export default userReducer
