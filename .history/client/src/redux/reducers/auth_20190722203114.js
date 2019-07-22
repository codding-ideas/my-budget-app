// import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from '../actions/types';


// const initialState = {
//     token : localStorage.getItem('token'), //Fetching the token
//     isAuthenticated: null,
//     loading: true,
//     user: null
// }

// export default function(state = initialState, action ) {
//     const {type, payload } = action
//      switch(type){

//         case USER_LOADED:
//                    return {
//                        ...state,
//                        isAuthenticated: true,
//                        loading: false,
//                        user: payload
//                    } 

//          case REGISTER_SUCCESS: 
//          case LOGIN_SUCCESS:
//           localStorage.setItem('token', payload.token); //setting the token. 
//           //NOTE: We tokens are stateless so we don't include them in our state
//           return {
//               ...state,
//               ...payload,
//               isAuthenticated: true,
//               loading: false
            
//           }
 
//           //REGISTER_FAIL and AUTH_ERROR wo
//           case REGISTER_FAIL:
//           case AUTH_ERROR:  
//           case LOGIN_FAIL:
//           case LOGOUT:
//                 localStorage.removeItem('token')//Removing the token
//                 return {
//               ...state,
//               isAuthenticated: false,
//               loading: true
//                 }
          
//           default: 
//           return state
//      }
// }


import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   ACCOUNT_DELETED
 } from '../actions/types';
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: null,
   loading: true,
   user: null
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;
 
   switch (type) {
     case USER_LOADED:
       return {
         ...state,
         isAuthenticated: true,
         loading: false,
         user: payload
       };
     case REGISTER_SUCCESS:
     case LOGIN_SUCCESS:
       localStorage.setItem('token', payload.token);
       return {
         ...state,
         ...payload,
         isAuthenticated: true,
         loading: false
       };
     case REGISTER_FAIL:
     case AUTH_ERROR:
     case LOGIN_FAIL:
     case LOGOUT:
     case ACCOUNT_DELETED:
       localStorage.removeItem('token');
       return {
         ...state,
         token: null,
         isAuthenticated: false,
         loading: false
       };
     default:
       return state;
   }
 }
 



