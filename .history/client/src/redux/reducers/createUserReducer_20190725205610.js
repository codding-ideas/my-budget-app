
 
 const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: null,
   loading: true,
   user: null,
  //  myStorage: localStorage.getItem('name')
 };
 
 export default function(state = initialState, action) {
   const { type, payload } = action;

 
   switch (type) {
     case 'USER_LOADED':
       return {
         ...state,
         isAuthenticated: true,
         loading: false,
         user: payload
       };
     case 'REGISTER_SUCCESS':
       localStorage.setItem('token', 'Emmanuel & daim');
       return {
         ...state,
         ...payload,
         isAuthenticated: true,
         loading: false
       };
     case 'REGISTER_FAIL':
     case 'AUTH_ERROR':

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
 



