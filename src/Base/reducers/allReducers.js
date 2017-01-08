import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import userReducer from './../../User/reducers/userReducer';
import eventReducer from './../../Event/reducers/eventReducer';

const hobbyReducers = combineReducers({
  modalReducer,
  userReducer,
  eventReducer
});

export default hobbyReducers;