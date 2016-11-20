import * as C from './../constants/hobbyConstants'

function modalReducer(state={}, action) {

  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: {
      return {...state,
        showModal: action.payload
      }
    }

    default:
      return state;
  }

};

export default modalReducer;
