import axios from 'axios';
import { USER_LOADED, AUTH_ERROR, CREATE_INCOME} from './types';
import  { setAlert } from './alert'




//Register a user

export const register = (values) => async dispatch => {
   const config  = {
       headers: {
           'Content-Type': 'application/json'
       }
   }

   const body = JSON.stringify(values)

   try {
       const res = await axios.post('/api/income/create', body, config)

       //If everything was ok, then we dispatch register success
       dispatch({
           type: CREATE_INCOME,
           payload: res.data //All what is coming from this route is a token
       })
        dispatch(loadUser())
        //Loading the user after registration

        
   } catch (err) {
 
    const errors = err.response.data.errors;

    if(errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
       dispatch({
           type: REGISTER_FAIL
       })
   }
}



