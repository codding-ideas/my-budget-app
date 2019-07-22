import axios from 'axios';

import  { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken'

//LOAD ANYTIME THE BOOTS UP

export const loadUser = () => async dispatch => {
    //check if the user has a token
    //Put the token in the header to make any request as we use to,
    //when making a request to a protective routes
    //Remember we have that token in a localStorage
    //We have to create a function in utils folder to check if there,
    //is a token

    //Check localStorage  if there is a token
    if(localStorage.token) {
        setAuthToken(localStorage.token) //If there is a token, it will attach to localStorage as localStorage.token
    }

    //Then we have to make our request
    try {
        
        //This route will give the details of the authenticated user
        const res = await axios.get('/api/auth')

        //If there is a user then we dispatch the data
        dispatch({
            type: 'USER_LOADED',
            payload: res.data //At this we can retrieve this user using a componenet

        }) 
    } catch (err) {
        //If there is an error we will dispatch auth error
        dispatch({
            type: AUTH_ERROR
        })
    }
  //next, go to reducer to handle this user to be available in our state
}



//Register a user

export const register = ({name, email, password}) => async dispatch => {
   const config  = {
       headers: {
           'Content-Type': 'application/json'
       }
   }

   const body = JSON.stringify({name, email, password})

   try {
       const res = await axios.post('/api/users', body, config)

       //If everything was ok, then we dispatch register success
       dispatch({
           type: REGISTER_SUCCESS,
           payload: res.data //All what is coming from this route is a token
       })

        //Loading the user after registration

        
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
           type: REGISTER_FAIL
       })
   }
}




//LOGIN

export const login = ( email, password) => async dispatch => {
    const config  = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 
    const body = JSON.stringify({email, password})
 
    try {
        const res = await axios.post('/api/auth', body, config)
 
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
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
  };
  