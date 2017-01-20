import * as C from './../actions/modalActionTypes'
import * as U from './../../User/actions/userActionTypes'

let defaultState = {
  showModal: false,
  contentGenerator: () => { return null; },
  error: null
};

function modalReducer(state = defaultState, action) {

  switch (action.type) {
    case C.OPEN_MODAL: {
      return {
        ...state,
        showModal: true,
        contentGenerator: action.payload
      }
    }

    case C.CLOSE_MODAL: {
      return {
        ...state,
        showModal: false,
        contentGenerator: () => { return null; }
      }
    }

    case U.LOGIN_USER_FAILURE:
    case U.REGISTER_USER_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }

}

export default modalReducer;
