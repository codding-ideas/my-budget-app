import { combineReducers } from 'redux';

import alerts from './alertReducers';
//import users from './usersReducers';
import user from './user';
import fetchAllIncome from './incomeReducers'




export default combineReducers({
  alerts,
  user,
  fetchAllIncome
});
 