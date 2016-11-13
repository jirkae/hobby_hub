import * as C from './../constants/hobbyConstants';

export function isModalVisible(isVisible) {
  return {
    type: C.CHANGE_VISIBILITY,
    payload: {
      showModal: isVisible,
    }
  }
}