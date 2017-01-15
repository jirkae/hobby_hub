import * as C from './modalActionTypes';

export function openModal(payload) {
  return { type: C.OPEN_MODAL, payload };
}

export function closeModal(payload) {
  return { type: C.CLOSE_MODAL, payload };
}
