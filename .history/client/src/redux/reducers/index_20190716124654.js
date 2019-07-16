import { combineReducers } from 'redux';
import users  from './userRegistrationReducer';
import alerts from './alertReducers'


export default combineReducers({
  users
});
