import * as C from './../actions/eventActionTypes';

let defaultState = {
    items: [],
    conditions: []
}

function eventsListReducer(state = defaultState, action) {

    switch (action.type) {
        case C.GET_LATEST_EVENTS:
        case C.GET_FILTERED_EVENTS: 
        case C.GET_USER_EVENTS_SUCCESS: {
            return {
                ...state,
                items: action.payload
            }
        }

        default:
            return state;

    }
}

export default eventsListReducer
