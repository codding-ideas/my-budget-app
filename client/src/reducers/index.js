import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import usersReducers from './users';


export default combineReducers({
users: usersReducers,
form: reduxForm
})