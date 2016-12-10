import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import userReducer from './userReducer';
import eventReducer from './eventReducer';

const hobbyReducers = combineReducers({
  modalReducer,
  userReducer,
  eventReducer
});

export default hobbyReducers;