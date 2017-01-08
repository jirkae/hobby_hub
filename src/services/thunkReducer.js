import * as API from './restApi';
import {
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
  registerUserSuccess,
  registerUserFailure,
  changeModalVisibility,
  getUserDataSuccess,
  getUserDataFailure,
  getUserEventsSuccess,
  getLatestEventsSuccess,
  getFilteredEventsSuccess
} from "./../actions/index";








export function getEvents(userId) {
    return function (dispatch) {
        return API.getLatestEvents(userId)
            .then(response => {
                dispatch(getUserEventsSuccess(response.data));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST AKCE UŽIVATELE', error);
            });
    };
}

