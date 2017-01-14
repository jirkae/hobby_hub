import * as C from './../actions/modalActionTypes'
import * as U from './../../User/actions/userActionTypes'

function modalReducer(state={}, action) {

  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: {
      return {...state,
        showModal: action.payload,
          error: !action.payload
      }
    }

      case U.LOGIN_USER_FAILURE:
      case U.REGISTER_USER_FAILURE:{
        return { ...state,
            error: action.payload
        }
      }
    default:
      return state;
  }

}

export default modalReducer;
