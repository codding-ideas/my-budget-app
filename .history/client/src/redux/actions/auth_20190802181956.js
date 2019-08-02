import axios from 'axios';
import { setAlert } from './alertAction';
import setAuthToken from '../../utils/setAuthToken'


export const getMyProfile = () => async dispatch => {

    //Check if there is a token, then put it in a global header
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    //If there is a token then we make our request
    try {
        
        const res = await axios.get('/api/users/getMyProfile');

        //Dispatch user loaded
        dispatch({
            type: 'USER_LOADED',
            payload: res.data //This is the user
        })
    } catch (error) {
        dispatch({
            type: 'AUTH_ERROR'
        })
    }

}




//LOGIN

export const login = (values) => async dispatch => {
    const config  = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 
    const body = JSON.stringify(values)
 
    try {
        const res = await axios.post('/api/user/login', body, config)
 
        //If everything was ok, then we dispatch register success
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data //All what is coming from this route is a token
        })
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
            type: 'LOGIN_FAIL'
        })
    }
 }


 // Logout / Clear Profile
 export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
  };
