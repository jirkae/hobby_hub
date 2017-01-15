import * as C from './../actions/eventActionTypes';

let defaultState = {
    data: null,
    participantsRequested: [],
    participantsConfirmed: []
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
                participantsRequested: action.payload.data.participantsRequested,
                participantsConfirmed: action.payload.data.participantsConfirmed,
            }
        }

        default:
            return state;

    }
}

export default eventReducer
