import { combineReducers } from 'redux';
import users  from './userRegistrationReducer';
import alerts from './alertReducers';
import auth from './createUserReducer';
import myProfile from './getMyProfile'


export default combineReducers({
  users,
  alerts,
  auth //This contains the token, user, and others,
  getMyProfile
});
 