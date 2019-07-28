
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   user: null,
   loading: true
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
       case 'LOGIN_SUCCESS':
          case 'USER_LOADED':
       localStorage.setItem('token', payload.token);
       return {
         ...state,
         user:payload,
         isAuthenticated: true,
         loading: false
       };
       case 'USER_LOADED':
         return{
           ...state,
           
         }
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
 



 