
const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null
}

export default function(state = initialState, action) {

   const { type, payload } = action;

 switch(type){

   //lOAD THE USER
   case 'USER_LOADED':
      return {
         ...state,
         isAuthenticated: true,
         loading: false,
         user: payload
      }
   case 'REGISTER_SUCCESS':
    localStorage.getItem('token',payload.token) //We don't want to keep the token in state

    //The state is an object so it will return an object
    return {
       ...state,
       ...payload,
       isAuthenticated: true,
       loading: false

    }

    case 'REGISTER_FAIL':
     case 'AUTH_ERROR': //Register error and auth eror do the same thing
    localStorage.removeItem('token');
    return {
     ...state,
     token: null,
     isAuthenticated: false,
     loading: false
    }
    default:
     return state
 }
}