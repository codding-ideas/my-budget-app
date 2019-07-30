
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   user: null,
   users: []
   loading: true
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
       case 'LOGIN_SUCCESS':
          case 'REGISTER_SUCCESS':
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
           isAuthenticated: true,
           loading: false,
           user: payload
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
 



 