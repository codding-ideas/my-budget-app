import axios from 'axios';
import { setAlert } from './alert'


import { GET_PROFILE, PROFILE_ERROR }  from './types';



//Get current users profile

export const  getCurrenProfile = () => async dispatch => {
    try { 

        //NOTE:
        //In the post we created a profile using a token from the user who has login

        //So our challenge now is, how can we send the token created when we login

        //Remember that when we login, there is a function that extract the token and keep it in the localStorage and since this token is in our browser we have access to any protective route and the route below display the current user who has login profile

        const res = await axios.get('/api/profile/me')
        dispatch({
              type: GET_PROFILE,
              payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}  //Remember we have this error in our state
        })
    }
}


//====ACTION TO CREATE AND UPDATE A PROFILE

//We want to redirect the user after creating, so we need to this parameter,
//call history which has a push method, that will direct us to a client side,
//route

//We also pass in a parameter edit=false, this will detetermine,
//if we are editing or creating

export const createProfile = (formData, history, edit = false)  => async dispatch => {

    try {
        
        //Since we are sending data we need to create our config object
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
     //We are making request to endpoint that create and edit profile

     //The formData will be available the component will call this action

     //This endpoint return the user profile so we have to get it
     const res = await axios.post('/api/profile', formData, config);

     dispatch({
        type: GET_PROFILE,
        payload: res.data
  })
    //We want to display updated message or created so we will make message different
    dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created'))

    //Next if we are editing it we don't want to redirect, we want to stay on the page but for creating, we will redirect

    if(!edit) {
        history.push('/dashboard')
    }

    } catch (err) {

        const errors = err.response.data.errors;
 
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}  //Remember we have this error in our state
            //We also want validation errors
        })
    }
}