import { combineReducers } from 'redux';

import alerts from './alertReducers';
import users from './usersReducers';




export default combineReducers({
  alerts,
  users
});
 