
 
 const initialState = {
   user: null,
   loading: false
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
       case 'REGISTER_SUCCESS':
       return {
         ...state,
          
         loading: false
       };
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
 



 