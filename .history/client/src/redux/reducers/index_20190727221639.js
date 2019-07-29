import { combineReducers } from 'redux';

import alerts from './alertReducers';
import auth from './usersReducers';
import myProfile from './getMyProfile';
import createdUser from './userRegistrationReducer'


export default combineReducers({
  alerts,
  auth, //This contains the token, user, and others,
  myProfile,

});
 