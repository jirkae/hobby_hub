import * as C from './modalActionTypes';

export function changeModalVisibility(payload) {
  return { type: C.CHANGE_MODAL_VISIBLE, payload };
}
