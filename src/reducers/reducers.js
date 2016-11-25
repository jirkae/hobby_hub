import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import userReducer from './userReducer';

const hobbyReducers = combineReducers({
  modalReducer,
  userReducer
});

export default hobbyReducers;