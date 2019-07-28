import axios from 'axios';
import { setAlert } from './alertAction';
import setAuthToken from '../../utils/setAuthToken'



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




  //GET MY PROFILE

//   export  const getMyProfile = () => {
    
//       return function(dispatch) {
//         axios.get('/api/getMyProfile')
//         .then((user) => {
//              return dispatch({
//                  type: 'GET_MY_PROFILE',
//                  payload: user.data   
//              })
//         }).catch((error) => {
//             console.log('Fail', error)
//           })
//       }
    
//     }



 // Logout / Clear Profile
 export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
  };
