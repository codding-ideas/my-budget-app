import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from './types';
import  { setAlert } from './alert'




//Register a user

export const register = ({name, email, password}) => async dispatch => {
   const config  = {
       headers: {
           'Content-Type': 'application/json'
       }
   }

   const body = JSON.stringify({name, email, password})

   try {
       const res = await axios.post('/api/auth/register', body, config)

       //If everything was ok, then we dispatch register success
       dispatch({
           type: REGISTER_SUCCESS,
           payload: res.data //All what is coming from this route is a token
       })
        dispatch(loadUser())
        //Loading the user after registration

        
   } catch (err) {
 
    //Using the error action creator
    //These are the errors we defined inside our express routes under register pos
    //If there are erros then we give it setAlert action creator
    //We defined msg to store all errors in our backend
    console.log(err)
    const errors = err.response.data.errors;

    if(errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
       dispatch({
           type: REGISTER_FAIL
       })
   }
}




//LOGIN

export const login = ( {email, password}) => async dispatch => {
    const config  = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 
    const body = JSON.stringify({email, password})
 
    try {
        const res = await axios.post('/api/auth/login', body, config)
 
        //If everything was ok, then we dispatch register success
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data //All what is coming from this route is a token
        })
        //Loading the user after loging in
        dispatch(loadUser())
    } catch (err) {
  
     //Using the error action creator
     //These are the errors we defined inside our express routes under register pos
     //If there are erros then we give it setAlert action creator
     //We defined msg to store all errors in our backend
 
     const errors = err.response.data.errors;
 
     if(errors) {
         errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
     }
        dispatch({
            type: LOGIN_FAIL
        })
    }
 }


 // Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
  };
  