import * as C from './../constants/hobbyConstants';

function eventReducer(state = [], action) {
console.log(action.type);
  switch (action.type) {


    case C.GET_USER_EVENTS_SUCCESS: {
      return [
        ...action.payload
      ]
    }

    case C.GET_COMMENTS_SUCCESS: {
      
      return {
        ...state,
        comments: action.payload
      };
    }

    default:
      return state;

  }
}

export default eventReducer
