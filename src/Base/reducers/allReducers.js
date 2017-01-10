import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import userReducer from './../../User/reducers/userReducer';
import eventReducer from './../../Event/reducers/eventReducer';
import eventsListReducer from './../../Event/reducers/eventsListReducer';

const hobbyReducers = combineReducers({
  modalReducer,
  userReducer,
  eventReducer,
  eventsListReducer
});

export default hobbyReducers;