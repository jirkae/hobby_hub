import * as C from './../constants/hobbyConstants'

const modalReducer = (state={}, action) => {
  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: {
      console.log('Měním stav modálního okna');
      state = {...state, showModal: !state.showModal};
      break;
    }
    // case "CHANGE_PARAMS"
  }
  return state;
};

export default modalReducer;
