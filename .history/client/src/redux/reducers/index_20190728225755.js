import { combineReducers } from 'redux';

import alerts from './alertReducers';
import users from './usersReducers';
import auth from './';




export default combineReducers({
  alerts,
  users,
  auth
});
 