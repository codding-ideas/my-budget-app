import { combineReducers } from 'redux';
import users  from './userRegistrationReducer';
import alerts from './alertReducers';
import auth from './createUserReducer'


export default combineReducers({
  users,
  alerts,
  myauth //This contains the token, user, and others
});
