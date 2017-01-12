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
          registerSuccess: true
        }
      }
    }

    case C.REGISTER_USER_FAILURE: {
      return {...state,
        user: {
          registerSuccess: false,
          registerError: action.payload
        }
      }
    }

    case C.GET_USER_DATA_SUCCESS: {
      return {...state,
          user: {
            id: state.user.id, // původní stav, nemazat!
            userId: state.user.userId,

            email: action.payload.email,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            info: action.payload.info,
            interests: action.payload.interests
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
