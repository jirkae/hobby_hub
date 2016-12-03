import * as C from './../constants/hobbyConstants';

function eventReducer(state=[], action) {
console.log(action);
  switch (action.type) {
    case C.GET_USER_EVENTS_SUCCESS: {
      return {...state,
          ...action.payload
        }
    }

    default:
      return state;

  }
}

export default eventReducer
