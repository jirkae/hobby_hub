import * as C from './../constants/hobbyConstants'

const modalReducer = (state={}, action) => {
  switch (action.type) {
    case C.CHANGE_MODAL_VISIBLE: { // možno využít v případě úpravy titulku modálního okna nebo něco podobného
      console.log('Měním stav modálního okna');

      state = {...state, ...action.data};
      break;
    }
    // case "CHANGE_PARAMS"
  }
  return state;
};

export default modalReducer;
