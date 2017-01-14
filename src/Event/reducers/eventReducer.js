import * as C from './../actions/eventActionTypes';

let defaultState = {
    data: null,
    participants: []
};

function eventReducer(state = defaultState, action) {
    switch (action.type) {
        case C.GET_EVENT_DATA: {
            return {
                ...state,
                data: action.payload.data
            }
        }

        case C.GET_PARTICIPANTS: {
            return {
                ...state,
                participants: action.payload.data
            }
        }

        default:
            return state;

    }
}

export default eventReducer
