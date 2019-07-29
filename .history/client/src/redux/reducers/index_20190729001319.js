import { combineReducers } from 'redux';

import alerts from './alertReducers';
// import users from './usersReducers';
import auth from './auth';




export default combineReducers({
  alerts,
  auth
});
 