import { combineReducers } from 'redux';

import alerts from './alertReducers';
import users from './usersReducers';
import myProfile from './getMyProfile'



export default combineReducers({
  alerts,
  users,
  myProfile //This contains the token, user, and others,


});
 