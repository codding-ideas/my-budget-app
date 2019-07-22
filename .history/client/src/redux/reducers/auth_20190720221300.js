

const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null
}

export default function(state = initialState, acttion) {
 switch(acttion.type){

   //lOAD THE USER
   case 'USER_LOADED':
      return 
   case 'REGISTER_SUCCESS':
    localStorage.getItem('token', acttion.payload.token) //We don't want to keep the token in state

    //The state is an object so it will return an object
    return {
       ...state,
       ...acttion.payload,
       isAuthenticated: true,
       loading: false

    }

    case 'REGISTER_FAIL':
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