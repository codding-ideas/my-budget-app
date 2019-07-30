import { combineReducers } from 'redux';

import alerts from './alertReducers';
import users from './usersReducers';
import auth from './auth';
import fetchAllIncome from './incomeReducers'




export default combineReducers({
  alerts,
  auth,
  fetchAllIncome
});
 