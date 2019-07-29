
 
 const initialState = {
   user: null,
   loading: true
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
       case 'REGISTER_SUCCESS':
       return {
         ...state,
          user: payload,
         loading: false
       };
      case 'REGISTER_FAIL':
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
 



 