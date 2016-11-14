import {combineReducers} from 'redux';

import ModalReducer from './ModalReducer';
import userReducer from './userReducer';

export default combineReducers({
  ModalReducer,
  userReducer
});