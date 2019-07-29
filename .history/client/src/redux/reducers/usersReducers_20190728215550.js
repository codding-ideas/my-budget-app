
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   loading: true,
   allUsers: [],
   user: null 
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
     case 'REGISTER_SUCCESS':
       return {
         ...state,
         userCreated: payload,
        al
         isCreated: true
       }
      
       case 'LOGIN_SUCCESS':
       localStorage.setItem('token', payload.token);
       return {
         ...state,
         ...payload,
         isAuthenticated: true,
         loading: false
       };
       case 'GET_MY_PROFILE':
         return{
           ...state,
           user: payload,
           isAuthenticated: true,
           allUsers: payload
         }
      case 'REGISTER_FAIL':
      case 'AUTH_ERROR':
      case 'LOGOUT':

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
 



 