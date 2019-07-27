import axios from 'axios';
import { setAlert } from '../actions/alertAction';
import setAuthToken from '../../utils/setAuthToken'

// //Load user
// //This function is not run yet so we have to run it from main file
export const loadUser = () => async dispatch => {
    //Check if there is a token, then put it in a global header
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    //If there is a token then we make our request
    try {
        
        const res = await axios.get('/api/getMyProfile');

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

//Register a user
export  const registerUser = (values) => {
    
    const config = {
     headers: {
      'Content-Type': 'application/json'
      }
    }
   
   //The values are the data from the form
    const body = JSON.stringify(values)
   
       return function(dispatch) {
           axios.post('/api/users', body, config)
           .then((res) => {
               return dispatch({
                   type: 'REGISTER_SUCCESS',
                   payload: res.data //This endpoint returns a token as specify in the rapi
               })
               
           }).catch((err) => {
                    //ERRORS FROM THE ENDPOINT. They are in array of errors
           const errors = err.response.data.errors //This is where the errors are located
           //check if there are errors
           if(errors){
            errors.forEach((error) => {
             dispatch(setAlert(error.msg, 'danger'))
            })
           }
           dispatch({
            type: 'REGISTER_FAIL'
     })
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
            type: 'LOGIN_FAIL'
        })
    }
 }


 // Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
  };


  //GET MY PROFILE

  export  const getMyProfile = () => {
    
      return function(dispatch) {
        axios.get('/api/getMyProfile')
        .then((user) => {
             return dispatch({
                 type: 'GET_MY_PROFILE',
                 
             })
        })
      }
    
    }