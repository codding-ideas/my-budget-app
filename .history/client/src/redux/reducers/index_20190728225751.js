import { combineReducers } from 'redux';

import alerts from './alertReducers';
import users from './usersReducers';
import auth from './usersReducers';




export default combineReducers({
  alerts,
  users,
  auth
});
 