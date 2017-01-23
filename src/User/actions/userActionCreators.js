import React from 'react';
import * as API from './../../Base/services/restApi';
import * as C from './userActionTypes';
import { openModal, closeModal } from './../../Base/actions/modalActionCreators';
import ConfirmationDialog from '../../Base/components/ConfirmationDialog';

export function loginUserSuccess(payload) {
  return { type: C.LOGIN_USER_SUCCESS, payload };
}

export function loginUserFailure(error, payload) {
  return { type: C.LOGIN_USER_FAILURE, error, payload };
}

export function logoutUserSuccess(payload) {
  return { type: C.LOGOUT_USER_SUCCESS, payload };
}

export function logoutUserFailure(error, payload) {
  return { type: C.LOGOUT_USER_FAILURE, error, payload };
}

export const registerUserSuccess = (payload) => {
  return { type: C.REGISTER_USER_SUCCESS, payload };
};

export function registerUserFailure(error, payload) {
  return { type: C.REGISTER_USER_FAILURE, error, payload };
}

export function getUserDataSuccess(payload) {
  return { type: C.GET_USER_DATA_SUCCESS, payload };
}

export function getUserDataFailure(payload) {
  return { type: C.GET_USER_DATA_FAILURE, payload };
}


export function logoutUser(token) {
  return function (dispatch) {
    API.setAuthToken(null);
    return API.postLogout(token)
      .then(response => {
        dispatch(logoutUserSuccess(response.data));
      }).catch(error => {
          console.log('Chyba při odhlášení:', error);
        dispatch(logoutUserFailure(token, error))
      });
  };
}

export function loginUser(user, onSuccess = null) {
  return function (dispatch) {
    return API.postLogin(user)
      .then(response => {
         API.setAuthToken(response.data.id);

        dispatch(loginUserSuccess(response.data));
        dispatch(closeModal());
        if (onSuccess) {
          onSuccess(response.data);
        }

      }).catch(error => {
        dispatch(loginUserFailure(user, error))
      });
  };
}

export function registerUser(user) {
  return function (dispatch) {
    return API.postRegister(user)
      .then(response => {
          API.setAuthToken(response.data.id);

        dispatch(registerUserSuccess(response.data));
        dispatch(closeModal());
          dispatch(openModal(() => {
              return <ConfirmationDialog type="NONE">
                  Registrace úspěšně proběhla. Zkontrolujte prosím svůj e-mail
              </ConfirmationDialog>
          }));
      }).catch(error => {
        dispatch(registerUserFailure(user, error))
      });
  };
}

export function getUserProfileInfo(id) {
  return function (dispatch) {
    return API.getUserData(id)
      .then(response => {
        dispatch(getUserDataSuccess(response.data));
      }).catch(error => {
        dispatch(getUserDataFailure(id, error))
      });
  };
}

export function putUserProfileInfo(user) {
    return function (dispatch) {
        return API.putUserData(user)
            .then(response => {
                dispatch(openModal(() => {
                    return <ConfirmationDialog type="NONE">
                        Profil uložen
                    </ConfirmationDialog>
                }));
                dispatch(getUserDataSuccess(response.data));
            }).catch(error => {
                console.log('CHYBA, NEPOVEDLO SE NAČÍST INFORMACE O UŽIVATELI', error);
                dispatch(getUserDataFailure(user, error))
            });
    };
}
