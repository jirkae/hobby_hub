import * as C from './../actions/eventActionTypes';
import * as CU from './../../User/actions/userActionTypes';

function eventReducer(state = [], action) {

    switch (action.type) {
        case CU.GET_USER_EVENTS_SUCCESS:
        case C.GET_LATEST_EVENTS:
        case C.GET_FILTERED_EVENTS: {
            return [
                ...action.payload
            ]
        }

        default:
            return state;

    }
}

export default eventReducer
