import * as API from './../../Base/services/restApi';
import * as C from './eventActionTypes';

export function getLatestEventsSuccess(payload) {
    return { type: C.GET_LATEST_EVENTS, payload };
}

export function getFilteredEventsSuccess (payload) {
    return { type: C.GET_FILTERED_EVENTS, payload };
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
