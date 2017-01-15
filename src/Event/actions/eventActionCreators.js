import * as API from './../../Base/services/restApi';
import * as C from './eventActionTypes';

export function getLatestEventsSuccess(payload) {
    return { type: C.GET_LATEST_EVENTS, payload };
}

export function getFilteredEventsSuccess (payload) {
    return { type: C.GET_FILTERED_EVENTS, payload };
}

export function getEventDataSuccess (payload) {
    return { type: C.GET_EVENT_DATA, payload };
}

export function getParticipantsSuccess (payload) {
    return { type: C.GET_PARTICIPANTS, payload };
}

export function getUserEventsSuccess(payload) {
    return { type: C.GET_USER_EVENTS_SUCCESS, payload };
}

export function getLatestEvents() {
    return function (dispatch) {
        return API.getLatestEvents()
            .then(response => {
                dispatch(getLatestEventsSuccess(response));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST POSLEDNÍ AKCE', error);
            });
    };
}

export function getFilteredEvents(filter) {
    return function (dispatch) {
        return API.getEvents(filter)
            .then(response => {
                dispatch(getFilteredEventsSuccess(response));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST FILTROVANÉ AKCE', error);
            });
    };
}

export function getEventData(eventId) {
    return function (dispatch) {
        return API.getEventById(eventId)
            .then(response => {
                dispatch(getEventDataSuccess(response));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST DATA AKCE', error);
            });
    };
}

export function getParticipants(eventId) {
    return function (dispatch) {
        return API.getParticipants(eventId)
            .then(response => {
                dispatch(getParticipantsSuccess(response));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST ÚČASTNÍKY AKCE', error);
            });
    };
}

export function toggleParticipant(participant, authToken) {
    return function (dispatch) {
        return API.postToggleParticipation(participant, authToken)
            .then(response => {
                dispatch(getParticipants(participant.eventId));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE TOGGLE PARTICIPANT', error);
            });
    };
}

export function toggleParticipantConfirmation(participant, authToken) {
    return function (dispatch) {
        return API.postToggleConfirmation(participant, authToken)
            .then(response => {
                dispatch(getParticipants(participant.eventId));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE TOGGLE PARTICIPANT CONFIRMATION', error);
            });
    };
}

export function getUserEvents(userId) {
    return function (dispatch) {
        return API.getOwnedEvents(userId)
            .then(response => {
                dispatch(getUserEventsSuccess(response.data));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST AKCE UŽIVATELE', error);
            });
    };
}
