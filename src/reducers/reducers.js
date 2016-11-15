import {combineReducers} from 'redux';

import modalReducer from './modalWindowReducer';
import userReducer from './userReducer';

export default combineReducers({
  modalReducer,
  userReducer
});