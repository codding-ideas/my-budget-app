import axios from 'axios';

import  { setAlert } from './alert'
import setAuthToken from '../../'

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
            type: 'AUTH_ERROR'
        })
    }
  //next, go to reducer to handle this user to be available in our state
}



//Register a user




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
   