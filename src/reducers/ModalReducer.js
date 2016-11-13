import * as C from './../constants/hobbyConstants'

const modalReducer = (state={}, action) => {
  switch (action.type) {
    case C.CHANGE_VISIBILITY: {
      state = {...state, showModal: action.payload}
      break;
    }
    // case "CHANGE_PARAMS"
  }
  return state;
};

export default modalReducer;
