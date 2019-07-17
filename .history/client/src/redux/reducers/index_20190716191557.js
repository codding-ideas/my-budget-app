import { combineReducers } from 'redux';
import users  from './userRegistrationReducer';
import alerts from './alertReducers';
import A


export default combineReducers({
  users,
  alerts
});
