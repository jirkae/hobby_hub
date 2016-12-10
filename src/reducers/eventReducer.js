import * as C from './../constants/hobbyConstants';

function eventReducer(state=[], action) {

  switch (action.type) {
    case C.GET_USER_EVENTS_SUCCESS: {
      return [
          ...action.payload
        ]
    }

    default:
      return state;

  }
}

export default eventReducer
