import { combineReducers } from 'redux';
import usersReducers from './users';


export default combineReducers({
users: usersReducers

})