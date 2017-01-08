import * as C from './../actions/modalActionTypes'

function modalReducer(state={}, action) {

  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: {
      return {...state,
        showModal: action.payload,
          error: !action.payload
      }
    }

      case C.LOGIN_USER_FAILURE:
      case C.REGISTER_USER_FAILURE:{
        return { ...state,
            error: action.payload
        }
      }
    default:
      return state;
  }

}

export default modalReducer;
