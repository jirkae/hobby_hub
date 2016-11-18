import * as C from './../constants/hobbyConstants'

function modalReducer(state={}, action) {

  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: {
      state = {...state, ...action.payload};
      break;
    }

    default:
      return state;
  }

};

export default modalReducer;
