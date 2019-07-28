
 
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
  
       return {
         ...state,
        user: null
         isAuthenticated: false,
         loading: false
       };
     default:
       return state;
   }

   
 }
 



 