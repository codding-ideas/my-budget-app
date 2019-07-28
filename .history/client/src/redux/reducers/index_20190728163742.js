import { combineReducers } from 'redux';

import alerts from './alertReducers';
import auth from './usersReducers';



export default combineReducers({
  alerts,
  auth, //This contains the token, user, and others,
  myProfile

});
 