import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import account from './'

export default combineReducers({
   alert,
   auth
});
