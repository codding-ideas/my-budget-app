import { combineReducers } from 'redux';
import users  from './userRegistrationReducer';
import alerts from './alertReducers';
import auth from './auth'


export default combineReducers({
  users,
  alerts,
  auth
});
